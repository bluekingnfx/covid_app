import React from 'react'
import "../css/LoadingElem.css"
export const LoadingElem = () => {
    return <>
        <div>
            <div className="dot-flashing"></div>
        </div>
    </>
}

export const ImgLoad = props => <div className="dot-spin"></div>