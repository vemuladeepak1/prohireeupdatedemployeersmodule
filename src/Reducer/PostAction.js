import { useEffect } from "react";
import CompanyJobs from "../Pages/jobs/CompanyJobs";
import COMPANY_PROFILE from "../For_Employers/COMPANY_PROFILE";

const Initialstate = {
    postdata:""
}
const PostAction = (post=Initialstate, action)=>{
    console.log(action.payload)
    switch(action.type){
        case "PJOB":return{
            ...post,
            postdata:action.payload

        }
        
    }
}
export default PostAction