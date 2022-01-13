
// import { useEffect } from "react";
import CompanyJobs from "../Pages/jobs/CompanyJobs";
import MyProfile from "../Students/MyProfile";


const Initialstate = {
    data:"",

}

 
const changeReducer = (state=Initialstate, action)=>{  
    console.log(action) 
    switch(action.type){
        case "USER": return {
         
            data: action.payload,
            ...state
        }

        default: return state;
        }

}
export default changeReducer