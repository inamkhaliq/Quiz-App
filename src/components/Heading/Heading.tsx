import React from "react";

type HeadingProps={
    children?:React.ReactNode
}
const Heading=(props:HeadingProps)=>{
    return (
        <>
            <h1 style={{backgroundColor:"red",color:"yellow"}}>
                {props.children}
            </h1>
        </>
    )
}
export default Heading;