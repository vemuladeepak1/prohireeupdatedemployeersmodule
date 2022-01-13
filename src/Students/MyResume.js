import React, { useState } from "react";
import { getData } from "../action/action";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";

const MyResume = () => {
  const dispatch = useDispatch();
  const [experience, setExperience] = useState(false);
  const result = useSelector((state) => state);

  const [profile, setProfile] = useState({
    YourName: "",
    CurrentLocation: "",
    MobileNumber: "",
    Email: " ",
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
  const ashok = (e) => {
    // e.preventDefault();
    console.log("working");
    dispatch(getData(profile));
  };

  const fresherHandling = (e) => {
    setProfile({ ...profile, experience: e.target.value });
  };

  // const [phd, setPhd] = useState(false);
  // const [postgraduation, setPostGraduation] = useState(false);
  // const [undergraduation, setUnderGraduation] = useState(false);
  // const [inter, setInter] = useState(false);

  // const [ssc, setSSC] = useState(false);
  // const onselect = (e) => {
  //   switch (e.target.value) {
  //     case "phd":
  //       setPhd(!phd);
  //       setPostGraduation(false);
  //       setUnderGraduation(false);
  //       setInter(false);

  //       break;
  //     case "postgraduation":
  //       setPhd(false);
  //       setPostGraduation(!postgraduation);
  //       setUnderGraduation(false);
  //       setInter(false);
  //       break;
  //     case "undergraduation":
  //       setPhd(false);
  //       setPostGraduation(false);
  //       setUnderGraduation(!undergraduation);
  //       setInter(false);
  //       break;
  //     case "inter":
  //       setPhd(false);
  //       setPostGraduation(false);
  //       setUnderGraduation(false);
  //       setInter(!inter);
  //       break;
  //     default:
  //       console.log("error");
  //   }
  // };

  const experienceButton = () => {
    setExperience(true);
    profile.experience = {};
  };

  const fresherButton = () => {
    setExperience(false);
  };

  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: 5) => {
    setRating(rate);
    // other logic
  };

  return (
    <div>
      <div className="container-fluid my_profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2 ">
                    <div className="canditate-des">
                      <a href="#">
                        <img
                          className="resume_img img-responsive"
                          alt=""
                          src="images/girl_avtar.png"
                        />
                        <i class="fas fa-camera img_pencil"></i>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <h4 className="resume_title">
                      John Doe{" "}
                      <a href="#" data-toggle="modal" data-target="#pencilEdit">
                        {" "}
                        <span class="correct_pencil">
                          <i class="fas fa-pencil-alt pencil_icon"></i>
                        </span>
                      </a>
                    </h4>

                    <div
                      class="modal fade"
                      id="pencilEdit"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered modal-lg "
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Modal title
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div class="modal_content">
                              <form action="#">
                                <div className="row m-b30">
                                  <div className=" col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Your Name:</label>
                                      <input
                                        type="text"
                                        name="YourName"
                                        value={profile.YourName}
                                        className="form_control"
                                        placeholder="Enter Your Name"
                                        onChange={formHandling.bind(this)}
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
                                          name="inlineRadioOptions"
                                          id="inlineRadio1"
                                          value="fresher"
                                          onClick={() => fresherButton()}
                                          onChange={(e) => fresherHandling(e)}
                                        />
                                        <label
                                          className="form-check-label"
                                          for="inlineRadio1"
                                        >
                                          Fresher
                                        </label>
                                      </div>
                                      <div className="form-check form-check-inline">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="inlineRadioOptions"
                                          id="inlineRadio2"
                                          value="Part Time"
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
                                      <div className="container row">
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
                                                onChange={(e) =>
                                                  radiohandling(e)
                                                }
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
                                                onChange={(e) =>
                                                  radiohandling(e)
                                                }
                                              >
                                                <option hidden>Months</option>
                                                <option value="0 Months">
                                                  00 Month
                                                </option>
                                                <option value="1 Months">
                                                  01 Month
                                                </option>
                                                <option value="2 Months">
                                                  02 Months
                                                </option>
                                                <option value="3 Months">
                                                 03 Months
                                                </option>
                                                <option value="4 Months">
                                                 04 Months
                                                </option>
                                                <option value="5 Months">
                                                  05 Months
                                                </option>
                                                <option value="6 Months">
                                                  06 Months
                                                </option>
                                                <option value="7 Months">
                                                  07 Months
                                                </option>
                                                <option value="8 Months">
                                                  08 Months
                                                </option>
                                                <option value="9 Months">
                                                  09 Months
                                                </option>
                                                <option value="10 Months">
                                                  10 Months
                                                </option>
                                                <option value="11 Months">
                                                  11 Months
                                                </option>
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
                                        name="CurrentLocation"
                                        className="form_control mt-2"
                                        placeholder="Enter Your City"
                                        onChange={formHandling.bind(this)}
                                      />
                                    </div>
                                  </div>

                                  <div className=" col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>Mobile Number</label>
                                      <input
                                        type="text"
                                        name="MobileNumber"
                                        className="form_control"
                                        placeholder="9876543210"
                                        onChange={formHandling.bind(this)}
                                      />
                                    </div>
                                  </div>

                                  <div className=" col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input
                                        type="email"
                                        name="Email"
                                        className="form_control"
                                        placeholder="xyz@gmail.com"
                                        onChange={formHandling.bind(this)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="update"
                              onClick={() => ashok()}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="resume_text">
                      Freelance Senior PHP Developer at various agencies
                    </p>
                    <a className="form-inline">
                      <p className="location_resume_1">
                        <span>
                          <i className="fas fa-map-marker-alt marker_icon"></i>
                        </span>{" "}
                        <span className="location_resume">Banglore,India</span>
                      </p>
                      <p>
                        <span>
                          <i className="fas fa-mobile-alt mobile_icon ml-1"></i>
                        </span>{" "}
                        <span className="mobile_resume">+919876543210</span>
                      </p>
                    </a>
                    <a className="form-inline">
                      <p className="location_resume_2">
                        <span>
                          <i class="fas fa-shopping-bag marker_icon"></i>
                        </span>{" "}
                        <span className="location_resume">Fresher</span>
                      </p>
                      <p>
                        <span>
                          <i class="far fa-envelope mobile_icon"></i>
                        </span>{" "}
                        <span className="mobile_resume">
                          perfextechnologies@gmail.com
                        </span>
                      </p>
                    </a>

                    <div className="progress-box m-t10">
                      <div className="progress-info">
                        Profile Strength (Average)<span>70%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="pending_action_resume">
                <h5 className="pending_action_heading">Pending Action</h5>
                <p>
                  <span className="">
                    <i className="fas fa-check check_icon"></i>
                  </span>
                  <span className="pending_action_content">
                    Verify Mobile Number
                  </span>
                </p>
                <p>
                  <span className="">
                    <i className="fas fa-check check_icon"></i>
                  </span>
                  <span className="pending_action_content">Verify Email</span>
                </p>
              </div>
            </div>

            <div id="Resume_Headline"></div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="sticky-top">
              <p>
                <button
                  className="sidebar_button"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onclick="ezy()"
                >
                  <i className="fa fa-bars text-white"></i>
                </button>
              </p>
              <div id="collapseExample">
                <div className="sidebar" id="sidebar">
                  <a href="#Resume_Headline"> Resume Headline</a>
                  <a href="#ProfileSummary"> Profile Summary</a>
                  <a href="#Key_skills"> Keyskills</a>
                  <a href="#Employment"> Employement</a>
                  <a href="#Education"> Eductaion</a>
                  <a href="#ITskills"> IT Skills</a>
                  <a href="#Project"> Project</a>
                  <a href="#Accomplishment"> Accomplishments</a>
                  <a href="#DesiredCareer"> Desired Career Profile</a>
                  <a href="#PersonalDetails"> Personal Details</a>
                  <a href="#AttachResume"> Attach Resume</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="wrapper">
              <div className="right_content">
                <div className="content">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left text-capitalize cp">
                      Resume Headline
                    </h5>
                    <a
                      href="#resume_headline"
                      className="site_button_resume  float-right"
                      id="ProfileSummary"
                      data-toggle="modal"
                      data-target="#resume_headline"
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>
                  </div>

                  <p className="job_usa">Job board currently living in USA</p>

                  <div
                    className="modal fade"
                    id="resume_headline"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered modal-lg "
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Resume Headline
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body ">
                          <div className="modal_content">
                            <p className="resume_modal_text">
                              It is the first thing recruiters notice in your
                              profile. Write concisely what makes you unique and
                              right person for the job you are looking for.
                            </p>
                            <div className="form-group my-4">
                              <label> Description </label>
                              <textarea
                                className="form_control"
                                cols="30"
                                rows="5"
                                placeholder="Describe about yourself here"
                                maxlength = "50"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="update">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Profile Summary
                  </h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#profileSummary"
                  >
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>
                <p className="job_usa" id="KeySkills">
                  Your Profile Summary should mention the highlights of your
                  career and education, what your professional interests are,
                  and what kind of a career you are looking for. Write a
                  meaningful summary of more than 50 characters.
                </p>

                <div
                  className="modal fade"
                  id="profileSummary"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-lg "
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Profile Summary
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="modal_content">
                          <p className="resume_modal_text">
                            Your Profile Summary should mention the highlights
                            of your career and education, what your professional
                            interests are, and what kind of a career you are
                            looking for. Write a meaningful summary of more than
                            50 characters.
                          </p>
                          <form action="#">
                            <div className="row my-3">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Details of Project </label>
                                  <textarea
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here.."
                                    maxlength = "250"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="update">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">Key Skills</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#key_skills"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>

                <div
                  className="modal fade"
                  id="key_skills"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered  modal-lg"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          {" "}
                          Key Skills
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body ">
                        <div className="modal_content">
                          <p className="resume_modal_text">
                            Tell recruiters what you know or what you are known
                            for e.g. Artificial Intelligence, Oracle, Java etc.
                           
                          </p>
                          <form>
                            <div className="autocomplete">
                              <input
                                id="myInputCountry"
                                type="text"
                                name="myCountry"
                                placeholder="Skills"
                                className="form_control"
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="update">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form>
                  <div className="form-group mt-3">
                    <button className="js" id="Employment">
                      java script
                    </button>
                    <button className="js">css</button>
                    <button className="js">html</button>
                    <button className="js">bootstrap</button>
                    <button className="js">web designing</button>
                    <button className="js">photoshop</button>
                  </div>
                </form>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">Employment</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#employ"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>
                  </a>
                </div>
                <h5 className="junior_edit">
                  Junior Software Developer{" "}
                  <a href="#" data-toggle="modal" data-target="#employ">
                    {" "}
                    <i className="fas fa-pencil-alt pencil_clearfix pencil"></i>
                  </a>
                </h5>
                <p className="job_usa">W3itexperts</p>
                <p className="job_usa">
                  Oct 2015 to Present (3 years 4 months)
                </p>
                <p className="job_usa" id="Education">
                  Available to join in 1 Months
                </p>
                <p className="job_usa">Junior Software Developer</p>

                <div
                  className="modal fade"
                  id="employ"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Employement
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body ">
                        <div className="modal_content">
                          <form action="#">
                            <div className="row m-b30">
                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label> Total Experience</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Years"
                                  />
                                </div>
                              </div>
                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label>Months</label>
                                  <select className="form_control">
                                    <option hidden>Months</option>
                                    <option>01 Month</option>
                                    <option>02 Months</option>
                                    <option>03 Months</option>
                                    <option>04 Months</option>
                                    <option>05 Months</option>
                                    <option>06 Months</option>
                                    <option>07 Months</option>
                                    <option>08 Months</option>
                                    <option>09 Months</option>
                                    <option>10 Months</option>
                                    <option>11 Months</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label> Your Designation</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Your Designation"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label> Your Organization</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Your Organization"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <label> Is This Your Current Company ?</label>
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      Yes
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      No
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label> Started Working From</label>
                                  <input
                                    type="date"
                                    className="form_control"
                                    placeholder="Years"
                                  />
                                </div>
                              </div>
                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label> Worked Till</label>
                                  <input
                                    type="date"
                                    className="form_control"
                                    placeholder="Years"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group my-2">
                                  <label> Describe Your Job Profile </label>
                                  <textarea
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here..."
                                    maxlength = "250"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label> Notice Period</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Notice Period"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="update">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">Education</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#study"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>
                  </a>
                </div>
                <p className="job_usa">
                  Mention your employment details including your current and
                  previous company work experience
                </p>
                <div className="education_content_1">
                  <h5 className="education_heading">
                    London - 12th{" "}
                    <a href="#" data-toggle="modal" data-target="#study">
                      {" "}
                      <i className="fas fa-pencil-alt pencil_clearfix pencil"></i>
                    </a>
                  </h5>
                  <p className="eductaion_year">2017</p>
                </div>
                <div className="education_content_2">
                  <h5 className="education_heading">
                    London - 10th{" "}
                    <a href="#" data-toggle="modal" data-target="#study">
                      {" "}
                      <i className="fas fa-pencil-alt pencil_clearfix pencil"></i>
                    </a>
                  </h5>
                  <p className="eductaion_year">2015</p>
                </div>
                <a href="#" data-toggle="modal" data-target="#study">
                  <p className="education_sub">Add Doctorate/PhD</p>
                </a>
                <a href="#" data-toggle="modal" data-target="#study">
                  <p className="education_sub" id="ITskills">
                    Add Masters/Postgraduation
                  </p>
                </a>
                <a href="#" data-toggle="modal" data-target="#study">
                  <p className="education_sub">Add Graduation/Diploma</p>
                </a>

                <div
                  className="modal fade"
                  id="study"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          {" "}
                          Education{" "}
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body ">
                        <div className="modal_content">
                          <form action="#">
                            <div className="row">
                              <div className=" col-lg-12 col-md-12">
                                <form>
                                  <div className="form-group">
                                    <label> Highest Postgraduation</label>
                                    <select
                                      id="highGrad"
                                      className="form_control"
                                      onChange={(e) => onselect(e)}
                                    >
                                      <option hidden>
                                        {" "}
                                        Highest Postgraduation
                                      </option>
                                      <option value="phd">PHD</option>
                                      <option value="postgraduation">
                                        Masters / Postgraduation
                                      </option>
                                      <option value="undergraduation">
                                        Undergraduation / Diploma
                                      </option>
                                      <option value="inter">
                                        Intermediate
                                      </option>
                                    </select>
                                  </div>
                                </form>

                                <div className="sets mt-2">
                                  <div className="phd_set" id="phdSet">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> Course</label>

                                        <input
                                          type="text"
                                          placeholder="Enter Your postgraduation Course"
                                          id="phdcourse"
                                          className="form_control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> Specialization</label>
                                        <input
                                          type="text"
                                          className="form_control "
                                          id="university"
                                          aria-Describedby="emailHelp"
                                          placeholder="Enter Your Specialization"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> University/Institute</label>
                                        <input
                                          type="text"
                                          className="form_control "
                                          id="university"
                                          aria-Describedby="emailHelp"
                                          placeholder="Select University Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <label> Course Type </label>
                                      <div className="form-group">
                                        <div className="form-check form-check-inline">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            value="Full time"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio1"
                                          >
                                            Full Time
                                          </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio2"
                                            value="Part Time"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio2"
                                          >
                                            Part Time
                                          </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio3"
                                            value=" Correspondence/Distance Learning"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio3"
                                          >
                                            Correspondence/Distance Learning
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> Passed Out Year</label>
                                        <input
                                          type="text"
                                          className="form_control "
                                          id="university"
                                          aria-Describedby="emailHelp"
                                          placeholder="Enter Passed Out Year"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label>
                                          Marks in Percentage or CGPA{" "}
                                        </label>

                                        <input
                                          type="text"
                                          placeholder="Enter your Marks in Percentage or CGPA"
                                          id="grading"
                                          className="form_control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="update">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">IT Skills</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#itSkills"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>
                  </a>
                </div>

                <p className="job_usa">
                  Mention your employment details including your current and
                  previous company work experience
                </p>
                <div className="table_content">
                  <div className="table-responsive">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th scope="col">Skills</th>
                          <th scope="col">Version</th>
                          <th scope="col">Rating</th>
                          <th scope="col">Experience</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table_row_content">
                          <td scope="row" className="table_content_1">
                            Bootstrap
                          </td>
                          <td className="table_content_1">4</td>
                          <td className="table_content_1 ml-3">
                         
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                          </td>
                          <td className="table_content_1">3 Year 5 Months</td>
                          <td>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#itSkills"
                            >
                              <i className="fas fa-pencil-alt pencil"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row" className="table_content_1">
                            Bootstrap
                          </td>
                          <td className="table_content_1">5</td>
                          <td className="table_content_1 ml-3">
                          <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                          </td>
                          <td className="table_content_1">2 Year 5 Months</td>
                          <td>
                            <a href="#">
                              <i className="fas fa-pencil-alt pencil"></i>
                            </a>
                          </td>
                        </tr>
                        <tr className="table_row_content">
                          <td scope="row" className="table_content_1">
                            HTML
                          </td>
                          <td className="table_content_1">5</td>
                          <td className="table_content_1 ml-3">
                          <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                          </td>
                          <td className="table_content_1">4 Year 5 Months</td>
                          <td>
                            <a href="#">
                              <i className="fas fa-pencil-alt pencil"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            scope="row"
                            className="table_content_1"
                            id="Project"
                          >
                            CSS
                          </td>
                          <td className="table_content_1">3</td>
                          <td className="table_content_1 ml-3">
                          <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                            <i class="fas fa-star star_rating star_rating_1"></i>
                           
                          </td>
                          <td className="table_content_1">0 Year 5 Months</td>
                          <td>
                            <a href="#">
                              <i className="fas fa-pencil-alt pencil"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="itSkills"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-lg "
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          IT Skills
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body ">
                        <div className="modal_content">
                          <form action="#">
                            <div className="row m-b30">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>IT Skills</label>
                                  <input type="text" className="form_control" />
                                </div>
                              </div>

                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label> Version</label>
                                  <input type="text" className="form_control" />
                                </div>
                              </div>
                              <div className=" col-lg-6 col-md-6">
                                <label>Rating</label>
                                <div className="form-group">
                                  <Rating
                                    onClick={handleRating}
                                    ratingValue={5} /* Available Props */
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label> Experience</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Years"
                                  />
                                </div>
                              </div>
                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label> Months </label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Months"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="update">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">Projects</h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#projectsResume"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>
                <h5 className="junior_edit">
                  Job Board{" "}
                  <a href="#" data-toggle="modal" data-target="#projectsResume">
                    {" "}
                    <i className="fas fa-pencil-alt pencil_clearfix pencil"></i>
                  </a>
                </h5>
                <p className="job_usa">w3itexpert (Offsite)</p>
                <p className="job_usa" id="ProfileSummary">
                  Dec 2018 to Present (Full Time)
                </p>
                <p className="job_usa">Job Board Template</p>

                <div
                  className="modal fade"
                  id="projectsResume"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Projects
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="modal_content">
                          <form action="#">
                            <div className="row m-b30">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Project Title</label>
                                  <input type="text" className="form_control" />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Client</label>
                                  <input type="text" className="form_control" />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <label> Project Type ? </label>
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="Full time"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      In Progress
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="Part Time"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Finished
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label>Started Working From</label>
                                  <input
                                    type="date"
                                    className="form_control"
                                    placeholder="Years"
                                  />
                                </div>
                              </div>
                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label>Worked Till</label>
                                  <input
                                    type="date"
                                    className="form_control"
                                    placeholder="Years"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Details of Project </label>
                                  <textarea
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here.."
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="update">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Accomplishment
                  </h5>
                </div>

                <div className="content_sub">
                  {/* <div className="content_sub_1">
                    <div className="job-bx-title clearfix">
                      <h5 className=" pull-left  cp_1">Online Profile</h5>
                      <a
                        href="#"
                        className="site_button_resume  float-right"
                        data-toggle="modal"
                        data-target="#onlineProfile"
                      >
                        {" "}
                        <span>
                          <i className="fas fa-pencil-alt pencil_clearfix"></i>
                        </span>{" "}
                      </a>
                    </div>
                    <p className="job_usa">
                      Add link to Online profiles (e.g. Linkedin, Facebook
                      etc.).
                    </p>

                    <div
                      className="modal fade"
                      id="onlineProfile"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Online Profile
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p className="resume_modal_text">
                              Add links to your social profiles (e.g. Linkedin
                              profile, Facebook profile, etc.
                            </p>
                            <form action="#">
                              <div className="row my-3">
                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Social Profile</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Url</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label> Description </label>
                                    <textarea
                                      className="form_control"
                                      cols="30"
                                      rows="5"
                                      placeholder="Describe here.."
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="update">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="content_sub_1">
                    <div className="job-bx-title clearfix">
                      <h5 className=" pull-left  cp_1">Work Sample</h5>
                      <a
                        href="#"
                        className="site_button_resume  float-right"
                        data-toggle="modal"
                        data-target="#workSample"
                      >
                        {" "}
                        <span>
                          <i className="fas fa-pencil-alt pencil_clearfix"></i>
                        </span>{" "}
                      </a>
                    </div>
                    <p className="job_usa">
                      Add link to your Projects (e.g. Github links etc.).
                    </p>

                    <div
                      className="modal fade"
                      id="workSample"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Work Sample
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p className="resume_modal_text">
                              Add link to your Projects (e.g. Github links
                              etc.).
                            </p>
                            <form action="#">
                              <div className="row my-3">
                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Work Title</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>URL</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label>Duration From</label>
                                    <input
                                      type="date"
                                      className="form_control"
                                      placeholder="Year"
                                    />
                                  </div>
                                </div>
                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label>Duration To</label>
                                    <input
                                      type="date"
                                      className="form_control"
                                      placeholder="Year"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label> Description </label>
                                    <textarea
                                      className="form_control"
                                      cols="30"
                                      rows="5"
                                      placeholder="Describe here.."
                                      maxlength = "250"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="update">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content_sub">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left  cp_1">
                      White Paper / Research Publication
                    </h5>
                    <a
                      href="#"
                      className="site_button_resume  float-right"
                      data-toggle="modal"
                      data-target="#whitePaper"
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>

                    <div
                      className="modal fade"
                      id="whitePaper"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              White Paper / Research Publication
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form action="#">
                              <div className="row my-3">
                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Title</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                      placeholder="Enter Title"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>URL</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                      placeholder="wwww.google.com"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label>Published On</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                      placeholder="Year"
                                    />
                                  </div>
                                </div>
                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label> Month</label>
                                    <select className="form_control">
                                    <option hidden>Months</option>
                                    <option>01 Month</option>
                                    <option>02 Months</option>
                                    <option>03 Months</option>
                                    <option>04 Months</option>
                                    <option>05 Months</option>
                                    <option>06 Months</option>
                                    <option>07 Months</option>
                                    <option>08 Months</option>
                                    <option>09 Months</option>
                                    <option>10 Months</option>
                                    <option>11 Months</option>
                                  </select>
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label> Description </label>
                                    <textarea
                                      className="form_control"
                                      cols="30"
                                      rows="5"
                                      placeholder="Describe here.."
                                      maxlength = "250"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="update">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="job_usa">
                    Add links to your Online publications.
                  </p>
                </div>

                <div className="content_sub">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left  cp_1">Presentation</h5>
                    <a
                      href="#"
                      className="site_button_resume  float-right"
                      data-toggle="modal"
                      data-target="#presentation"
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>
                  </div>
                  <p className="job_usa">
                    Add links to your Online presentations (e.g. Slideshare
                    presentation links etc.).
                  </p>

                  <div
                    className="modal fade"
                    id="presentation"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Presentation
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="#">
                            <div className="row my-3">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Title</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Title"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>URL</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="wwww.google.com"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Description </label>
                                  <textarea
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here.."
                                    maxlength = "250"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="update">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content_sub">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left  cp_1">Patent</h5>
                    <a
                      href="#"
                      className="site_button_resume  float-right"
                      data-toggle="modal"
                      data-target="#Patent"
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>
                  </div>
                  <p className="job_usa">
                    Add details of Patents you have filed.
                  </p>

                  <div
                    className="modal fade"
                    id="Patent"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Patent
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="#">
                            <div className="row my-3">
                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Patent Title</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Title"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>URL</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="wwww.google.com"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Patent Office</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Patent Office"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <label> Status ? </label>
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="Full time"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      Patent Issued
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="Part Time"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Patent Pending
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label>Application Number</label>
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Enter Application Number"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label> Issue Date</label>
                                  <input
                                    type="date"
                                    className="form_control"
                                    placeholder="Enter Application Number"
                                  />
                                </div>
                              </div>

                              <div className=" col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label> Description </label>
                                  <textarea
                                    className="form_control"
                                    cols="30"
                                    rows="5"
                                    placeholder="Describe here.."
                                    maxlength = "250"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="update">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content_sub">
                  <div className="job-bx-title clearfix">
                    <h5 className=" pull-left  cp_1">Certification</h5>
                    <a
                      href="#"
                      className="site_button_resume  float-right"
                      data-toggle="modal"
                      data-target="#Certification"
                    >
                      {" "}
                      <span>
                        <i className="fas fa-pencil-alt pencil_clearfix"></i>
                      </span>{" "}
                    </a>

                    <div
                      className="modal fade"
                      id="Certification"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Certification
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p className="resume_modal_text">
                              Add details of Certifications you have
                              achieved/completed
                            </p>
                            <form action="#">
                              <div className="row my-3">
                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Certification Name</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                      placeholder="Please Enter Certification Name"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Certification Completion ID</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                      placeholder="Please Enter Your Course Completion ID"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-12 col-md-12">
                                  <div className="form-group">
                                    <label>Certification URL</label>
                                    <input
                                      type="text"
                                      className="form_control"
                                      placeholder="Please Mention Completion URl"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label> Certificate Validity From</label>
                                    <input
                                      type="date"
                                      className="form_control"
                                      placeholder="Year"
                                    />
                                  </div>
                                </div>
                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <label> Certificate Validity To</label>
                                    <input
                                      type="date"
                                      className="form_control"
                                      placeholder="Year"
                                    />
                                  </div>
                                </div>

                                <div className=" col-lg-6 col-md-6">
                                  <div className="form-group">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="defaultCheck1"
                                      />
                                      <label
                                        className="form-check-label"
                                        for="defaultCheck1"
                                      >
                                        This Certificate Does Not Expire
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="update">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="job_usa" id="DesiredCareer">
                    Add details of Certification you have filed.
                  </p>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Desired Career Profile
                  </h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#careerProfile"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>
                <div className="container-fluid career_profile">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#careerProfile"
                    className="edit_resume"
                  >
                    {" "}
                    Edit{" "}
                    <i className="fas fa-pencil-alt pencil_clearfix pencil text-white"></i>
                  </a>
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 career_profile_column">
                      <div className="career_profile_content">
                        <h5 className="industry">Industry</h5>
                        <p className="it_employees">
                          IT-Software/Software Services{" "}
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Role</h5>
                        <p className="it_employees">
                          Web Developer{" "}
                          
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Employement Type</h5>
                        <p className="it_employees">
                          Full Time{" "}
                          
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Available to Join </h5>
                        <p className="it_employees">
                          12th october{" "}
                          
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Desired Location</h5>
                        <p className="it_employees">
                          Hyderabad{" "}
                          
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 career_profile_column">
                      <div className="career_profile_content">
                        <h5 className="industry">Functional Area</h5>
                        <p className="it_employees">
                          Design / Creative / User Experience{" "}
                          
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Job Type</h5>
                        <p className="it_employees">
                          Permanent{" "}
                          
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Desired Shift</h5>
                        <p className="it_employees">
                          Day{" "}
                          
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Expected Salary</h5>
                        <p className="it_employees">
                         ₹2 lakhs{" "}
                          
                        </p>
                      </div>
                      <div
                        className="career_profile_content"
                        id="PersonalDetails"
                      >
                        <h5 className="industry">Desired Industry</h5>
                        <p className="it_employees">
                          TCS{" "}
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="careerProfile"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                         Desired Career
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        
                        <form action="#">
                          <div className="row my-3">
                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Industry</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Please Enter Industry"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Functional Area Department</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Please Enter Your Course Completion ID"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Role</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Please Mention Completion URl"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Job Type</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio1"
                                  >
                                   Permanent
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Contractual
                                  </label>
                                </div>
                               
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Employement Type</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio1"
                                  >
                                    Full Time
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Part Time
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Freelancer
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Preffered Shift</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio1"
                                  >
                                    Day
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Night
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    Part Time
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label> Available To Join</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Year"
                                />
                              </div>
                            </div>
                            <div className=" col-lg-6 col-md-6">
                              <div className="form-group">
                                <label> Month</label>
                                <select className="form_control">
                                  <option hidden>Months</option>
                                  <option>Jan</option>
                                  <option>Feb</option>
                                  <option>March</option>
                                  <option>April</option>
                                  <option>May</option>
                                  <option>June</option>
                                  <option>July</option>
                                  <option>August</option>
                                  <option>September</option>
                                  <option>October</option>
                                  <option>November</option>
                                  <option>December</option>
                                </select>
                              </div>
                            </div>

                            <div className=" col-lg-6 col-md-6">
                           
                              <div className="form-group">
                              <label className="my-2">Expected Salary</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="₹0 Lakh"
                                />
                              </div>
                            </div>
                            <div className=" col-lg-6 col-md-6">
                            <label className="my-2">Thousands</label>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="₹5 Thousand"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Desired Location</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Please Enter Desired Location"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Desired Industry</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Please Enter Desired Industry"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="update">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Personal Details
                  </h5>
                  <a
                    href="#"
                    className="site_button_resume  float-right"
                    data-toggle="modal"
                    data-target="#personalDetails"
                  >
                    {" "}
                    <span>
                      <i className="fas fa-pencil-alt pencil_clearfix"></i>
                    </span>{" "}
                  </a>
                </div>
                <div className="container-fluid career_profile">
                <a
                    href="#"
                    data-toggle="modal"
                    data-target="#personalDetails"
                    className="edit_resume mb-3"
                  >
                    {" "}
                    Edit{" "}
                    <i className="fas fa-pencil-alt pencil_clearfix pencil text-white"></i>
                  </a>
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 career_profile_column">
                      <div className="career_profile_content">
                        <h5 className="industry">Date Of Birth</h5>
                        <p className="it_employees">
                          12/06/1995
                         
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Gender</h5>
                        <p className="it_employees">
                          Female
                         
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Marital Status</h5>
                        <p className="it_employees">
                          Sigle{" "}
                         
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Passport Number </h5>
                        <p className="it_employees">
                          + 123 456 7890{" "}
                         
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Differently Abled</h5>
                        <p className="it_employees">
                          None{" "}
                         
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Languages</h5>
                        <p className="it_employees">
                          English{" "}
                         
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 career_profile_column">
                      <div className="career_profile_content">
                        <h5 className="industry">Permanent Address</h5>
                        <p className="it_employees">
                          Add Permanent Address{" "}
                         
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Area Pin Code</h5>
                        <p className="it_employees">
                          502021{" "}
                         
                        </p>
                      </div>
                      <div className="career_profile_content">
                        <h5 className="industry">Home Town</h5>
                        <p className="it_employees">
                          Delhi{" "}
                         
                        </p>
                      </div>
                      <div className="career_profile_content" id="AttachResume">
                        <h5 className="industry">
                          Work permit of other country
                        </h5>
                        <p className="it_employees">
                          USA{" "}
                         
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="personalDetails"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Personal Details
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form action="#">
                          <div className="row my-3">
                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Date Of birth</label>
                                <input className="form_control" type="date" />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Gender</label>
                              <div className="form-group">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio1"
                                  >
                                   Male
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="inlineRadio2"
                                  >
                                   Female
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Permanent Address</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Please Enter Your Permanent Address"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Hometown</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Hometown"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>PIN-Code</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter PIN-Code"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <label className="my-2">Marital Status</label>
                              <div className="form-group">
                                <div className="form-group">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio1"
                                    >
                                      Married
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Unmarried
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="inlineRadio2"
                                    >
                                      Others
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Passport Number</label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Passport Number"
                                />
                              </div>
                            </div>

                            <div className=" col-lg-12 col-md-12">
                              <div className="form-group">
                                <label className="my-2">
                                  Work Parmit To Other Countries
                                </label>
                                <input
                                  type="text"
                                  className="form_control"
                                  placeholder="Enter Country Name"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="update">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content" id="AttachResume">
                <div className="job-bx-title clearfix">
                  <h5 className=" pull-left text-capitalize cp">
                    Attach Resume
                  </h5>
                </div>
                <p className="job_usa">
                  Resume is the most important document recruiters look for.
                  Recruiters generally do not look at profiles without resumes.
                </p>
                <form>
                  <div className="form-group">
                    <label for="myfile" className="file_upload">
                      Upload File
                    </label>

                    <input type="file" id="myfile" name="myfile" hidden />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
