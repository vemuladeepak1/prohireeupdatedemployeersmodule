
import React from 'react'
import { Link } from 'react-router-dom'

const CompanyJobs = () => {
    return (
        <div>
             <div class="jobs_sec_1_companyjobs">
        <div class="heading_pic_companyjobs">
            <div class="container">
                <div class="browse_companyjobs_list-search_box">
                    <form class="form-control">
                        <div class="row">
                            <div class="col-lg-5 col-md-5" id="input1_companyjobs">
                                <input type="text" class="form-control" id="search_box_input_companyjobs"
                                    placeholder="Job Title, Keywords, or Phrase" />
                            </div>
                            <div class="col-lg-5 col-md-5" id="input2_companyjobs">
                                <input type="text" class="form-control" id="search_box_input_companyjobs"
                                    placeholder="City ,Province or Region" />
                            </div>
                            <div class="col-lg-2 col-md-2 col-xs-offset-3 col-xs-6 c0l-xs-offset-3"
                                id="input_btn_companyjobs">
                                <a href="#"><button id="search_box_btn_companyjobs" type="submit" class="btn-block">
                                    Search</button></a>
                            </div>

                        </div>
                    </form>
                </div>

                <div class="alljob_buttons text-left">
                    <button class="alljob_buttons_sub"><Link
                            to="/alljobs" class="jobs_jobs">All Jobs</Link></button>
                    <button class="alljob_buttons_sub  active_1"><Link
                            to="/companyjobs" class="jobs_jobs">Jobs By
                            Company</Link></button>
                    <button class="alljob_buttons_sub "><Link
                            to="/categoryjobs" class="jobs_jobs">Jobs By
                            Category</Link></button>
                    <button class="alljob_buttons_sub "><Link
                            to="/locationaljobs" class="jobs_jobs">Jobs By
                            Location</Link></button>
                    <button class="alljob_buttons_sub "><Link
                            to="/designationjobs" class="jobs_jobs">Jobs By
                            Designation</Link></button>
                    <button class="alljob_buttons_sub "><Link
                            to="/skilljobs" class="jobs_jobs">Jobs By Skill</Link></button>
                </div>
            </div>
        </div>
    </div>


    {/* <!-- sec 1 -->

    <!-- section 2 --> */}

    <div class="company_jobs_section_2">
        <div class="container">
            <div class="company_jobs_section_2_sub">
                <h6 class="company_jobs_section_2_sub_heading">BROWSE JOBS BY COMPANIES</h6>
                <hr class="bg-secondary " />
                <div class="company_jobs_section_2_buttons text-left my-4">
                    <button class="company_jobs_section_2_button_sub current d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">Top 100</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">A</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">B</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">C</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">D</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">E</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">F</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">G</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">H</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">I</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">J</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">K</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">L</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">M</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">N</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">O</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">P</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">Q</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">R</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">S</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">T</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">U</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">V</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">W</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">X</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">Y</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">Z</button>
                    <button class="company_jobs_section_2_button_sub d-inline-block mr-1 mb-2 text-uppercase position-relative z-index-1 overflow-hidden align-middle rounded cursor-pointer text-center bg-dark text-height-2 font-weight-normal px-3 py-2 text-white ">0-99</button>


                </div>

                {/* <!-- img and text --> */}

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Email
                                Marketing</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/battery.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Philips
                                Software Job</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/muscle.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Direct
                                Job</span></a>
                    </div>

                    {/* <!-- 2 --> */}

                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/muscle.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">24/7
                                jobs</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/car.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Bank
                                Jobs</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/battery.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Data Entry
                                Jobs</span></a>
                    </div>

                    {/* <!-- 3 --> */}

                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">African
                                Commodities</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/battery.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Samsung
                                Software Jobs</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/muscle.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Philips
                                Software jobs</span></a>
                    </div>

                    {/* <!-- 4 --> */}

                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/car.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Foton Motor
                                Jobs</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/muscle.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Direct
                                Jobs</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">24/7
                                jobs</span></a>
                    </div>

                    {/* <!-- 5 --> */}

                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Philips
                                Software jobs</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/battery.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Samsung
                                Software Jobs</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/muscle.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Bank
                                Jobs</span></a>
                    </div>

                    {/* <!-- 6 --> */}

                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/muscle.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Email
                                Marketing</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/car.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Email
                                Marketing</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/battery.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Email
                                Marketing</span></a>
                    </div>

                    {/* <!-- 7 --> */}

                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Direti
                                Jobs</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Email
                                Marketing</span></a>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <a href="#" class="company_jobs_anchor py-1 pr-2 my-1 rounded"><span><img src="images/auto_repair.png" alt=""
                                    class="company_jobs_img_1 mr-2 py-1 px-2 d-flex" /></span><span class="company_jobs_img_1_text align-self-center px-2">Tata
                                Jobs</span></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
        </div>
    )
}

export default CompanyJobs