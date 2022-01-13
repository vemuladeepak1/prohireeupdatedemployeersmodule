import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
 const AppliedJobs = () => {
    return (
        <div className="container main_content my-5">
        <div className="row">
            <div className="col-lg-3">
                <Sidebar />
            </div>
            <div className="col-lg-9">
                <div className="wrapper">
                    <div className="content">
                        <div className="job-bx-title clearfix">
                            <h5 className=" pull-left text-uppercase cp">2269 JOBS FOUND</h5>
                            <a href="#" className=" float-right custom_class">
                                <span className="sort">Sort By Freshness</span>
                                <select name="#" id="#" className="custom_button">
                                    <option>Last 2 months</option>
                                    <option>Last month</option>
                                    <option>Last Weak</option>
                                    <option>Last 3 days</option>
                                </select>
                            </a>
                        </div>
                        <div className="box">
                            <h5 className="heading_box">
                                Software Developer
                            </h5>
                            <p className="designer"><span>UI/UX Designer</span> At Attract
                                Solutions </p>
                            <div className="box_location_main">
                                <p className="box_location_sub"><i className="fas fa-map-marker-alt marker_icon"></i>
                                    Banglore,India
                                </p>
                                <p className="box_money"><i className="far fa-money-bill-alt"></i> 3000</p>
                            </div>
                            <button className="php">PHP</button>
                            <button className="angular">ANGULAR</button>
                            <button className="js">JS</button>
                            <div className="posted">
                                <p className="posted_content">Posted : <span className="posted_content_sub">2 Days ago</span>
                                    <button className="apply float-right">Apply job</button></p>
                            </div>
                        </div>
                        <div className="box">
                            <h5 className="heading_box">
                                Software Developer
                            </h5>
                            <p className="designer"><span>UI/UX Designer</span> At Attract
                                Solutions </p>
                            <div className="box_location_main">
                                <p className="box_location_sub"><i className="fas fa-map-marker-alt marker_icon"></i>
                                    Banglore,India
                                </p>
                                <p className="box_money"><i className="far fa-money-bill-alt"></i> 3000</p>
                            </div>
                            <button className="php">PHP</button>
                            <button className="angular">ANGULAR</button>
                            <button className="js">JS</button>
                            <div className="posted">
                                <p className="posted_content">Posted : <span className="posted_content_sub">2 Days ago</span>
                                    <button className="apply float-right">Apply job</button></p>
                            </div>
                        </div>
                        <div className="box">
                            <h5 className="heading_box">
                                Software Developer
                            </h5>
                            <p className="designer"><span>UI/UX Designer</span> At Attract
                                Solutions </p>
                            <div className="box_location_main">
                                <p className="box_location_sub"><i className="fas fa-map-marker-alt marker_icon"></i>
                                    Banglore,India
                                </p>
                                <p className="box_money"><i className="far fa-money-bill-alt"></i> 3000</p>
                            </div>
                            <button className="php">PHP</button>
                            <button className="angular">ANGULAR</button>
                            <button className="js">JS</button>
                            <div className="posted">
                                <p className="posted_content">Posted : <span className="posted_content_sub">2 Days ago</span>
                                    <button className="apply float-right">Apply job</button></p>
                            </div>
                        </div>
                        <div className="box">
                            <h5 className="heading_box">
                                Software Developer
                            </h5>
                            <p className="designer"><span>UI/UX Designer</span> At Attract
                                Solutions </p>
                            <div className="box_location_main"> 
                                <p className="box_location_sub"><i className="fas fa-map-marker-alt marker_icon"></i>
                                    Banglore,India
                                </p>
                                <p className="box_money"><i className="far fa-money-bill-alt"></i> 3000</p>
                            </div>
                            <button className="php">PHP</button>
                            <button className="angular">ANGULAR</button>
                            <button className="js">JS</button>
                            <div className="posted">
                                <p className="posted_content">Posted : <span className="posted_content_sub">2 Days ago</span>
                                    <button className="apply float-right">Apply job</button></p>
                            </div>
                        </div>
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link   active" href="#">1</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
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
export default AppliedJobs