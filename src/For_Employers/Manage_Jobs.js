import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeSideBar from './EmployeeSideBar';
import axios from 'axios'
import apiList from '../lib/apiList';
export const Manage_Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        let searchParams = [`myjobs=1`];
        const queryString = searchParams.join("&");
        console.log(queryString);
        let address = apiList.jobs;
        if (queryString !== "") {
        address = `${address}?${queryString}`;
        }
        axios
            .get(address, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                console.log(response.data)
                setJobs(response.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const handleDelete = (id) => {
        axios
          .delete(`${apiList.jobs}/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
              console.log(response)
            // setPopup({
            //   open: true,
            //   severity: "success",
            //   message: response.data.message,
            // });
            getData();
            // handleClose();
          })
          .catch((err) => {
            console.log(err.response);
            // setPopup({
            //   open: true,
            //   severity: "error",
            //   message: err.response.data.message,
            // });
            // handleClose();
          });
      };


    return (
        <div>
            <div className="container main_content my-5">
                <div className="row">
                    <div className="col-lg-3">
                        <EmployeeSideBar />
                    </div>
                    <div className="col-lg-9">
                        <div className="wrapper">
                            <div className="content">
                                <div className="job-bx-title clearfix">
                                    <h5 className=" pull-left text-uppercase cp">Manage Jobs</h5>
                                    <a href="#" className=" float-right custom_class">
                                        <span className="sort">Sort By Freshness</span>
                                        <select name="#" id="#" className="custom_button">
                                            <option>All</option>
                                            <option>Read</option>
                                            <option>Unread</option>
                                        </select>
                                    </a>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead className="table_head">
                                            <tr>

                                                <th scope="col">JobTitle</th>
                                                <th scope="col">Application</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Edit</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                jobs.map((job,index) => {
                                                    return (
                                                        <tr>

                                                            <td>
                                                                <p className="heading_a_table">{job.title}</p>


                                                            </td>
                                                            <td>
                                                                <p className="appications"><Link to={`/Applications/${job._id}`}>Applications</Link></p>
                                                            </td>
                                                            <td>
                                                                <p className="pending">Pending</p>
                                                            </td>
                                                            <td>
                                                                <div className="form-inline">
                                                                    <div className="content_del_eye">
                                                                        <Link to={`/jobdetailes/${job._id}`} > <i className="fas fa-eye eye"></i></Link>
                                                                        <Link to={`/updatepost/${job._id}`}><i className="fas fa-pencil-alt eye"></i></Link>
                                                                        <a href="#" onClick={()=>handleDelete(job._id)}><i className="far fa-trash-alt del"></i></a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )


                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <div className="paging">
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
export default Manage_Jobs;