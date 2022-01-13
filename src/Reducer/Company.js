import { useEffect } from "react";
import CompanyJobs from "../Pages/jobs/CompanyJobs";
import COMPANY_PROFILE from "../For_Employers/COMPANY_PROFILE";

const Initialstate = {
    companydata:""
}
const Company = (company=Initialstate, action)=>{
    switch(action.type){
        case "CPROFILE":return{
            ...company,
            companydata:action.payload

        }
    }
}
export default Company