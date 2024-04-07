import React from "react";

type BProps={
    children:React.ReactNode
}
const B=(props:BProps)=>{
    return(
        <>
            {props.children}
        </>
    )
}
export default B;