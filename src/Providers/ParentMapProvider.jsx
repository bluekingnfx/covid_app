import React,{useState,createContext} from 'react'


export const ParentMapProvider = createContext()


export const ParentMapContext = ({children}) => {
    const [parentMapInstance,setParentMapInstance] = useState({})
    return <ParentMapProvider.Provider value={{parentMapInstance,setParentMapInstance}}>
        {
            children
        }
    </ParentMapProvider.Provider>
}