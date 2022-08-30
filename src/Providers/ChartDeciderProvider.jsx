import React,{createContext,useState} from "react"

export const ChartDeciderProvider = createContext()

export const ChartDecider = ({children}) => {
    const InitalStateValue = {
        Country:"India",
        coords:[20,77]
    }
    const [chartData,setChartData] = useState(InitalStateValue)
    return <ChartDeciderProvider.Provider value={{ChartData:{chartData,setChartData}}}>
        {
            children
        }
    </ChartDeciderProvider.Provider>
}
