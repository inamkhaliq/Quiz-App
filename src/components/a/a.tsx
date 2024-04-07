

type AProps={
    name?:string
    age?:number    
    children?:React.ReactNode
    
    // children:number
}
const A=({name,age,children}:AProps)=>{
    
    return(
        <>
            <h1>{children}</h1>
            {/* <code>HI The Name is {name} and Age is {age}</code> */}
        </>
        
    )
}
export default A;