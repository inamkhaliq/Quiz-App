type personProps={
    details:{
        name:string
        age:number
        isActive:boolean
    }
}
const Person=({details}:personProps)=>{
    return (
        <>
            {
                details.isActive? <>
                    <h1>Profile</h1>
                    <p>{details.name}</p>
                    <p>{details.age}</p>
                    <p>{details.isActive}True</p>
                </>:<div>User not Loged IN</div>
            }
        </>
    )
}
export default Person;