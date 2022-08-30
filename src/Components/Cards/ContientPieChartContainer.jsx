import React from "react";
import {Doughnut} from "react-chartjs-2"

import { ParentPieChartContainer,ActualContainer } from "./cardsStyles";
export const ContientPieChartContainer = ({DataOfContient}) => {
    const {recovered,cases,tests} = DataOfContient[1]
    const {active,critical,deaths} = DataOfContient[2]
    return <>
    <ParentPieChartContainer>
        <ActualContainer>
            <Doughnut className={"DoughOnContient"}
                data={{
                    labels:["Recovered","Cases","Tests"],
                    datasets:[{
                        data:[recovered,cases,tests],
                        backgroundColor:["#47dd47","#00abff","#cbce01"]
                    }]
                }}
                options={{
                    maintainAspectRatio: false,
                }}
            >
            </Doughnut>
        </ActualContainer>
        <ActualContainer>
        <Doughnut className={"DoughOnContient"}
                data={{
                    labels:["Critical","Active","Deaths"],
                    datasets:[{
                        data:[critical,active,deaths],
                        backgroundColor:["#f96580","red","black"]
                    }]

                }}
                options={{
                    maintainAspectRatio:false
                }}
            />
        </ActualContainer>
    </ParentPieChartContainer>
    </>
}