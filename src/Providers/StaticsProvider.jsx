import React,{createContext,useState} from "react"

export const StaticsProvider = createContext()

export const StaticsContext = ({children}) => {
    const [statics,setStatics] = useState(null)
    return <StaticsProvider.Provider value={{statics,setStatics}}>
        {
            children
        }
    </StaticsProvider.Provider>
}
