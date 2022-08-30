import React,{useState,useContext} from "react"
import { MapContainer,TileLayer,Rectangle, useMapEvent } from "react-leaflet"
import { MiniMapContainer } from "./MapfileStyle"
import { ParentMapProvider } from "../../Providers/ParentMapProvider"
import { useEventHandlers } from '@react-leaflet/core'
export const MiniMap = () => {
    const [mini,setMini] = useState(null)
    const Data = useContext(ParentMapProvider)
    const { parentMapInstance } = Data
    return <MiniMapContainer>
        <MapContainer
        attributionControl={false}
        zoomControl={false}
        dragging={false}
        center={[20,77]}
        zoom={1}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        style={{width:"100%",height:"100%",borderRadius:"10px"}}
        whenCreated={map=>{setMini(map)}}
        >
            <TileLayer
                url='https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
            />
            <LocationMiniMap mini={mini} parentMap={parentMapInstance}></LocationMiniMap>
        </MapContainer>
    </MiniMapContainer>
}

const LocationMiniMap = ({mini,parentMap}) => {
    const [bounds,setBounds] = useState(parentMap.getBounds())
    /*
    ! useMapevent calls the map of its parent, if it does  not  get, then  it call the grand parent that posess it
      */
    useMapEvent({
        click:(e)=>{
            parentMap.setView(e.latlng,4)
        }
    })
    const onChange = () => {
        setBounds(()=>parentMap.getBounds())
        mini.setView(parentMap.getCenter(),mini.getZoom())
    }
    useEventHandlers({instance:parentMap},{move:onChange,zoom:onChange})
    return <>
    {bounds !== null ? <Rectangle bounds={bounds} fillColor={"rgb(0,0,0, 0.3)"} fillOpacity={.7} stroke={0} ></Rectangle> : null}
    </>
}

