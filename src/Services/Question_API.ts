import axios from "axios";
export const fetchData=()=>{
    
    const res=axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")        
    // console.log(res)
    return res
   
   
}