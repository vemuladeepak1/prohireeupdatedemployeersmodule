import React from 'react'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountUp from 'react-countup';



const Home = () => {


  // const [style, setStyle] = useState("cont");
  
  // const changeStyle = () => {
  //   console.log("you just clicked");
  
  //   setStyle("cont2");
  // }


    const options ={
        loop: true,
             margin: 10,
             nav: false,
             autoplay: true,
             loop: true,
             responsive: {
                 0: {
                     items: 1,
                 },
                 600: {
                     items: 3,
                 },
                 1000: {
                     items: 5,
                 }
              } 
           }
    return (
        <div>
        
        <section>
        <div id="sec1" className="container-fluid">
            <div className="container hm1">
                <div className="home1">
                    <Link id="am1" className="main_text "
                        to="/browsefilterlist">Find Jobs, Employment
                        &amp; Career
                        Opportunities</Link>
                    <h2 className="am2">Search Between More Than <br /> <span className="num_text">50,000</span> Open Jobs.
                    </h2>
                </div>
                <div className="hm2">
                    <form className="form-control">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>
                                    </label>
                                    <div className="input-group">
                                        <input type="text" className="form-control home_input"
                                            placeholder="Job Title, Keywords, or Phrase" />
                                        <div className="input-group-append">
                                            <span className="input-group-text home_input_group">
                                                <i className="fas fa-search" id="fa1"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group">
                                    <label></label>
                                    <div className="input-group">
                                        <input type="text" className="form-control home_input" placeholder="Location" />
                                        <div className="input-group-append">
                                            <span className="input-group-text home_input_group">
                                                <i className="fas fa-map-marker-alt" id="fa2"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 job_btn">
                                <label for=""></label>
                                <Link
                                to="/browsefilterlist"
                                className="text-white"> <button id="fa3" type="submit" className=" btn-primary  btn-block">Find Job</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    

    

    <section id="categories">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-12 pc">
                <h2>Popular Categories</h2>
                <h6 className="fw3 ">20+ Catetories work wating for you</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 text-left">
                <h2 className=" counter d-inline" data-count="5000">5000</h2>
                <h2 className="d-inline pl-1">+</h2>
                <h6>Recruiters</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 text-center">
                <h2 className=" counter d-inline" data-count="10000"><span>10000</span></h2>
                <h2 className="d-inline pl-1">+</h2>
                <h6>Students</h6>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 text-right">
                <h2 className=" counter d-inline" data-count="5000"><span>5000</span></h2>
                <h2 className="d-inline pl-1">+</h2>
                <h6>Freelancers</h6>
            </div>
        </div>

    </div>
</section>


<section>
<div className="pt-2 pb-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-one"><i className="fas fa-location-arrow"></i></span>
                    <h6>Design, Art & MultiMedia</h6>
                    <p>198 Open Positions</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-two"><i className="fas fa-archive"></i></span>

                    <h6>Creative Design</h6>
                    <p>198 Open Positions</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-three"><i className="fas fa-wallet"></i></span>
                    <h6>Your Photoshopping</h6>
                    <p>198 Open Positions</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-four"><i className="fas fa-cloud-upload-alt"></i></span>
                    <h6>Business Growth</h6>
                    <p>198 Open Positions</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-five"><i className="fas fa-chart-bar"></i></span>
                    <h6>Market Strategy</h6>
                    <p>198 Open Positions</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-six"><i className="fas fa-tablet"></i></span>
                    <h6>Retina Ready</h6>
                    <p>198 Open Positions</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-six"><i className="fas fa-camera"></i></span>
                    <h6>Retina Ready</h6>
                    <p>198 Open Positions</p>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="main-item">
                    <span className="icon feature-box-col-six"><i className="fas fa-solar-panel"></i></span>
                    <h6>Retina Ready</h6>
                    <p>198 Open Positions</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>





 {/* Clients section */}

<section id="clients" className="clients">
    <div className="container">
        <header className="section-header clients_header">
            <h2 className="clients_heading text-center">Our Clients</h2>

        </header>
        <div className="item">
        <OwlCarousel className="owl-theme" {...options}>
            

            <div className="item text-center">
                <img src="images/Logos/logos7z-01.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-02.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-03.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-04.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-05.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-06.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-07.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-08.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-09.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-10.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-11.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-12.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-13.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-14.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-15.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-16.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-17.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-18.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-19.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-20.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-21.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-22.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-23.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-24.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-25.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-26.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-27.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-28.png" className="img-fluid" alt="" />
            </div>

            <div className="item text-center">
                <img src="images/Logos/logos7z-29.png" className="img-fluid" alt="" />
            </div>


            </OwlCarousel>
        </div>
    </div>
</section>





<div id="sec3">
<div className="container text-center">
    <h2 className="pb-2">Featured Cities</h2>
    <p className="pb-3">20+ Featured Cities Added Jobs</p>
    <div className="row mt-2">
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card img-fluid city">
                <img className="card-img-top" src="images/card 1.jpg" alt="" />
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
                <img className="card-img-top" src="images/card 2.jfif" alt="" />
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
                <img className="card-img-top" src="images/card 3.jpg" alt="" />
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
                <img className="card-img-top" src="images/card 4.jpg" alt="" />
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
                <img className="card-img-top" src="images/card 5.jpg" alt="" />
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
                <img className="card-img-top" src="images/card 6.jpg" alt="" />
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
                <img className="card-img-top" src="images/card 7.jpg" alt="" />
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
                <img className="card-img-top" src="images/card 8.jpg" alt="" />
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






<div id="sec4">
<div className="container">
  <div className="d-flex mb-4">
    <div className="mr-auto">
      <h2>Recent Jobs</h2>
      <h6>20+ Recently Added Jobs</h6>
    </div>
    <div className="align-self-end">
      <Link className="browse button" to="/alljobs">
        Browse All Jobs <i className="fas fa-chevron-right"></i>
      </Link>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-9">
      <ul className="job-post">
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                  <Link to="/jobdetailes">
                    Full-Stack Developer
                  </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                Full-Stack Developer
              </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                    Full-Stack Developer
                  </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                Full-Stack Developer
              </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                Full-Stack Developer
              </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart" ></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                    Full-Stack Developer
                  </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                Full-Stack Developer
              </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                Full-Stack Developer
              </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                Full-Stack Developer
              </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                Full-Stack Developer
              </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
        <li>
          <div className="job-box">
            <div className="d-flex mb-2">
              <div className="job-company">
                <span>
                  <img alt="" src="" />
                </span>
              </div>
              <div className="job-info">
                <h4>
                <Link to="/jobdetailes">
                Full-Stack Developer
              </Link>
                </h4>
                <ul>
                  <li>
                    <h5 className="home_company_name">Infosys - </h5>
                  </li>
                  <li>
                    <h6 className="star_box">
                      {" "}
                      <span>
                        {" "}
                        5<i className="fas fa-star star_rating"></i>
                        <a href="#">(53 Reviews)</a>
                      </span>
                    </h6>
                  </li>
                </ul>
                <ul className="home_job_details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Hyderabad
                  </li>
                  <li>
                    <i className="far fa-bookmark"></i>Full Time
                  </li>

                  <li>
                    <i className="fas fa-shopping-bag"></i>0-9yrs
                  </li>
                  <li>
                    <i className="fas fa-rupee-sign"></i>20000 -{" "}
                    <i className="fas fa-rupee-sign"></i>30000
                  </li>
                </ul>
                <p className="discribe_home">
                  <i className="far fa-file-alt"></i> Roles and
                  Responsibilities To participate in the general
                  management and care of all pat..
                </p>
                <div className="mt-3">
                  <button className="home_job_btn">HTML</button>
                  <button className="home_job_btn">CSS</button>
                  <button className="home_job_btn">Bootstrap</button>
                  <div className="posted_home">
                    <div className="job-type">
                      <a href="#">
                        <span>
                          <i className="fas fa-history"></i> 2 Hour ago{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label className="wishlist">
              <input type="checkbox" />
              <span className="added">
                <i className="fas fa-heart"></i>
              </span>
            </label>
          </div>
        </li>
      </ul>
       
      <div className="paging mt-5">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabindex="-1">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link   active" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2 <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
    </div>
    <div className="col-lg-3">
      <div className="sticky-top">
        <div className="member mb-4">
          <div className="member-box">
            <div className="test-pic round">
              <img src="" alt="" />
            </div>
            <div className="test-matter">
              <p>
                You’ve made it through the rigorous interview process
                successfully and the organization has extended you an
                offer for employment. Congratulations! Now, it’s time to
                take a better look at what the offer includes.
              </p>
            </div>
            <div className="test-location">
              <p>
                <b className="test-name">Richard Anderson</b>
              </p>
              <p>
                <span className="test-place">Nevada, USA</span>
              </p>
            </div>
          </div>
        </div>
        <div className="sentence-box">
          <div className="sentence-matter">
            <h4>Make a Difference with Your Online Resume!</h4>
            <p>
              Your resume in minutes with JobBoard resume assistant is
              ready!
            </p>
            <a className="acc-btn" href="#">
              Create an Account
            </a>
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
export default Home