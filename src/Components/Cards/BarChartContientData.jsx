import React from "react";
import { Bar } from "react-chartjs-2";
import numeral from "numeral"

import { BarChartParentContainer,ActualBarChartContainer } from "./cardsStyles";
export const ContientBarChartContianer = ({continent})=>{
    const Names = continent.RCTCharts.map(i=>i.continent)
    const recovered = continent.RCTCharts.map(i=>i.recovered)
    const cases = continent.RCTCharts.map(i=>i.cases)
    const tests = continent.RCTCharts.map(i=>i.tests)
    const active = continent.ACDCharts.map(i=>i.active)
    const critical = continent.ACDCharts.map(i=>i.critical)
    const deaths = continent.ACDCharts.map(i=>i.deaths)


    return <>
        <BarChartParentContainer>
            <ActualBarChartContainer>

                <Bar
                    width={400}
                    height={300}
                    data={{
                        labels:Names,
                        datasets:[
                            {   
                                label:"Recovered",
                                data:recovered,
                                backgroundColor:"#47dd47"
                            },
                            {   
                                label:"Cases",
                                data:cases,
                                backgroundColor:"#00abff"
                            },
                            {
                                label:"tests",
                                data:tests,
                                backgroundColor:"#cbce01"
                            }
                        ],
                    }}
                    options={{
                        maintainAspectRatio:false,
                        scales:{
                            y:{
                                ticks:{
                                    callback:function(value,values,index){
                                        return numeral(value).format("0a")
                                    }
                                },
                                beginAtZero: false
                            }
                        }
                    }}
                />
            </ActualBarChartContainer>
            <ActualBarChartContainer>
                <Bar
                    width={400}
                    height={300}
                    data={{
                        labels:Names,
                        datasets:[
                            {
                                label:"Active",
                                data:active,
                                backgroundColor:"#f96580"
                                
                            },
                            {
                                label:"Critical",
                                data:critical,
                                backgroundColor:"red"
                            },
                            {
                                label:"Deaths",
                                data:deaths,
                                backgroundColor:"black"
                            }
                        ]
                    }}
                    options={{
                        maintainAspectRatio:false,
                        scales:{
                            y:{
                                ticks:{
                                    callback:function(value,values,index){
                                        return numeral(value).format("0a")
                                    }
                                }
                            }
                        }
                    }}
                />
            </ActualBarChartContainer>
        </BarChartParentContainer>
    </>
}
