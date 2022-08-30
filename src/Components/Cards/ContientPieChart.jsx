import React,{useEffect,useState} from "react"
import axios from "axios"
import {Menu,MenuButton,MenuItem, MenuRadioGroup} from "@szhsin/react-menu"
import {AiFillCaretDown} from "react-icons/ai"
import {v4 as random} from 'uuid'
import numeral from "numeral"

import { ContientBarChartContianer } from "./BarChartContientData"
import { ContientPieChartContainer } from "./ContientPieChartContainer"
import {CardHeadings, StaticsInfoDiv,WorldHeading,UpdatedTime,CardHeadings2} from "./cardsStyles"
import { Selection, SelCon } from "../NavBar/NavBarStyles"
import { StaticsContainer } from "./cardsStyles"
const url = "https://disease.sh/v3/covid-19/continents"

const StateSetting = (val,contient,setter) => {
    const UnModifiedData = Object.values(contient)
    const Data = UnModifiedData.map(i=>{
        return i.find(j=>j.continent === val)
    })
    setter(()=>Data)
    return val
}
const FetchContientData = async(dispatch,continentDispatch) => {
    const FetchData = await axios.get(url)
    const {data} = FetchData
    const CardsAndMenuSection = data.map(i=>{
        const {continent,todayCases,todayDeaths,todayRecovered,population,updated} = i
        return {continent,todayCases,todayDeaths,todayRecovered,population,updated}
    })
    const RCTCharts = data.map(i=>{
        const {continent,recovered,cases,tests} = i
        return {continent,recovered,cases,tests}
    })
    const ACDCharts = data.map(i=>{
        const {continent,active,critical,deaths} = i
        return {continent,active,critical,deaths}
    })
    dispatch(()=>{
        return {CardsAndMenuSection,RCTCharts,ACDCharts}
    })
    continentDispatch(()=>{
        return [CardsAndMenuSection[1],RCTCharts[1],ACDCharts[1]]
    })
}
export const ContientData = () => {
    const [contient,setContient] = useState(null)
    const [FeatureContient,SetFeatureContient] = useState("Asia")
    const [DataOfContient,setDataContient] = useState()
    const Time = DataOfContient &&  new Date(DataOfContient[0].updated).toLocaleString()
    useEffect(()=>FetchContientData(setContient,setDataContient),[])
    return <>
        {contient !==null && <Selection>
            <SelCon>
                Select a Continent
            </SelCon>
            <Menu overflow={"auto"} menuButton=
            {<MenuButton>
                {FeatureContient}
                <AiFillCaretDown
                 style={{color:"#444",marginLeft:"10px"}} size={15}></AiFillCaretDown>
            </MenuButton>} >
                <MenuRadioGroup value={FeatureContient} onRadioChange={(e)=>{
                    SetFeatureContient(StateSetting(e.value,contient,setDataContient))
                }}
                >
                {
                    contient.CardsAndMenuSection.map((i,index)=>{
                        return <MenuItem className={"customContientName"} checked={index === 1 ? true : false} key={random()} value={i.continent}>{i.continent}</MenuItem>
                    })
                }
                </MenuRadioGroup>
            </Menu>
        </Selection>}

        {DataOfContient && <>
        <WorldHeading>Continent Data</WorldHeading>
        <UpdatedTime>Updated at {Time}.</UpdatedTime>
        <StaticsContainer>
            <StaticsInfoDiv>
                <CardHeadings>Today Cases</CardHeadings>
                <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#00abff",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>{plusAdder(DataOfContient[0].todayCases)}{numeral(DataOfContient[0].todayCases).format("0.0a").toUpperCase()}
                </div>
                <CardHeadings2>Cases</CardHeadings2>
                 <div style={{color:"#6fd0ff",marginLeft:"10px",marginBottom:"5px",fontFamily:"'Tahoma',sans-serif"}}>+{(numeral(DataOfContient[1].cases).format("0.0a")).toUpperCase()}</div>
            </StaticsInfoDiv>
            <StaticsInfoDiv>
                <CardHeadings>Today Deaths</CardHeadings>
                <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#000",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>{plusAdder(DataOfContient[0].todayDeaths)}{numeral(DataOfContient[0].todayDeaths).format("0.0a").toUpperCase()} 
                </div>
                <CardHeadings2>Deaths</CardHeadings2>
                <div style={{color:"#888888",marginLeft:"10px",marginBottom:"5px",fontFamily:"'Tahoma',sans-serif"}}>+{(numeral(DataOfContient[2].deaths).format("0.0a")).toUpperCase()}</div>
            </StaticsInfoDiv>
            <StaticsInfoDiv>

                <CardHeadings>Active</CardHeadings>
                <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#f96580",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>+{numeral(DataOfContient[2].active).format("0.0a").toUpperCase()}
                </div>
            </StaticsInfoDiv>
            <StaticsInfoDiv>
                <CardHeadings>Critical</CardHeadings>
                <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"red",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>{plusAdder(DataOfContient[2].critical)}{numeral(DataOfContient[2].critical).format("0.0a").toUpperCase()}
                </div>
            </StaticsInfoDiv>
            <StaticsInfoDiv>
                <CardHeadings>Today Recovered</CardHeadings>
                <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#47dd47",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>{plusAdder(DataOfContient[0].todayRecovered)}{numeral(DataOfContient[0].todayRecovered).format("0.0a").toUpperCase()}
                
                </div>
                <CardHeadings2>Recovered</CardHeadings2>
                <div style={{color:"#8af1a9",marginLeft:"10px",marginBottom:"5px",fontFamily:"'Tahoma',sans-serif"}}>{plusAdder(DataOfContient[1].recovered)}{(numeral(DataOfContient[1].recovered).format("0.0a")).toUpperCase()}</div>
            </StaticsInfoDiv>
            <StaticsInfoDiv>
                <CardHeadings>Tests</CardHeadings>
                <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#cbce01",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>+{numeral(DataOfContient[1].tests).format("0.0a").toUpperCase()}
                <p style={{color:"#d6cece",marginLeft:"20px",fontSize:"13px"}}>Don't get startle. May be multiple tests per person</p>
            </div>
        </StaticsInfoDiv>
        </StaticsContainer>
        <ContientPieChartContainer DataOfContient={DataOfContient}/>
        <ContientBarChartContianer continent={contient}></ContientBarChartContianer>
        </>
        }
    </>
}

const plusAdder = (value) => {
    if(value > 1001) return "+"
}