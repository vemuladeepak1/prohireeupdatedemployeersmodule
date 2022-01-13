import React from 'react'
 const SignIn = () => {
    return (
        <section className="popup2">
        <div className="modal " id="SignIn" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-content2">
                    <div className="modal-header modal-header2">
                        <button type="button" className="close close2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" id="close2">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body modal-body2">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 " id="modal21">
                                <div className="modal-header modal-header2">
                                    <h5 className="modal-title pb-2" id="lable2">SignIn</h5>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label for="email1">Email address</label>
                                        <input type="email" className="form-control" id="email1"
                                            aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password1">Password</label>
                                        <input type="password" className="form-control" id="password1"
                                            placeholder="Password" />
                                    </div>
                                    <a className="text-center signin_forgot " href="./forgotpas.html">Forgot your password?</a>
                                    <div className="modal-footer border-top-0 d-flex justify-content-center">
                                        <button type="submit" className=" btn btn-primary signin_submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6" id="modal22">
                                <h1 className="m21">SignIn</h1>
                                <p className="m22"> SignIn to connect with us and having a great feature</p>
                                <div className="signin_bottom_content text-center pt-2">
                                    <div className="bottom_content_sign pb-2">
                                        <h5>Don't have an Account...</h5>
                                    </div>
                                    <div className="bottom_content">
                                        <p>SignUP here.......</p>
                                    </div>
                                    <div className="signup pt-2">
                                        <button className="btn" onclick="myFunction2()"> SignUP</button>
                                    </div>
                                </div>
                                <div className="social-container2">
                                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default SignIn