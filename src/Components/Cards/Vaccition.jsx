/* eslint-disable array-callback-return */
import React,{useEffect,useState} from "react"
import {Line} from "react-chartjs-2"
import axios from "axios"
import numeral from "numeral"
import { ContainerOFRecovery } from "./cardsStyles"
const url = "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=11"


const FetchVaccinationDetails = async(dispatch) => {
    const fetchData = await axios.get(url)
    const {data} = fetchData
    const unModifiedDates = Object.keys(data)
    .filter((i,index)=>{
        if(index === 9) return 
        if(index === 10) return
        return i
    })
    const Dates = unModifiedDates.map((i,index)=>{
        const Date = i.split("/")
        if(index === 0) return `${Date[1]}/${Date[0]}/${Date[2]}`
        return `${Date[1]}/${Date[0]}`
    })
    const UnModifiedValues = Object.values(data)
    .filter((i,index) => index !== 10)
    const Values = UnModifiedValues.map((i,index)=> UnModifiedValues[index+1] - i)
    .filter((i,index)=>index!==9)

    dispatch(()=>{
        return [Dates,Values]
    })

}
export const WorldWideVacciation = () => {

    const [vaccine,setVaccine] = useState([])
    useEffect(()=>{
        FetchVaccinationDetails(setVaccine)
    },[])

    return <ContainerOFRecovery>
    {
        vaccine && <Line

            data={{
                labels:vaccine[0],
                datasets:[{
                    label:"Vaccination",
                    data:vaccine[1],
                    backgroundColor: "rgb(70, 210, 70,0.5)",
                    fill:true,
                    pointRadius:8,
                }]
            }}
            options={{
                plugins:{
                    legend:false
                },
                scales:{
                    x:{
                        title:{
                            display:true,
                            text:"Date"
                        },
                        grid:{
                            display:false
                        }
                    },
                    y:{
                        title:{
                            display:true,
                            text:"Vaccination",
                            color:"rgb(70, 210, 70,0.8)",
                            font:{
                                size:16
                            }
                        },
                        grid:{
                            display:false
                        },
                        ticks:{
                            callback:function(value,values,index){
                                return numeral(value).format("0a")
                            }
                        }
                    }
                }
            }}
        >

        </Line>
    }
    </ContainerOFRecovery>
}


