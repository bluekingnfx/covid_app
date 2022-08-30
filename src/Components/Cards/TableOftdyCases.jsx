import React,{useContext,useState,useEffect} from "react"
import {v4 as random} from "uuid"

import { TableContainer, WorldHeading } from "./cardsStyles"
import {StaticsProvider} from "../../Providers/StaticsProvider"


const ChangeState = (statics,setter) => {
    if(statics){
        const InitalreqData = statics.map(i=>i.tdayC)
        .sort((a,b)=>b-a)
        const FreeDup = []
        let prevValue = 0
        for(let i=0;i<InitalreqData.length;i++){
            if(InitalreqData[i] !== prevValue){
                FreeDup.push(InitalreqData[i])
                prevValue = InitalreqData[i]
            }
        }

        const ReqData = FreeDup.map(i=>statics.filter(j=>j.tdayC === i)).flat(1)
        setter(()=>ReqData)
    }
}


export const Table = () => {
    const Data = useContext(StaticsProvider)
    const [tableData,setTableData] = useState()

    const [width,setWidth] = useState()
    const {statics} = Data
    useEffect(()=>{
        ChangeState(statics,setTableData)
    },[statics])
    window.addEventListener("resize",(e)=>{
        setWidth(window.innerWidth)
    })
    return <>
        <WorldHeading>Today's Data</WorldHeading>
        
        {tableData && <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Country</th>
                            <th>Cases</th>
                            <th>Deaths</th>
                            <th>Recovery</th>
                            <th>Cases/Mn</th>
                            <th>Deaths/Mn</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tableData.map((i,index)=>{
                        return <tr key={random()}>
                            <td style={{textAlign:"center"}}>{index+1}</td>
                            <td style={{textAlign:"center"}}>{i.country.length > 8 && width < 500 ? i.country.slice(0,8)+"..." : i.country}</td>
                            <td style={{textAlign:"center"}}>{i.tdayC}</td>
                            <td style={{textAlign:"center"}}>{i.tdayD}</td>
                            <td style={{textAlign:"center"}}>{i.tdayR}</td>
                            <td style={{textAlign:"center"}}>{i.active_Per_M}</td>
                            <td style={{textAlign:"center"}}>{i.deaths_Per_M}</td>
                        </tr>
                        })
                    }
                    </tbody>
                </table>
            </TableContainer>}
    </>
}

