import React,{ createContext,useState} from "react"

export const SelectionProvider = createContext()
export const SelectionContext = ({children}) =>{
    const [selection,setSelection] = useState(null)
    return <SelectionProvider.Provider value={{selection,setSelection}}>
        {
            children
        }
    </SelectionProvider.Provider>
}