import React from "react"
import ReactDom from "react-dom"
import App from "./app.jsx"
const MainApp = () => {
    return <React.StrictMode>
        <App />
    </React.StrictMode>
}
ReactDom.render(<MainApp/>,document.getElementById("root"))