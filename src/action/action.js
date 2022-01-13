export const getData = (data)=>{
    return{
        type:"USER",
        payload:data
    }

}


export const getCompanyProfile = (companydata)=>{
    return{
        type:"CPROFILE",
        payload:companydata
    }

}

export const getPostJob = (postdata)=>{
    return{
        type:"PJOB",
        payload:postdata
    }

}

export const getSignUp = (prohireesignupdata)=>{
    return{
        type:"SIGNUP",
        payload:prohireesignupdata
    }
}
export const getSignIn = (signin)=>{
    return{
        type:"SIGNIN",
        payload:signin
    }
}

export const getReduser = (reducerdata)=>{
    return{
        type:"REDUCER",
        payload:reducerdata
    }

}