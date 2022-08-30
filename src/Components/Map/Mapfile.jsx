import React,{useContext,useMemo} from "react"
import {MapContainer,TileLayer,LayersControl,Marker,Popup,Tooltip} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import {MapDiv} from "./MapfileStyle"
import "../../css/leaflet.css"
import L from 'leaflet'
import "leaflet-fullscreen/dist/Leaflet.fullscreen"
import "leaflet-fullscreen/dist/leaflet.fullscreen.css"

import {MiniMap} from "./MiniMap"
import { ParentMapProvider }  from "../../Providers/ParentMapProvider"
import { SelectionProvider } from "../../Providers/SelectionProvider"
import marker from "../../Images/Marker.png"
import shadow from "../../Images/shadow.png"
import { StaticsCircle } from "./StaticsCircle"
delete L.Icon.Default.prototype._getIconUrl;
const MyIcon =  new L.icon({
    iconUrl: marker,
    shadowUrl: shadow,
    iconAnchor:[20,40]
})
export const Map = () => {
    const Data = useContext(ParentMapProvider)
    const {setParentMapInstance} = Data
    const DataSelectionProvider = useContext(SelectionProvider)
    const {selection}  = DataSelectionProvider
    /* const centerData = useContext(ChartDeciderProvider) */
    const memoShapes = useMemo(() => {
        return <StaticsCircle></StaticsCircle>
    },[])
    return <MapDiv>
        <MapContainer 
        id={"parentMap"}
        center={[20,77]} 
        scrollWheelZoom={true}
        zoom={4}
        maxZoom={18}
        minZoom={4}
        fullscreenControl={true}
        style={{width:"90%",height:"90%",position:"relative"}}
        whenCreated={ map => setParentMapInstance(map)}
        >
            <LayersControl>
    
                <LayersControl.BaseLayer name="SVG" checked>
                    <TileLayer
                        maxNativeZoom={18}
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    >
                    </TileLayer>
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="SAT">
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution="iles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid"
                    >
                    </TileLayer>
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Fresh">
                    <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                        attribution = 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
                        maxZoom = {16}
                    >

                    </TileLayer>
                </LayersControl.BaseLayer>
                {memoShapes}
            </LayersControl>
            <MiniMap/>
            { selection !==null ? <Marker icon={MyIcon} position={selection[0].latlng}>
                <Tooltip permanent id={"ToolTipHelper"}>
                    <div style={{width:"100%",height:"100%",whiteSpace:"pre-wrap"}}>I'm Marker,click the circle to get Info. In crowded region, touch the <span style={{color:"red"}}>inner circles</span>. For greater proximity <span style={{color:"red"}}>zoom in</span></div>
                </Tooltip>
                <Popup>
                    You are in {selection[0].country}, {selection[0].contient}. Click the circle for Info
                </Popup>
            </Marker> : null}
        </MapContainer>
    </MapDiv>
}
