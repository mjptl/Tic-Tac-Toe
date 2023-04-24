import React from "react";
import './style.css'

const Background = (props) => {
    console.log(">>>", props)
    return (
        <>
            {props.children}
        </>
    )
}

export default Background