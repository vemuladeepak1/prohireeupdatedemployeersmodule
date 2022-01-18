import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiList from '../lib/apiList';
import Sidebar from './Sidebar'
 const AppliedJobs = () => {
    const [applications, setApplications] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.applications, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setApplications(response.data);
      })
      .catch((err) => {
        // history.push("/login")
        // console.log(err.response);
        console.log(err.response.data);
      });
  };



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
                        {applications.length > 0 ? (
                            applications.map((application) => (
                                <div className="box">
                            <h5 className="heading_box">
                                {application.job.title}
                            </h5>
                            {/* <p className="designer"><span>UI/UX Designer</span> At Attract
                                Solutions </p> */}
                            <div className="box_location_main"> 
                                <p className="box_location_sub"><i className="fas fa-map-marker-alt marker_icon"></i>
                                    {application.job.cities}
                                </p>
                                <p className="box_money"><i className="far fa-money-bill-alt"></i> {application.job.salary}</p>
                            </div>
                            {
                                            application?.job?.skillsets?.map(val=>{
                                                return(<button className="php">{val}</button>)
                                            })
                                        }
                            <div className="posted">
                                <p className="posted_content">Posted : <span className="posted_content_sub">2 Days ago</span>
                                    <button className="apply float-right">{application.status}</button></p>
                            </div>
                        </div>
                            ))
                            ) : (
                            <h1 variant="h5" style={{ textAlign: "center" }}>
                                No Applications Found
                            </h1>
                            )}
                        
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