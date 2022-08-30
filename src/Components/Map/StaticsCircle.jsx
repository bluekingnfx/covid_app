
import React, {useContext} from 'react'
import { Circle, Popup, LayersControl, LayerGroup  } from 'react-leaflet'
import "numeral/numeral"
import {Doughnut} from "react-chartjs-2"

import { StaticsProvider } from '../../Providers/StaticsProvider'
import { FlgImg,CountryName,NumberOfCases,ActivePop,Critical,NumberOfDeaths,NumberOfTests,NumberofRecoverd,MiniChart,Pop} from './MapfileStyle'
import "../../css/leaflet.css"
import numeral from 'numeral/numeral'
export const StaticsCircle = () => {

    const OverLays = [{Name:"Cases",Color:"#1ac6ff",
    multiply:10000,stroke:"blue"},{Name:"Deaths",Color:"black",multiply:10000,stroke:"black"},{Name:"Active",Color:"red",multiply:10000,stroke:"red"},{Name:"Tests",Color:"yellow",multiply:5000,stroke:"yellow"},{Name:"Recovered",Color:"green",multiply:10000,stroke:"green"}]
    const DataFromContext = useContext(StaticsProvider)
    const {statics} = DataFromContext
    /* console.log(statics) */
    return <>
    {
        statics ? (
            OverLays.map((i,index)=>{
                return <LayersControl.Overlay key={index} checked={index === 3 ? false : true} name={i.Name}>
                    <LayerGroup>
                    {
                        statics.map((j,val)=>{
                            if(j[i.Name]<0) console.log(j)
                            return <Circle key={val} fillOpacity={0.5} fillColor={i.Color} radius={Math.sqrt(Math.abs(j[i.Name])*i.multiply)} center={j.latlng} color={i.stroke} weight={3} stroke={( index === 3 ? 1 : 0)}>
                                <PopupDecider sat={j} />
                            </Circle>
                        })
                    }
                    </LayerGroup>
                </LayersControl.Overlay>
            })
        ) : null
    }
    </>
}


const PopupDecider = ({sat}) =>{

    let {Active,Cases,Deaths,Recovered,Population,Tests,country,flag,critical} = sat
    const ChartData = functionPercentage([Active,Deaths,Recovered],Cases) 
    return <Popup>
        <FlgImg src={flag} alt={country}></FlgImg>
        <CountryName>{country}</CountryName>
        <Pop>Population: {numeral(Population).format(0,0)} <span style={{color:"#777777"}}>({numeral(Population).format("0.0a")})</span> </Pop>
        <ActivePop> Active: {numeral(Active).format(0,0)} <span style={{color:"#ff3333"}}>({numeral(Active).format("0.0a")})</span></ActivePop>
        <Critical>Critical : {numeral(critical).format(0,0)} <span style={{color:"red"}}>({numeral(critical).format("0.0a")})</span></Critical>
        <NumberOfCases>Cases: {numeral(Cases).format("0,0")}
        <span style={{color:"#1ac6ff"}}> ({numeral(Cases).format("0.0a")}) </span> </NumberOfCases>
        <NumberOfDeaths> Deaths: {numeral(Deaths).format("0,0")}
        <span style={{color:"#1a1a1a"}}> ({numeral(Deaths).format("0.0a")}) </span> </NumberOfDeaths>
        <NumberOfTests> Tests: {numeral(Tests).format("0,0")}
        <span style={{color:"#b3b300"}}> ({numeral(Tests).format("0.0a")}) </span> </NumberOfTests>
        <NumberofRecoverd>
            Recovered: {numeral(Recovered).format("0,0")}
            <span style={{color:"#009926"}}> ({numeral(Recovered).format("0.0a")}) </span>
        </NumberofRecoverd>
        <DataVisual ChartData={ChartData}/>
    </Popup>
}


const functionPercentage = (Data,CasesPopulation) => {
    const AffectedData = Data.map(i=>{
        return (i/CasesPopulation)*100
    })
    return {AffectedData}
}


const DataVisual = ({ChartData:{AffectedData}})=>{
    return <MiniChart>
        <b>From Total Cases</b>
        <Doughnut id={"chartstyle"}
        options={{
            maintainAspectRatio:false
        }}
        data={{
            labels:["Active","Deaths","Recovered"],
            datasets:[{
                data:[...AffectedData],
                backgroundColor:[
                    "#ff3333",
                    "#1a1a1a",
                    "#009926",
                ]
            }]
        }}
    >

    </Doughnut>
    </MiniChart>
}