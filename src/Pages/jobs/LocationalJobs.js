import React from 'react'
import { Link } from 'react-router-dom'

const LocationalJobs = () => {
    return (
        <div>
            <div className="jobs_sec_1_joblocation">
        <div className="heading_pic_joblocation">
            <div className="container">
                <div className="browse_joblocation_list-search_box">
                    <form className="form-control">
                        <div className="row">
                            <div className="col-lg-5 col-md-5" id="input1_joblocation">
                                <input type="text" className="form-control" id="search_box_input_joblocation"
                                    placeholder="Job Title, Keywords, or Phrase" />
                            </div>
                            <div className="col-lg-5 col-md-5" id="input2_joblocation">
                                <input type="text" className="form-control" id="search_box_input_joblocation"
                                    placeholder="City ,Province or Region" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                id="input_btn_joblocation">
                                <a href="#"><button id="search_box_btn_joblocation" type="submit" className="btn-block">
                                    Search</button></a>
                            </div>

                        </div>
                    </form>
                </div>

                <div className="alljob_buttons text-left">
                    <button className="alljob_buttons_sub"><Link to="/alljobs"
                            className="jobs_jobs">All Jobs</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/companyjobs" className="jobs_jobs">Jobs
                            By
                            Company</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/categoryjobs"
                            className="jobs_jobs">Jobs By
                            Category</Link></button>
                    <button className="alljob_buttons_sub active_1 "><Link
                            to="/locationaljobs"
                            className="jobs_jobs">Jobs By
                            Location</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/designationjobs"
                            className="jobs_jobs">Jobs By
                            Designation</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/skilljobs" className="jobs_jobs">Jobs By
                            Skill</Link></button>
                </div>
            </div>
        </div>
    </div>


    {/* <!-- sec 1 -->

    <!-- sec 2 --> */}


   
    {/* <!-- 2 --> */}
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>


                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                </div>

            </div>

        </div>
    </div>
    {/* <!-- 3 --> */}
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>


                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>

                </div>

            </div>

        </div>
    </div>
    {/* <!-- 4 --> */}
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>

                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>

                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>

                </div>

            </div>
            <div className="col-lg-3">
                <div className="joblocation_sec_2_sub">

                    <h6 className="joblocation_sec_2_heading_2">JOBS IN LONDON</h6>
                    <hr className="bg-light" />
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>
                    <a href="#" className="joblocation_anchor_1"><span className="joblocation_img_1_text">Email
                            Marketing</span></a>

                </div>

            </div>

        </div>
    </div>
        </div>
    )
}

export default LocationalJobs