import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
// import { getData } from "../action/action";
import { useDispatch, useSelector } from "react-redux";
import apiList from "../lib/apiList";
import axios from "axios";

const MyProfile = (props) => {
  const dispatch = useDispatch();
  const [experience, setExperience] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    currentlocation: "",
    contactNumber: "",
    email: " ",
    experience: {
      year: "",
      month: "",
    },
  });

  const formHandling = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const radiohandling = (e) => {
    setProfile((previousState) => ({
      ...profile,
      experience: {
        ...previousState.experience,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const fresherHandling = (e) => {
    setProfile({ ...profile, experience: e.target.value });
  };

  const experienceButton = () => {
    setExperience(true);
    profile.experience = {};
  };

  const fresherButton = () => {
    setExperience(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProfile(response.data);
        
      })
      .catch((err) => {
        console.log(err.response.data);
        
      });
  };

 const updateData =()=>{
   console.log(profile)
  axios
  .put(apiList.user, profile, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
  .then((response) => {
 console.log(response.data)
    getData();
  })
  .catch((err) => {
  
    console.log(err.response);
  });
 }


  return (
    <div className="container main_content">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="wrapper">
            <div className="content">
              <div className="job-bx-title clearfix">
                <h5 className=" pull-left text-uppercase cp">
                  Basic Information
                </h5>
                <Link
                  to="/"
                  className="site-button right-arrow button-sm float-right"
                >
                  {" "}
                  Back{" "}
                </Link>
              </div>
              <form action="#">
                <div className="row">
                  <div className=" col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Your Name:</label>
                        <input
                          type="text"
                          name="name"
                          value={profile.name}
                          className="form_control"
                          placeholder="Enter Your Name"
                          onChange={(e)=>formHandling(e)}
                        />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <label> Experience </label>
                    <div className="form-group">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          id="inlineRadio1"
                          value="fresher"
                          checked={profile.experience === "fresher"}
                          onClick={() => fresherButton()}
                          onChange={(e)=>fresherHandling(e)}
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Fresher
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="experience"
                          id="inlineRadio2"
                          value="experienced"
                          checked={profile.experience === "experienced"}
                          onClick={() => experienceButton()}
                        />
                        <label
                          className="form-check-label"
                          for="inlineRadio2"
                          name="experienced"
                        >
                          Experienced
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    {experience ? (
                      <div className="row">
                        <div className=" col-lg-6 col-md-6 d-inline">
                          <div className="form-group">
                            <div
                              className="types_student_profile"
                              id="types_student_profile"
                            >
                              <label> Years</label>
                              <input
                                type="text"
                                className="form_control"
                                name="year"
                                placeholder="Years"
                                onChange={(e) => radiohandling(e)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 d-inline">
                          <div className="form-group">
                            <div
                              className="types_student_profile"
                              id="types_student_profile_mnths"
                            >
                              <label> Months</label>
                              <select
                                className="form_control"
                                name="month"
                                onChange={(e) => radiohandling(e)}
                              >
                                <option hidden>Select Month</option>
                                <option value="0 Months">00 Month</option>
                                <option value="1 Months">01 Month</option>
                                <option value="2 Months">02 Months</option>
                                <option value="3 Months">03 Months</option>
                                <option value="4 Months">04 Months</option>
                                <option value="5 Months">05 Months</option>
                                <option value="6 Months">06 Months</option>
                                <option value="7 Months">07 Months</option>
                                <option value="8 Months">08 Months</option>
                                <option value="9 Months">09 Months</option>
                                <option value="10 Months">10 Months</option>
                                <option value="11 Months">11 Months</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="col-lg-12">
                    <label> Current Location </label>
                    <div className="form-group">
                      <input
                        type="text"
                        name="currentlocation"
                        value={profile.currentlocation}
                        className="form_control mt-2"
                        placeholder="Enter Your City"
                        onChange={(e)=>formHandling(e)}
                      />
                    </div>
                  </div>

                  <div className=" col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        value={profile.contactNumber}
                        name="contactNumber"
                        className="form_control"
                        placeholder="9876543210"
                        onChange={(e)=>formHandling(e)}
                      />
                    </div>
                  </div>

                  <div className=" col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        className="form_control"
                        placeholder="xyz@gmail.com"
                        onChange={(e)=>formHandling(e)}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <button className="update" onClick={()=>updateData()} >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
