import { useEffect } from "react";
import CompanyJobs from "../Pages/jobs/CompanyJobs";
import COMPANY_PROFILE from "../For_Employers/COMPANY_PROFILE";

const Initialstate = {
    signindata:""
}
const SignInReducer = (signin=Initialstate, action)=>{
    switch(action.type){
        case "SIGNIN":return{
            ...prohireesignin,
            prohireesignindata:action.payload

        }
        default: return signin;
    }
}
export default SignInReducer