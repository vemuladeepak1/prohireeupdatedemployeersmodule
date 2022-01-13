// import { useEffect } from "react";
import CompanyJobs from "../Pages/jobs/CompanyJobs";
import MyProfile from "../Students/MyProfile";


const Initialstate = {
    reducerdata:"",

}
const ResumeReducer = (reducer=Initialstate, action)=>{  
    // console.log(action) 
    switch(action.type){
        case "REDUCER": return {
            ...reducer,
            reducerdata: action.payload
            
        }

    
        }

}
export default ResumeReducer