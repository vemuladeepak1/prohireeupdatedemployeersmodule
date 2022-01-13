import { useEffect } from "react";
import CompanyJobs from "../Pages/jobs/CompanyJobs";
import COMPANY_PROFILE from "../For_Employers/COMPANY_PROFILE";

const Initialstate = {
    prohireesignupdata:""
}
const SignUpReducer = (prohireesignup=Initialstate, action)=>{
    switch(action.type){
        case "SIGNUP":return{
            ...prohireesignup,
            prohireesignupdata:action.payload

        }
        
    }
}
export default SignUpReducer