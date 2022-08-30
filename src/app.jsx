import React from "react"
import {NavBar,Countries} from "./Components/NavBar/NavBar"
import { Map } from "./Components/Map/Mapfile"
import { ParentMapContext } from "./Providers/ParentMapProvider"
import { StaticsContext } from "./Providers/StaticsProvider"
import { SelectionContext } from "./Providers/SelectionProvider"
import { WorldData } from "./Components/Cards/Cards"
import { ContientData} from "./Components/Cards/ContientPieChart"
import "./css/leaflet.css"
import { Table } from "./Components/Cards/TableOftdyCases"
import { AiFillLinkedin } from "react-icons/ai"



const App = () => {
    const memoCountries = React.useMemo(() => {
        return <>
            <NavBar />
        </>
    },[])
    return <>
        <ParentMapContext>
            <StaticsContext>
                <SelectionContext>
                        {memoCountries}
                        <WorldData/>
                        <ContientData />
                        <Countries/>
                        <Map />
                        <Table/>
                        <div style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            backgroundColor:"black",
                            color:"white",
                            flexFlow:"column nowrap",
                            height:"300px",
                            fontSize:"18px",
                            fontFamily:"Roboto,Tahoma,'sans-serif'"
                        }}>
                            <div style={{marginBottom:"10px"}}>Made by Media2FireBase npm module creator.</div>
                            <div>Suggestions - Mail me @ sid9488188099@gmail.com <a href="https://www.linkedin.com/in/siddharth-bagyalakshmi-19977b197/"><AiFillLinkedin  style={{fontSize:"16px",color:"white"}}/></a></div>
                        </div>
                </SelectionContext>
            </StaticsContext>
        </ParentMapContext>
    </>
}

export default App