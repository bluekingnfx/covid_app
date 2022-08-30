import {WorldDataContainerGraph} from "./cardsStyles"
import { Pie } from "react-chartjs-2"

export const HistorialWorldData = ({data}) => {
    const {active,cases,deaths,recovered} = data
    const DataAr = [active,deaths,recovered]
    const ManipulatedArray = DataAr.map(i=>{
        return (i/cases)*100
    })

    return <WorldDataContainerGraph>
        <Pie style={{marginBottom:"20px",backgroundColor: "#f2f2f2",margin:"20px",paddingTop:"10px",paddingBottom:"10px"}}
            width={"300px"}
            height={"300px"}
            data={{
                labels:["Active","Deaths","Recovered"],
                datasets:[{
                    data:ManipulatedArray,
                    backgroundColor:[
                        "red","black","#009926"
                    ]
                }]
            }}
            options={{
                maintainAspectRatio:false
            }}
        />
    </WorldDataContainerGraph>
}