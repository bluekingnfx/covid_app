import React,{useEffect,useState,useMemo} from "react"
import axios from "axios"
import numeral from "numeral"
import {WorldWideVacciation} from "./Vaccition"

import { HistorialWorldData } from "./HistorialWorldData"
import { LineWorldData } from "./LineWorldData"
import { StaticsInfoDiv,UpdatedTime,WorldHeading,StaticsContainer,CardHeadings,BarAndLineChartDiver ,CardHeadings2,ChartContainer,LineChartStaticsStyles} from "./cardsStyles"
const url = "https://disease.sh/v3/covid-19/all"
const urlLastData = "https://disease.sh/v3/covid-19/historical/all?lastdays=11"

export const WorldData = () => {
    const [WorldData,setWorldData] = useState()
    const Time = WorldData &&  new Date(WorldData.updated).toLocaleString()
    const [lineChartData,setLineChartData] = useState(null)
    const memoStatics = useMemo(() =>{
        return <>
    {WorldData ? 
    (<><WorldHeading>
        World Data
    </WorldHeading>
    <UpdatedTime>Updated at {Time}.</UpdatedTime>
    <StaticsContainer>
        <StaticsInfoDiv>
            <CardHeadings>Today Cases</CardHeadings>
            <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#00abff",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>+{numeral(WorldData.todayCases).format("0.0a").toUpperCase()}
            </div>
            <CardHeadings2>Cases</CardHeadings2>
            <div style={{color:"#6fd0ff",marginLeft:"10px",marginBottom:"5px",fontFamily:"'Tahoma',sans-serif"}}>+{(numeral(WorldData.cases).format("0.0a")).toUpperCase()}</div>
        </StaticsInfoDiv>
        <StaticsInfoDiv>
            <CardHeadings>Today Deaths</CardHeadings>
            <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#000",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>+{numeral(WorldData.todayDeaths).format("0.0a").toUpperCase()} 
            </div>
            <CardHeadings2>Deaths</CardHeadings2>
            <div style={{color:"#888888",marginLeft:"10px",marginBottom:"5px",fontFamily:"'Tahoma',sans-serif"}}>+{(numeral(WorldData.deaths).format("0.0a")).toUpperCase()}</div>
        </StaticsInfoDiv>
        <StaticsInfoDiv>
            <CardHeadings>Active</CardHeadings>
            <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#f96580",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>{numeral(WorldData.active).format("0.0a").toUpperCase()}
                
            </div>
        </StaticsInfoDiv>
        <StaticsInfoDiv>
            <CardHeadings>Critical</CardHeadings>
            <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"red",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>{numeral(WorldData.critical).format("0.0a").toUpperCase()}
                
            </div>
        </StaticsInfoDiv>
        <StaticsInfoDiv>
            <CardHeadings>Today Recovered</CardHeadings>
            <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#47dd47",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>+{numeral(WorldData.todayRecovered).format("0.0a").toUpperCase()}
                
            </div>
            <CardHeadings2>Recovered</CardHeadings2>
            <div style={{color:"#8af1a9",marginLeft:"10px",marginBottom:"5px",fontFamily:"'Tahoma',sans-serif"}}>+{(numeral(WorldData.recovered).format("0.0a")).toUpperCase()}</div>
        </StaticsInfoDiv>
        <StaticsInfoDiv>
        <CardHeadings>Tests</CardHeadings>
        <div style={{width:"100%",display:"flex",justifyContent:"center",fontSize:"25px",color:"#cbce01",fontFamily:"'Tahoma',sans-serif",flexFlow:"column nowrap",alignItems:"center"}}>+{numeral(WorldData.tests).format("0.0a").toUpperCase()}
        <p style={{color:"#d6cece",marginLeft:"20px",fontSize:"13px"}}>Don't get startle. May be multiple tests per person</p>
            </div>
        </StaticsInfoDiv>
    </StaticsContainer>
    </>
    ):null}
        </>
    },[WorldData,Time])
    const functionWorldFetch = async()=>{
        const worldstatics = await axios.get(url)
        const {data} = worldstatics
        setWorldData(data)
    }
    const HistorylastDays15 = async()=>{
        const LastDays = await axios.get(urlLastData)
        const {data:{cases,deaths}} = LastDays
        const Labels = Object.getOwnPropertyNames(cases)
        .filter((i,index)=>index!==10)
        .map((i,index)=>{
            const Date = i.split("/")
            if(index=== 0) return `${Date[1]}/${Date[0]}/${Date[2]}`
            else return `${Date[1]}/${Date[0]}`
        })
        const originalCases = Object.values(cases)
        const OrginCases2 = originalCases.map((i,index)=>{
            return originalCases[index+1] -i
        })
        const Cases = OrginCases2.filter((i,index)=>index !== 10)
        const NewDeaths = Object.values(deaths)
        const Deaths= NewDeaths.map((i,index)=>{
            return NewDeaths[index+1] - i
        }).filter((i,index)=>index !== 10)
        setLineChartData(()=>{
            return [Labels,Cases,Deaths]
        })
    }
    useEffect(()=>{
        functionWorldFetch(url)
        HistorylastDays15()
    },[])
    return <>
        {memoStatics}
    <ChartContainer>
        <UpdatedTime>Certain Dates have been omitted in graphs because of inaccurate stastics</UpdatedTime>
        { lineChartData && <LineChartStaticsStyles><LineWorldData lineChartData={lineChartData}></LineWorldData></LineChartStaticsStyles>}
        <BarAndLineChartDiver>
            <WorldWideVacciation></WorldWideVacciation>
            {WorldData && <HistorialWorldData data={WorldData}></HistorialWorldData>}
        </BarAndLineChartDiver>
    </ChartContainer>
    </>
}




