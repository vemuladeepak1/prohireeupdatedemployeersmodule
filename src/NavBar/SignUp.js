import axios from 'axios';
import React, { useState } from 'react'
import  { Navigate } from 'react-router-dom'
import apiList from '../lib/apiList';
import isAuth, { userType } from '../lib/isAuth';
const SignUp = () => {
    const [loggedin, setLoggedin] = useState(isAuth());
    const [signupDetails, setSignupDetails] = useState({
        type: "applicant",
        email: "",
        password: "",
        name: "",
        contactNumber: ""
      });
      const handleInput = (e) => {
        setSignupDetails({
          ...signupDetails,
          [e.target.name]: e.target.value,
        });
      };


    const handleLoginRecruiter = () => {
        console.log(signupDetails)
        axios
        .post(apiList.signup,signupDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    const handleLogin = ()=>{
      console.log(signupDetails)
        axios
        .post(apiList.signup,signupDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }




    return(<>

      {
      isAuth() ? (
      userType() === 'recruiter'?
      <Navigate to="/company_profile" />
        : 
       <Navigate to="/myprofile" /> )
       :
      
      <div className='mt-5 pt-5'>
      <div class="container content mt-3 ">
     <div class="row">
       <div class="card card-login mx-auto mt-5 col-md-8 col-lg-6">
         <div class="card-header">Signup</div>
         <div class="card-body">
           <form>
           <select class="form-control" name="type" onChange={(e)=>handleInput(e)}>
              <option value="applicant" selected>Applicant</option>
              <option value="recruiter">Recruiter</option>
              </select>  
              <div class="form-group">
               <div class="form-label-group">
                 <label >Name :</label>
                 <input type="text"  class="form-control" placeholder="Enter Name" required="required" autofocus="autofocus" name="name" onChange={(e)=>handleInput(e)}/>
               </div>
             </div>
             <div class="form-group">
               <div class="form-label-group">
                 <label >Phone :</label>
                 <input type="text"  class="form-control" placeholder="Enter Phone" required="required" autofocus="autofocus" name='contactNumber' onChange={(e)=>handleInput(e)}/>
               </div>
             </div>
             <div class="form-group">
               <div class="form-label-group">
                 <label >Email :</label>
                 <input type="email"  class="form-control" placeholder="Email address" required="required" autofocus="autofocus" name='email' onChange={(e)=>handleInput(e)}/>
               </div>
             </div>
             <div class="form-group">
               <div class="form-label-group">
                 <label >Password :</label>
                 <input type="password"  class="form-control" placeholder="Password" required="required" name='password' onChange={(e)=>handleInput(e)}/>
               </div>
             </div>
             <div class="form-group">
               <div class="checkbox">
                 <label>
                     <input type="checkbox" value="remember-me" />
                     Remember Password
                   </label>
               </div>
             </div>
             <a class="btn btn-primary btn-block"  
             onClick={() => {
            signupDetails.type === "applicant"
              ? handleLogin()
              : handleLoginRecruiter();
          }}>Login</a>
           </form>
           <div class="text-center">
             <a class="d-block medium" href="forgot-password.html">Forgot Password?</a>
           </div>
         </div>
       </div>
     </div>
     </div>
     </div>
      
      }
       
    
    </>)
}
export default SignUp