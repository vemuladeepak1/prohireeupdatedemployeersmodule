import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import apiList from '../lib/apiList';

export const Applications = () => {
    const [applications, setApplications] = useState([]);
    let { id } = useParams();



  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let address = `${apiList.applicants}?jobId=${id}`;
    console.log(address);
    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setApplications(response.data);
      })
      .catch((err) => {
        console.log(err.response);
        setApplications([]);
        
      });
  };
    return (
        <div>
            


        
    <div class="container mb-5">

    <div class="applications">
        <div class="job-bx-title clearfix">
            <h5 class=" pull-left text-uppercase cp">Applications</h5>
            <Link to="/Manage_jobs"
                class="site-button right-arrow button-sm float-right"> Back </Link>
            <div class="row my-4">
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                      
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                        
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                      
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                    
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                   
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                        
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                       
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                       
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                       
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                     
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                      
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                  
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
                
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>
   
                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>

                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>

                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>

                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        <h5 class="heading_box">
                           Sai Krishna</h5>
                        <p class="designer"><span>UI/UX Designer</span> At Attract
                            Solutions </p>
                        <div class="resume_content_location">
                            <p class="resume_content_location_sub_sub"><i class="fas fa-graduation-cap"></i>
                                B-tech
                            </p>
                            <p class="resume_content_location_sub_1_sub"><i class="fas fa-briefcase"></i> Fresher
                            </p>
                            <p class="resume_content_location_sub_1_sub px-1"><i class="fas fa-rupee-sign"></i>
                                25000</p>
                        </div>
                        <button class="php">PHP</button>
                        <button class="angular">ANGULAR</button>
                        <button class="js">JS</button>
                        <a href="#" class="download_box"><i class="fas fa-eye    download_icon_app"></i></a>

                        <a href="#" class="download_box"><i class="fas fa-list view_icon_app"></i></a>
                        <a href="#" class="download_box"><i class="fas fa-user-minus min_icon_app"></i></a>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link   active" href="#">1</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
              </div>
        </div>
    </div>
</div>


        </div>
    )
}
export default Applications;
