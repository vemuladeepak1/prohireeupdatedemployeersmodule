import React from 'react'
import { Link } from 'react-router-dom'

 const AllJobs = () => {
    return (
        <div>
              <div className="jobs_alljobs">
        <div className="heading_pic_alljobs w-100 text-white  h-100">
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
                    <button className="alljob_buttons_sub active_1"><Link
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
                    <button className="alljob_buttons_sub "><Link
                            to="/designationjobs" className="jobs_jobs">Jobs By
                            Designation</Link></button>
                    <button className="alljob_buttons_sub "><Link
                            to="/skilljobs" className="jobs_jobs">Jobs By Skill</Link></button>
                </div>
            </div>
        </div>
    </div>


    <div id="sec3" className="my-4 mx-0 mt-5">
        <div className="container ">
            <h5 className="text-left font-weight-bold mb-3 ml-1">BROWSE JOBS BY LOCATIONS <a href="#"
                    className="jobs_view float-right text-decoration-none mr-3">View All</a></h5>
            <hr />
            <div className="row img_content mt-3">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card img-fluid city">
                        <img className="card-img-top w-100 rounded " src="images/card 1.jpg" alt="" />
                        <div className="card-img-overlay">
                            <div className="card-body text-left text-white">
                                <h4 className="card-title">Hyderabad</h4>
                                <p>50 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card img-fluid city">
                        <img className="card-img-top w-100 rounded" src="images/card 2.jfif" alt="" />
                        <div className="card-img-overlay">
                            <div className="card-body text-left text-white">
                                <h4 className="card-title">Mumbai</h4>
                                <p>50 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card img-fluid city">
                        <img className="card-img-top w-100 rounded" src="images/card 3.jpg" alt="" />
                        <div className="card-img-overlay">
                            <div className="card-body text-left text-white ">
                                <h4 className="card-title">Chennai</h4>
                                <p>50 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card img-fluid city">
                        <img className="card-img-top w-100 rounded" src="images/card 4.jpg" alt="" />
                        <div className="card-img-overlay">
                            <div className="card-body text-left text-white">
                                <h4 className="card-title">Pune</h4>
                                <p>50 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card img-fluid city">
                        <img className="card-img-top w-100 rounded" src="images/card 5.jpg" alt="" />
                        <div className="card-img-overlay">
                            <div className="card-body text-left text-white">
                                <h4 className="card-title">Bangalore</h4>
                                <p>50 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card img-fluid city">
                        <img className="card-img-top w-100 rounded" src="images/card 6.jpg" alt="" />
                        <div className="card-img-overlay">
                            <div className="card-body text-left text-white">
                                <h4 className="card-title">Delhi</h4>
                                <p>50 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card img-fluid city">
                        <img className="card-img-top w-100 rounded" src="images/card 7.jpg" alt="" />
                        <div className="card-img-overlay">
                            <div className="card-body text-left text-white">
                                <h4 className="card-title">Kolkata</h4>
                                <p>50 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card img-fluid city">
                        <img className="card-img-top w-100 rounded" src="images/card 8.jpg" alt="" />
                        <div className="card-img-overlay">
                            <div className="card-body text-left text-white">
                                <h4 className="card-title">Ahmedabad</h4>
                                <p>50 Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    {/* <!-- ..........  form content ends..... -->

    <!-- Down content List Items  --> */}

    <div className="alljobs_listitems mt-3">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-md-12">
                    <div className="alljobs_inner1 py-3 px-4">
                        <h5 className="text-left ml-1 mb-3 pb-3 font-weight-bold">BROWSE JOBS BY INDUSTRIES<a href="#"
                                className="jobs_view float-right text-decoration-none mr-3">View All</a></h5>
                        <hr />
                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Android Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> WordPress Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> eCommerce Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Design Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Mobile Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> MySQl Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> SEO Jobs</a>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Website Design</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Website Development</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Web Design</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Programming Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Javascript Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Devoloper Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Software Jobs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="alljobs_inner1 py-3 px-4 ">
                        <h5 className="text-left  ml-1 mb-3 pb-3 font-weight-bold">BROWSE JOBS BY FUNCTIONAL AREAS<a
                                href="#" className="jobs_view float-right text-decoration-none mr-3">View All</a></h5>
                        <hr />
                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Email Marketing</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Lead Generations</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Public Relations</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Telemarketing Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Display Advertaising</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Marketing Strategy</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Search Engine Marketing</a>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Other-Sales&Marketing</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Display Advertaising</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Market & Customer</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Search Engine Optimization</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Social Media Marketing</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Search Engine Marketing</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Marketing Strategy</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

  
    {/* <!-- companies ends --> */}

    <div className="alljobs_listitems">
        <div className="container">
            <div className="row my-5">


                <div className="col-lg-6 col-md-12">
                    <div className="alljobs_inner1 py-3 px-4 ">
                        <h5 className="text-left ml-1 mb-3 pb-3 font-weight-bold">BROWSE JOBS BY FUNCTIONAL AREAS<a href="#"
                                className="jobs_view float-right text-decoration-none mr-3">View All</a></h5>
                        <hr />
                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Email Marketing</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Lead Generations</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Public Relations</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Telemarketing Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Display Advertaising</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Marketing Strategy</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Search Engine Marketing</a>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Other-Sales&Marketing</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Display Advertaising</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Market & Customer</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Search Engine Optimization</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Social Media Marketing</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Search Engine Marketing</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Marketing Strategy</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-lg-6 col-md-12 ">
                    <div className="alljobs_inner1 py-3 px-4">
                        <h5 className="text-left ml-1 mb-3 pb-3 font-weight-bold">BROWSE JOBS BY INDUSTRIES<a href="#"
                                className="jobs_view float-right text-decoration-none mr-3">View All</a></h5>
                        <hr />
                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Android Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> WordPress Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> eCommerce Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Design Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Mobile Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> MySQl Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> SEO Jobs</a>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Website Design</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Website Development</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Web Design</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Programming Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Javascript Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Devoloper Jobs</a>
                                </div>
                                <div className="alljobs_inner_items text-left pl-2 mb-2 mt-2">
                                    <a href="#"> Software Jobs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
        </div>
    )
}

export default AllJobs