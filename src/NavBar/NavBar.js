import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { getSignUp } from '../action/action';
import { getSignIn } from '../action/action';
import { useDispatch, useSelector } from 'react-redux'
import isAuth from '../lib/isAuth';
import apiList from '../lib/apiList';
import axios from 'axios';
const Navbar = () => {
    const [state, setState] = useState({ navbar_content: "white", color: "black" });
    const [first, setState4] = useState(false);
    const [loggedin, setLoggedin] = useState(isAuth());
    const [signupDetails, setSignupDetails] = useState({
        type: "applicant",
        email: "",
        password: "",
        name: "",
        contactNumber: ""
      });
console.log(signupDetails)
      const handleInput = (e) => {
        setSignupDetails({
          ...signupDetails,
          [e.target.name]: e.target.value,
        });
      };


    const handleButtonClick = () => {
        setState4(!first);
    };

    const [second, setState1] = useState(false);
    const handleButtonClick2 = () => {
        setState1(!second);
    };

    const [third, setState2] = useState(false);
    const handleButtonClick3 = () => {
        setState2(!third);
    };


    const handleLogin = () => {
        axios
        .post(apiList.signup,signupDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
        //   setPopup({
        //     open: true,
        //     severity: "success",
        //     message: "Logged in successfully",
        //   });
          console.log(response);
        })
        .catch((err) => {
        //   setPopup({
        //     open: true,
        //     severity: "error",
        //     message: err.response.data.err,
        //   });
          console.log(err.response);
        });
    }


    return (
        <>
            <div id="nav-bar" >
                <nav className="navbar navbar-expand-lg fixed-top navbar_content mb-5" id="myScrollspy" style={{ backgroundColor: `${state.navbar_content}` }}>
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img type="logo" className="img-fluid logo_img" src="images/ProHireeLogo.png"
                                style={{ background: 'transparent' }, { height: '50px' }, { width: '70px' }} alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <i className="fa fa-bars text-white"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav" >
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bold" style={{ color: state.color }} id="a1" to="/">HOME</Link>
                                </li>
                                <li className="nav-item dropdown position-relative d-inline-block">
                                    <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a2" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: state.color }}>
                                        FOR CANDIDATES
                                    </a>
                                    <div className="dropdown-menu dropdown-content d-none position-absolute ml-4 bg-white rounded"
                                        aria-labelledby="a2">
                                        <Link className="dropdown-item" to="/myprofile">My
                                            Profile</Link>
                                        <Link className="dropdown-item" to="/myresume">My
                                            Resume</Link>
                                        <Link className="dropdown-item"
                                            to="appliedjobs">Applied
                                            Job</Link>
                                        <Link className="dropdown-item"
                                            to="/jobalerts">Job
                                            Alerts</Link>
                                        <Link className="dropdown-item "
                                            to="/savedjobs">Saved
                                            Jobs</Link>

                                        <Link className="dropdown-item"
                                            to="/changepassword">Change
                                            Password</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown position-relative d-inline-block">
                                    <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a3" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: state.color }}>
                                        FOR EMPLOYERS
                                    </a>
                                    <div className="dropdown-menu dropdown-content  d-none position-absolute ml-4 bg-white rounded"
                                        aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/company_profile">Company
                                            Profile</Link>

                                        <Link className="dropdown-item"
                                            to="/post_jobs">Post
                                            A Job</Link>
                                        <Link className="dropdown-item"
                                            to="/Manage_jobs">Manage
                                            Jobs</Link>

                                    </div>
                                </li>
                                <li className="nav-item dropdown position-relative d-inline-block">
                                    <ul>
                                        <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a4" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: state.color }}>
                                            PAGES
                                        </a>
                                        <div className="dropdown-menu dropdown-content  d-none position-absolute ml-4 bg-white rounded"
                                            aria-labelledby="navbarDropdown">

                                            <li> <Link className="dropdown-item "
                                                to="/companies">Companies</Link></li>

                                            <li className="dropdown-submenu position-relative">
                                                <a className="dropdown-item dropdown-toggle">Browse jobs</a>
                                                <ul
                                                    className="dropdown-menu dropdown-content_1 d-none position-absolute  bg-white ">

                                                    <li><Link className="dropdown-item"
                                                        to="/browsefilterlist">Browse
                                                        Filter List</Link></li>

                                                    <li><Link className="dropdown-item"
                                                        to="/browsefiltergrid">Broswe
                                                        Filter Grid</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu position-relative">
                                                <a className="dropdown-item  dropdown-toggle">Jobs</a>
                                                <ul
                                                    className="dropdown-menu dropdown-content_1 d-none position-absolute  bg-white ">
                                                    <li><Link className="dropdown-item"
                                                        to="/alljobs">All
                                                        Jobs</Link>
                                                    </li>
                                                    <li><Link className="dropdown-item"
                                                        to="/companyjobs">Company
                                                        Jobs</Link></li>
                                                    <li><Link className="dropdown-item"
                                                        to="/designationjobs">Designation
                                                        Jobs</Link></li>
                                                    <li><Link className="dropdown-item"
                                                        to="/categoryjobs">Category
                                                        Jobs</Link></li>
                                                    <li><Link className="dropdown-item"
                                                        to="/skilljobs">Skill
                                                        Jobs</Link>
                                                    </li>
                                                    <li><Link className="dropdown-item"
                                                        to="/locationaljobs">Locatinal
                                                        Jobs</Link></li>
                                                </ul>
                                            </li>

                                        </div>
                                    </ul>
                                </li>

                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link   font-weight-bold" id="a5" ><button type="button"
                                        className="btn  navbar-btn" data-toggle="modal" data-target="#MyModal"><i
                                            className="fas fa-user"></i> SIGNUP/SIGNIN</button></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="modal fade signIN" id="MyModal" >
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content modal_content1">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="row">
                                <div className="col-lg-7 col-md-12 pt-4">
                                    <section className="main">
                                        <div className="form_wrapper">
                                            <input type="radio" className="radio" name="radio" id="login" checked />
                                            <input type="radio" className="radio" name="radio" id="signup" />
                                            <div className="tile">
                                                <h3 className="login">Login Form</h3>
                                                <h3 className="signup">Signup Form</h3>
                                            </div>

                                            <label className="tab login_tab" for="login" >
                                                Login
                                            </label>

                                            <label className="tab signup_tab" for="signup">
                                                Signup
                                            </label>
                                            <span className="shape"></span>
                                            <div className="form_wrap">

                                                <div className="form_fild login_form">

                                                    {
                                                        third ?


                                                            <div class="forgot_popup">
                                                                <div class="forgot_popup_content">
                                                                    <h2 class="forgot_popup_title">Forgot Password</h2>
                                                                    <p class="forgot_popup_body text-justify"> Lost your password? Please enter Registered Mobile Number. You will receive your password.</p>
                                                                </div>
                                                                <div class="input-group mb-4">
                                                                    <div class="input-group-prepend country_code">
                                                                        <span class="input-group-text">+91</span>
                                                                    </div>
                                                                    <input type="number" class="form-control mobile_no" placeholder="Enter Mobile Number..." aria-label="Mobile Number" aria-describedby="basic-addon1.3" required />

                                                                </div>
                                                                <button className='btn otp_btn text-center' type='submit'>Reset Password</button>
                                                                <p className='text-center'>or</p>
                                                                <div className="use_email_login">
                                                                    <a className='use_mail_btn  mt-4 font-weight-800' type='button' onClick={() => handleButtonClick3()}>Use Email to LogIN</a>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className='login_main_content'>
                                                                {
                                                                    first ?

                                                                        <div className="mobile_otp my-4">
                                                                            {
                                                                                second ?

                                                                                    <div className="login_otp my-3">
                                                                                        <h4 className='mx-2'>Mobile Number</h4>
                                                                                        <p className='Entered_mobile_no mx-3'>+91 - <span>9876543210</span> <i class="fas fa-pencil-alt ml-3" onClick={() => handleButtonClick2()}></i></p>

                                                                                        <div className="enter_otp">
                                                                                            <div className="input_group">
                                                                                                <input type="number" className="input" placeholder="Enter OTP sent on Your Mobile No." />
                                                                                            </div>
                                                                                            <small className='ml-3'> Your OTP valid for 5min...</small>

                                                                                            <p className='mt-4 mx-3'> An OTP has been sent to <span>9876543210</span>.You mat not reaceive the OTP if the Number is not Registered with PROHIREE</p>
                                                                                            <input type="submit" className="btn login_mbtn mt-4" value="Login" />
                                                                                        </div>

                                                                                        <p className='text-center'>or</p>
                                                                                        <div className="use_email_login text-center">

                                                                                            <a onClick={() => handleButtonClick()}>  <a className='use_mail_btn mt-4' type='button' onClick={() => handleButtonClick2()}>Use Email to LogIN</a></a>
                                                                                        </div>

                                                                                    </div>

                                                                                    :
                                                                                    <div className="otp_login">

                                                                                        <div class="input-group mb-3">
                                                                                            <div class="input-group-prepend country_code">
                                                                                                <span class="input-group-text">+91</span>
                                                                                            </div>
                                                                                            <input type="number" class="form-control mobile_no" placeholder="Enter Mobile Number..." aria-label="Mobile Number" aria-describedby="basic-addon1" />

                                                                                        </div>
                                                                                        <div> <small className='mb-3 font-weight-bold text-center'>You will Receive an OTP on this Number </small></div>

                                                                                        <button className='get_otp_btn btn mt-4' type='submit' onClick={() => handleButtonClick2()}>Get OTP</button>

                                                                                        <p className='text-center my-3'>or</p>
                                                                                        <div className="use_email_login text-center">

                                                                                            <a className='use_mail_btn mt-2' type='button' onClick={() => handleButtonClick()}>Use Email to LogIN</a>
                                                                                        </div>

                                                                                    </div>
                                                                            }
                                                                        </div>
                                                                        :

                                                                        <div className="login_content">

                                                                            <form className='mt-4'>
                                                                                <div class="input-group mb-4">
                                                                                    <div class="input-group-prepend country_code">
                                                                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                                                                    </div>
                                                                                    <input type="email" class="form-control mobile_no" placeholder="Enter Your Email" aria-label="Email" aria-describedby="basic-addon1.2" required />

                                                                                </div>


                                                                                <div class="input-group mb-3">
                                                                                    <div class="input-group-prepend country_code">
                                                                                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                                                                    </div>
                                                                                    <input type="Password" class="form-control mobile_no" placeholder="Enter Password" aria-label="Password" aria-describedby="basic-addon1.4" required />

                                                                                </div>


                                                                                <a href="#forgot" className="forgot" onClick={() => handleButtonClick3()}>Forgot password?</a>
                                                                                {/*----------------------------- login button ----------------------------------------*/}
                                                                                <input type="submit" className="btn login_mbtn mt-4" value="Login" />

                                                                            </form>

                                                                            <div className="text-center mb-3">
                                                                                <a className='use_mail_btn otp_btn text-center' onClick={() => handleButtonClick()}>Use OTP to LogIN</a>
                                                                            </div>

                                                                            <div className="not_mem text-center align-items-center">
                                                                                <label for="signup">Not a member? <span> Signup now</span></label>
                                                                            </div>

                                                                        </div>

                                                                }

                                                            </div>
                                                    }
                                                </div>





                                                <div className="form_fild signup_form ">

                                                    <form >
                                                        <select class="form-control" 
                                                        name='type'
                                                        onChange={(e) => {
                                                            handleInput(e);
                                                          }}>
                                                            <option value="applicant">Student</option>
                                                            <option value="recruiter">Recruiter</option>
                                                        </select>
                                                        <div class="input-group mb-4 mt-3">
                                                            <div class="input-group-prepend country_code">
                                                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                                            </div>

                                                            <input type="text" name="name" className="form-control mobile_no "
                                                                placeholder="Enter Your Name" 
                                                                onChange={(e) => {
                                                                    handleInput(e);
                                                                  }}
                                                            />

                                                        </div>

                                                        <div class="input-group mb-4">
                                                            <div class="input-group-prepend country_code">
                                                                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                                            </div>
                                                            <input type="email" name="email" class="form-control mobile_no" placeholder="Enter Your Email" 
                                                            onChange={(e) => {
                                                                handleInput(e);
                                                              }}
                                                            />

                                                        </div>

                                                        <div class="input-group mb-4">
                                                            <div class="input-group-prepend country_code">
                                                                <span class="input-group-text">+91</span>
                                                            </div>
                                                            <input type="number" name="contactNumber" class="form-control mobile_no" id='mobile_no' placeholder="Enter Mobile Number..."  
                                                            onChange={(e) => {
                                                                handleInput(e);
                                                              }}
                                                            />
                                                            <div class="input-group-append country_code1">
                                                                <span class="input-group-text ">Verify</span>
                                                            </div>
                                                        </div>
                                                        <div class="input-group mb-4">
                                                            <div class="input-group-prepend country_code">
                                                                <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                                            </div>
                                                            <input type="Password" name="password" class="form-control mobile_no" placeholder="Enter Password" 
                                                            onChange={(e) => {
                                                                handleInput(e);
                                                              }}
                                                            />

                                                        </div>

                                                        <input type="submit" className="btn login_mbtn mt-3" value="Signup" />

                                                    </form>

                                                </div>

                                            </div>

                                        </div>
                                    </section>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <img src="images/signup_bg.jpg" className='img-fluid signup_bg_img mt-5' alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar