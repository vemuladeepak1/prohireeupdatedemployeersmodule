import React from 'react'
import Sidebar from './Sidebar'

const SavedJobs = () => {
    return (
        <div class="container main_content my-5">
        <div class="row">
            <div class="col-lg-3">
                <Sidebar />
            </div>
            <div class="col-lg-9">
                <div class="wrapper">



                    {/* <!-- main content --> */}

                    <div class="content">

                        <div class="job-bx-title clearfix">
                            <h5 class=" pull-left text-uppercase cp">Saved Jobs</h5>
                            <a href="#" class=" float-right custom_class">
                                <span class="sort">Sort</span>
                                <select name="#" id="#" class="custom_button">
                                    <option>All</option>
                                    {/* <!-- <option>None</option> --> */}
                                    <option>Read</option>
                                    <option>Unread</option>
                                    
                                </select>
                            </a>
                        </div>

                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead class="table_head">
                                    <tr>
                                        
                                        <th scope="col">Related Jobs</th>
                                        <th scope="col" className='ml-3'>Company</th>
                                        <th scope="col" className='text-center'>Date</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ CompanyName</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 2 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ CompanyName</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <!-- 3 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ CompanyName</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 4 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ CompanyName</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <!-- 5 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 6 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <!-- 7 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <!-- 8 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 9 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* <!-- 10 --> */}

                                    <tr>
                                        
                                        <td>
                                            <a href="#" class="heading_a_table">Social Media Expert</a>

                                        </td>
                                        <td>
                                            <p class="appications">@ Company Name</p>
                                        </td>
                                        <td>
                                            <p class="pending">December 15,2018</p>
                                        </td>
                                        <td>
                                            <div class="form-inline">
                                                <div class="content_del_eye">
                                                    <a href="#"> <i class="fas fa-eye eye"></i></a>
                                                    <a href="#"><i class="far fa-trash-alt del"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                       <div class="paging">
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
    </div>
    )
}

export default SavedJobs