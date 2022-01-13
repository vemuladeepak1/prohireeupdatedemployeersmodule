import React from 'react'
const SignUp = () => {
    return (
        <section className="popup1">
        <div className="modal" id="SignUp" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content modal-content1">
                    <div className="modal-header modal-header1">
                        <button className="close close1" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" >&times;</span>
                        </button>
                    </div>
                    <div className="modal-body modal-body1">
                        <div className="row">
                            <div className="col-lg-6 col-md-6" id="modal1">
                                <h1 className="m11">Sign Up</h1>
                                <p className="m12">Create your account using e-mail address and password.</p>
                                
                                <div className="signup_bottom_content text-center pt-5">
                                    <div className="bottom_content_header pb-2">
                                        <h5>Already have an Account...</h5>
                                    </div>
                                    <div className="bottom_content">
                                        <p>LogIn Here.......</p>
                                    </div>
                                    <div className="login pt-2">
                                        <button className="btn" onclick="myFunction1()"> LogIn</button>
                                    </div>
                                </div>
                                <div className="social-container1">
                                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" id="modal2">
                                <div className="modal-header modal-header1">
                                    <h5 className="modal-title" id="ModalLabel">Create Account</h5>
                                </div>
                                <form>
                                    <div className="modal-body  modal-body1">
                                        <div className="form-group">
                                            <label for="Name">Name</label>
                                            <input type="text" className="form-control" id="name1"
                                                aria-describedby="emailHelp" placeholder="Enter your Name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="Name">Mobile Number</label>
                                            <input type="text" className="form-control" id="name1"
                                                aria-describedby="emailHelp" placeholder="Enter your Name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="email1">Email address</label>
                                            <input type="email" className="form-control" id="email1"
                                                aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">Your information is safe
                                                with us.</small>
                                        </div>
                                        <div className="form-group">
                                            <label for="password1">Password</label>
                                            <input type="password" className="form-control" id="password1"
                                                placeholder="Password" />
                                        </div>
                                       
                                        <div className="modal-footer border-top-0 d-flex justify-content-center">
                                            <button type="submit" className="btn btn-primary signup_submit">Submit</button>
                                        </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default SignUp