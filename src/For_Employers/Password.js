import React from 'react'
import EmployeeSideBar from './EmployeeSideBar';
import { Link } from 'react-router-dom';

export const Password = () => {
    return (
     
        <div class="container main_content my-5">
        <div class="row">
            <div class="col-lg-3">
                <EmployeeSideBar />
            </div>
            <div class="col-lg-9">
                <div class="wrapper">
                    <div class="content">
                        <div class="job-bx-title clearfix">
                            <h5 class=" pull-left text-uppercase cp">Change Password</h5>
                            <Link to="/" class="site-button right-arrow button-sm float-right"> Back </Link>
                        </div>
                        <form action="#">
                            <div class="row m-b30">
                                {/* <!-- first --> */}
                                <div class=" col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>Old Password</label>
                                        <input type="password" class="form_control" />
                                    </div>
                                </div>
                                {/* <!-- second --> */}
                                <div class=" col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label> New Password</label>
                                        <input type="password" class="form_control" />
                                    </div>
                                </div>
                                <div class=" col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label> Confirm Password</label>
                                        <input type="password" class="form_control" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button class="update">Update Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
    )
}
export default Password;
