import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiList from '../../lib/apiList';
 const BrowseFilterList = () => {
const [jobs,setJobs]=useState([])

useEffect(async()=>{
   await axios.get(apiList.jobs, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setJobs(response.data)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
      
    
},[])

    return (
        <div>
          


        <div className="job_detail_wrapper">
        <div className="heading_pic_filter_list">
            <h1 className="filter_list_heading_1">Browse Job List</h1>
            <p className="text-center filter_list_sub_heading">
                <Link to="/" className="filter_list_sub_heading_1">Home</Link> &gt;
                <a href="#" className="filter_list_sub_heading_2 ">Browse Filter List</a></p>
        </div>
    </div>


    <div className="container">
        <div className="filter_list_search-box">
            <form className="form-control">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>

                            </label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="search_filter_list_input"
                                    placeholder="Job Title, Keywords, or Phrase" />
                                <div className="input-group-append">
                                    <span className="filter_list_group_icon">
                                        <i className="fas fa-search ml-2" id="filter_list_search_icon1"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="form-group">
                            <label></label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="search_filter_list_input"
                                    placeholder="Location" />
                                <div className="input-group-append">
                                    <span className="filter_list_group_icon">
                                        <i className="fas fa-map-marker-alt" id="filter_list_search_icon2"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 ">
                        <label for=""></label>
                        <a href="#"></a><button id="filter_list_search_btn" type="submit" className=" btn-block">Find
                            Job</button>
                    </div>

                </div>
            </form>
        </div>

    </div>




    <div id="job_filter_list">
        <div className="container">
            <div className="d-flex mb-4">
                <div className="mr-auto">
                    <h2 className="job_filter_list_title">2269 Jobs Found</h2>
                </div>
                <div className="view_list_grid ">
                    <Link to="/browsefilterlist" className="filter_list_view "> <button
                            className="btn list_view mb-2 browse_active">List View</button></Link>
                    <Link to="/browsefiltergrid" className="filter_grid_view "> <button
                            className="btn grid_view mb-2">Grid View</button></Link>
                </div>
            </div>
            <div className="row">

                <div className="col-lg-3">
                    <div className="sticky-top">
                        <div className="accordionWrapper">
                             <div className="head_acc">
                                 <h5 className="acc_sidebar_filter float-left"><span className="acc_icon"><i className="fas fa-sliders-h sliders"></i></span><span className="refined">Refined By</span></h5>
                                 <Link to="/" className="acc_sidebar_filter_para float-right">Reset All</Link>
                             </div>
                             <div className="accordionItem open">
                                <h2 className="accordionItemHeading">Top Companies <span className="float-right"><i className="fas fa-minus"></i></span></h2>
                                <div className="accordionItemContent">
                                 

                                 <form action="#" className="acc_form">
                                    <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault2" / >
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault2">
                                          Accenture(750)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                        Reliance Industries(680) 
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                          Adani Group(248)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                         IBM(576)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                        Cognizent Technologies(768)
                                        </label>
                                      </div>

                                      <div className="more">
                                        <Link to="/companyjobs" className="more_inner float-right mr-4 py-1"> more... </Link>
                                     </div>
                                 </form> 

                                
                                  
                                </div>
                            </div>

                            <div className="accordionItem close">
                                <h2 className="accordionItemHeading">Location <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                <div className="accordionItemContent">
                                 
                                 <form action="#" className="acc_form">
                                    <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault2"  />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault2">
                                          Bangolore / Benguluru (18954)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                         Delhi (7586)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            Mumbai (9756)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            Hyderabad / Secunderabad (8765)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            Chennai (8845)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            Ahmedabad (9456)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" /> 
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                           Kolkata (6578)
                                        </label>
                                      </div>

                                      <div className="more">
                                        <Link to="/locationaljobs" className="more_inner float-right mr-4 py-1"> more... </Link>
                                     </div>
                                 </form>
                                  
                                </div>
                            </div>

                            <div className="accordionItem close">
                                <h2 className="accordionItemHeading">Experience <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                <div className="accordionItemContent">
                                   
                                 <form action="#" className="acc_form">
                                    <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault2" / >
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault2">
                                          0 - 1 years (120)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            1 - 3 years (120)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            3 - 6 years (120)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            6 - 10 years (120)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            10 - 15 years (120)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            15 - 20 years (120)
                                        </label>
                                      </div>
                                      <div className="form-check my-1"> 
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            20 - 30++ years (120)
                                        </label>
                                      </div>
                                 </form>
                                  
                                </div>
                            </div>

                            <div className="accordionItem close">
                                <h2 className="accordionItemHeading">Job Function / Category <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                <div className="accordionItemContent">
                                   
                                 <form action="#" className="acc_form">
                                    <div className="form-check my-1">
                                        <input className="form-check-input " type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault2" / >
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault2">
                                          Production Management(120)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                          Design Engineering(300)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                         Saftey/health(235)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            Engineering (568)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            Product Development (798)
                                        </label>
                                      </div>

                                      <div className="more">
                                        <Link to="/categoryjobs" className="more_inner float-right mr-4 py-1"> more... </Link>
                                     </div>
                                 </form>
                                  
                                </div>
                            </div>

                            <div className="accordionItem close">
                                <h2 className="accordionItemHeading">Education<span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                <div className="accordionItemContent">
                                
                                 <form action="#" className="acc_form">
                                    <div className="form-check my-1">
                                        <input className="form-check-input " type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault2"  />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault2">
                                         Post Graduate Not Required(15321)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                          Any Post Graduate(4783)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                         Any Graduate (7634)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            B.Tech / B.E (14564)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                            B.Com (13567)
                                        </label>
                                      </div>

                                      <div className="more">
                                        <Link to="/designationjobs" className="more_inner float-right mr-4 py-1"> more... </Link>
                                     </div>
                                 </form>
                                   

                                </div>
                            </div>

                            <div className="accordionItem close">
                                <h2 className="accordionItemHeading">Salary <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                <div className="accordionItemContent">
                                 

                                 <form action="#" className="acc_form">
                                    <div className="form-check  my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault2"  />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault2">
                                            0 - 3 Lakhs
                                        </label>
                                      </div>
                                      <div className="form-check  my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                           3 - 7 Lakhs
                                        </label>
                                      </div>
                                      <div className="form-check  my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                           7 - 15 Lakhs
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                          15 - 30 Lakhs
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                          30 - 60 Lakhs
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                          60 - 100+++ Lakhs
                                        </label>
                                      </div>
                                 </form>
                                   
                                </div>
                            </div>

                            <div className="accordionItem close">
                                <h2 className="accordionItemHeading">Industry <span className="float-right"><i className="fas fa-plus"></i></span></h2>
                                <div className="accordionItemContent">
                                
                                 <form action="#" className="acc_form">
                                    <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault2"  />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault2">
                                          IT Services & Consulting (1500)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                          BPO / Call Center(879)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                        Real Estate(589)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                          Management Jobs (685)
                                        </label>
                                      </div>
                                      <div className="form-check my-1">
                                        <input className="form-check-input" type="checkbox" name="flexcheckboxDefault" id="flexcheckboxDefault1" />
                                        <label className="form-check-label pl-2" for="flexcheckboxDefault1">
                                        Financial Services (965)
                                        </label>
                                      </div>
                                 </form>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-9">
                {
                        jobs?.map((job)=>{
                            return(
                                <ul className="filter_list_job_post">
                            <li>
                                <div className="filter_list_job_box">
                                    <div className="d-flex mb-4">
                                        <div className="filter_list_job_company">
                                            <span><img alt="" src="" /></span>
                                        </div>
                                        <div className="filter_list_job_info">
                                            <h4><Link to={`/jobdetailes/${job._id}`}>{job.title}</Link></h4>
                                            <ul>
                                                <li><i className="fas fa-map-marker-alt"></i>Hyderabad</li>
                                                <li><i className="far fa-bookmark"></i>{job.jobType}</li>
                                                <li><i className="far fa-clock"></i>Published 1 hour ago</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="filter_list_job_type mr-auto">
                                            <a href="#"><span>Full Time</span></a>
                                        </div>
                                        <div className="filter_list_salary">
                                            <span><i className="fas fa-rupee-sign"></i> {job.salary} - <i
                                                    className="fas fa-rupee-sign"></i>
                                                30000</span>
                                        </div>
                                    </div>
                                    <label className="filter_list_wishlist">
                                        <input type="checkbox" /><span className="filter_list_added"><i
                                                className="fas fa-heart"></i></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                            )
                        })
                    }
                                
                   
                </div>

            </div>
        </div>
    </div>
 
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="pagination-bx float-right mr-5" id="filter_list_pagination">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item filter_list_page_item">
                                <a className="page-link filter_list_page_link" href="#" tabindex="-1"> <span
                                        className="fas fa-arrow-left"> </span> Prev
                                </a>
                            </li>
                            <li className="page-item filter_list_page_item active">
                                <a className="page-link filter_list_page_link" href="#">1 <span className="sr-only"></span></a>
                            </li>
                            <li className="page-item filter_list_page_item"><a className="page-link filter_list_page_link"
                                    href="#">2</a></li>

                            <li className="page-item filter_list_page_item"><a className="page-link filter_list_page_link"
                                    href="#">3</a></li>
                            <li className="page-item filter_list_page_item">
                                <a className="page-link filter_list_page_link" href="#">Next <span
                                        className="fas fa-arrow-right"></span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>


        </div>
    )
}
export default BrowseFilterList;