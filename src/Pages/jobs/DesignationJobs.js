import React from 'react'
import { Link } from 'react-router-dom'

const DesignationJobs = () => {
    return (
        <div>
             <div className="jobs_sec_1_jobdesignation">
        <div className="heading_pic_jobdesignation">
            <div className="container">
                <div className="browse_jobdesignation_list-search_box">
                    <form className="form-control">
                        <div className="row">
                            <div className="col-lg-5 col-md-5" id="input1_jobdesignation">
                                <input type="text" className="form-control" id="search_box_input_jobdesignation"
                                    placeholder="Job Title, Keywords, or Phrase" />
                            </div>
                            <div className="col-lg-5 col-md-5" id="input2_jobdesignation">
                                <input type="text" className="form-control" id="search_box_input_jobdesignation"
                                    placeholder="City ,Province or Region" />
                            </div>
                            <div className="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                id="input_btn_jobdesignation">
                                <a href="#"><button id="search_box_btn_jobdesignation" type="submit"
                                    className="btn-block">
                                    Search</button></a>
                            </div>

                        </div>
                    </form>
                </div>

                <div className="alljob_buttons text-left">
                    <button className="alljob_buttons_sub"><Link
                            to="/alljobs" className="jobs_jobs">All Jobs</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/companyjobs" className="jobs_jobs">Jobs By
                            Company</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/categoryjobs" className="jobs_jobs">Jobs By
                            Category</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/locationaljobs" className="jobs_jobs">Jobs By
                            Location</Link></button>
                    <button className="alljob_buttons_sub  active_1"><Link
                            to="/designationjobs" className="jobs_jobs">Jobs By
                            Designation</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/skilljobs" className="jobs_jobs">Jobs By Skill</Link></button>
                </div>
            </div>
        </div>
    </div>


    {/* <!-- sec 1 --> */}

    <div className="jobdesignation_sec_2">
        <div className="container">

{/* 
            <!-- container --> */}

            <div className="jobdesignation_sec_2_sub">

                <h6 className="jobdesignation_sec_2_heading_1">BROWSE JOBS BY DESIGNATION</h6>
                <hr className="bg-light" />

                {/* <!-- buttons --> */}
                <div className="jobdesignation_section_2_buttons text-left my-4">
                    <button className="jobdesignation_section_2_button_sub current">Top 100</button>
                    <button className="jobdesignation_section_2_button_sub">A</button>
                    <button className="jobdesignation_section_2_button_sub">B</button>
                    <button className="jobdesignation_section_2_button_sub">C</button>
                    <button className="jobdesignation_section_2_button_sub">D</button>
                    <button className="jobdesignation_section_2_button_sub">E</button>
                    <button className="jobdesignation_section_2_button_sub">F</button>
                    <button className="jobdesignation_section_2_button_sub">G</button>
                    <button className="jobdesignation_section_2_button_sub">H</button>
                    <button className="jobdesignation_section_2_button_sub">I</button>
                    <button className="jobdesignation_section_2_button_sub">J</button>
                    <button className="jobdesignation_section_2_button_sub">K</button>
                    <button className="jobdesignation_section_2_button_sub">L</button>
                    <button className="jobdesignation_section_2_button_sub">M</button>
                    <button className="jobdesignation_section_2_button_sub">N</button>
                    <button className="jobdesignation_section_2_button_sub">O</button>
                    <button className="jobdesignation_section_2_button_sub">P</button>
                    <button className="jobdesignation_section_2_button_sub">Q</button>
                    <button className="jobdesignation_section_2_button_sub">R</button>
                    <button className="jobdesignation_section_2_button_sub">S</button>
                    <button className="jobdesignation_section_2_button_sub">T</button>
                    <button className="jobdesignation_section_2_button_sub">U</button>
                    <button className="jobdesignation_section_2_button_sub">V</button>
                    <button className="jobdesignation_section_2_button_sub">W</button>
                    <button className="jobdesignation_section_2_button_sub">X</button>
                    <button className="jobdesignation_section_2_button_sub">Y</button>
                    <button className="jobdesignation_section_2_button_sub">Z</button>
                    <button className="jobdesignation_section_2_button_sub">0-99</button>

                </div>


                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Email
                                Marketing</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Philips
                                Software Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="jobdesignation_anchor_1"><span className="jobdesignation_img_1_text">Direct
                                Job</span></a>
                    </div>
                </div>
            </div>

        </div>
    </div>

        </div>
    )
}

export default DesignationJobs