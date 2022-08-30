import React, {useEffect,useState,useContext,useMemo} from "react"
import axios from "axios"
import {v4 as random} from 'uuid'
import { Menu,MenuButton,MenuItem,MenuRadioGroup} from "@szhsin/react-menu"
import {AiFillCaretDown} from "react-icons/ai"
import '@szhsin/react-menu/dist/index.css';
import { disableBodyScroll,enableBodyScroll } from "body-scroll-lock"

import {  ParentMapProvider  } from "../../Providers/ParentMapProvider"
import {Nav,Title,Selection,Name,ImgFlag,SelCon,SumbmergeBar,ThreeBar1,ThreeBar2,ThreeBar3,SideNewsBar,SideNavBarParent} from "./NavBarStyles"
import { StaticsProvider } from "../../Providers/StaticsProvider"
import { SelectionProvider } from "../../Providers/SelectionProvider"
import News from "../News/News"
const countriesUrl = "https://disease.sh/v3/covid-19/countries"


const ChangeDis = setter => setter( prevValue => !prevValue)

export const NavBar = () => {
    const [dis,setDis] = useState(false)
    const MemoNewBar = useMemo(()=><News/>,[])
    dis === true ? disableBodyScroll(document) : enableBodyScroll(document)
    return <Nav>
        <SumbmergeBar Val = {dis} onClick={ e => ChangeDis(setDis)}>
            <ThreeBar1 Val={dis} style={{marginTop:"3px"}}></ThreeBar1>
            <ThreeBar2 Val={dis} ></ThreeBar2>
            <ThreeBar3 Val={dis} ></ThreeBar3>
        </SumbmergeBar>
        <Title>
            Covid Tracker
        </Title>
        <SideNavBarParent onClick={ e =>{setDis((prevBar)=>!prevBar)}} Val={dis}>
            <SideNewsBar onClick={ e => e.stopPropagation()}>
                {MemoNewBar}
            </SideNewsBar>
        </SideNavBarParent>
    </Nav> 
}
const fetchCountries = async(con,sat) => {
    try{
        const dataFetch = await axios.get(countriesUrl)
        const { data } = dataFetch
        const Statics = []
        const countryInfo = data.map(info=>{
            const country = info.country 
            const flag = info.countryInfo.flag
            const ISO_3 = info.countryInfo.iso3 
            const lat = info.countryInfo.lat 
            const long = info.countryInfo.long 
            const contient = info.continent
            const Active = info.active
            const critical = info.critical
            const Deaths = info.deaths
            const Tests = info.tests
            const Population = info.population
            const tdayC = info.todayCases
            const tdayD = info.todayDeaths
            const tdayR = info.todayRecovered
            const Recovered = info.recovered
            const Cases = info.cases
            const active_Per_M = info.activePerOneMillion
            const deaths_Per_M  = info.deathsPerOneMillion
            Statics.push({
                contient,Active,critical,Deaths,Tests,Population,tdayC,tdayD,tdayR,Recovered,Cases,
                active_Per_M,deaths_Per_M,latlng:[lat,long],flag,country
            })
            
            return {country,flag,ISO_3,latlng:[lat,long]}
        })
        con(()=>{
            return countryInfo
        })
        sat(()=>{
            return Statics
        })
    }catch(e){
        console.log(e,"77:NavBar")
    }
}
export const Countries = () => { 
    const [con,SetCon] = useState([])
    const StaticsData = useContext(StaticsProvider)
    const [priortize,setPriortize] = useState("Select")
    const DatafromContext = useContext(ParentMapProvider)
    const DataFromSelection = useContext(SelectionProvider)
    const {setStatics,statics} = StaticsData
    const {parentMapInstance} = DatafromContext
    const {setSelection } = DataFromSelection
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>fetchCountries(SetCon,setStatics),[])
    return <Selection>
        <SelCon>
            Select Countries
        </SelCon>
            <Menu overflow={"auto"} menuButton={<MenuButton>{priortize}
            <AiFillCaretDown style={{color:"#444",marginLeft:"10px"}} size={15} /></MenuButton>}>
                <MenuRadioGroup  value={priortize}  onRadioChange={(e)=>{
                    setPriortize(e.value[0])
                    const Data = statics.filter(i=>{
                        return i.country === e.value[0]
                    })
                        parentMapInstance.flyTo(e.value[1],7)
                        setSelection(Data)
                    }}>
                    {con.map(country=>{
                        return <MenuItem className="_customMenu" key={random()} value={[country.country,country.latlng]}>
                        <ImgFlag src={country.flag} alt={country.ISO_3}></ImgFlag>
                        <Name>
                            {
                                country.country
                            }
                        </Name>
                        </MenuItem>
                    })}
                </MenuRadioGroup>
            </Menu>
    </Selection>
}




