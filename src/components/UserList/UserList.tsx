type user={
    name:string
    age:number
}
type usersProps={
    list:user[]
}
const UserList=({list}:usersProps)=>{
    // const {list}=props;
    return (
        <>
            <table style={{border:"1px solid black",margin:"0 auto",marginBottom:"20px" ,marginTop:"20px"}}>
                <tr style={{border:"1px solid black"}}>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    list.map((user)=>{
                        return(
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default UserList;