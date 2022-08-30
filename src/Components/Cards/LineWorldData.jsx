import React from "react"
import {Line} from "react-chartjs-2"
import {LineChartDiver} from "./cardsStyles"
import numeral from "numeral"
export const LineWorldData = ({lineChartData}) =>{
    return <LineChartDiver>
    {lineChartData && <Line 
        data={{
            labels:lineChartData[0],
            datasets:[{
                label:"Cases",
                data:lineChartData[1],
                backgroundColor:"rgb(255, 128, 128,0.5)",
                pointRadius:8,
                fill:true,
                borderWidth:0,
            }]
            
        }}
        options={{
            plugins:{
                legend:false,
            },
            scales:{
                y:{
                    ticks:{
                        callback: function(value,index,values){
                            return numeral(value).format("0a")
                        }
                    },
                    grid:{
                        display:false
                    },
                    title:{
                        display:true,
                        text:"Cases",
                        font:{
                            size:16,
                        },
                        color:"rgb(255, 0, 0)"
                    }
                },
                x:{
                    grid:{
                        display:false
                    },
                    title:{
                        display:true,
                        text:"Date"
                    }
                }
            }
        }}
    >
    </Line>}
    {lineChartData && <Line
        data={{
            labels:lineChartData[0],
            datasets:[{
                label:"Deaths",
                data:lineChartData[2],
                backgroundColor:"rgb(0,0,0,0.4)",
                fill:true,
                pointRadius:8,
            }],
        }}
        options={{
            plugins:{
                legend:false,

            },
            scales:{
                x:{
                    grid:{
                        display:false
                    },
                    title:{
                        display:true,
                        text:"Date"
                    }
                },
                y:{
                    grid:{
                        display:false
                    },
                    ticks:{
                        callback:function(value,values,index){
                            return numeral(value).format("0a")
                        }
                    },
                    title:{
                        display:true,
                        align:"center",
                        text:"Deaths",
                        font:{
                            size:16,
                        },
                        color:"rgb(0,0,0)"
                    }
                }
            }
        }}
        >
    </Line>}
    </LineChartDiver>
}