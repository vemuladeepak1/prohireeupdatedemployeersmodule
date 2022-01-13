import React from "react";
import { Link,NavLink } from "react-router-dom";
const Sidebar = ()=>{
    return(
        
        <div className="sticky-top">
                    <p>
                        <button className="sidebar_button" data-toggle="collapse" href="#collapseExample" role="button"
                            aria-expanded="false" aria-controls="collapseExample" onclick="ezy()">Profile Menu
                            <i className="fas fa-arrow-right  text-white ml-2    sidebar_toggle-btn"></i>
                        </button>
                    </p>
                    <div className="collapse show" id="collapseExample">
                        <div className="sidebar" id="sidebar">
                            <div className="main_header text-center">
                                <div className="heading ">
                                    <img src="images/girl_avtar.png" alt="" className="info_img" />
                                    <h4 className="company">David Matim</h4>
                                    <p className="company_text">Web developer</p>
                                </div>
                            </div>
                            <NavLink to="/myprofile"><i className="fa fa-user"
                                    aria-hidden="true"></i> Profile</NavLink>
                            <NavLink to="/myresume"><i
                                    className="far fa-file-alt"></i> My Resume</NavLink>
                            <NavLink  to="/appliedjobs"><i
                                    className="fas fa-briefcase"></i> Applied Jobs</NavLink>
                            <NavLink to="/jobalerts"><i
                                    className="far fa-address-card"></i> Job Alert</NavLink>
                            <NavLink to="/savedjobs"><i
                                    className="fas fa-random"></i> Saved Jobs</NavLink>
                            {/* <!-- <a href="../../../Company/candidate_profile/cv manager/cv_manager.html"><i className="far fa-address-card"></i> CV Manager</a> --> */}
                            <NavLink to="/changepassword"><i
                                    className="fas fa-key"></i> Change Password</NavLink>
                            <NavLink to="/"><i className="fas fa-sign-out-alt"></i> Log Out</NavLink>
                        </div>
                    </div>
                </div>
        )
}
export default Sidebar