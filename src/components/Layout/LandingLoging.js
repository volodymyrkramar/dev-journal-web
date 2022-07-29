import React, {Component} from 'react';
import './LandingLoging.css';
import logo from "../../media/pay-force-logo-motto.svg";
import {Link} from "react-router-dom";

class LandingLoging extends Component {
    render() {
        return (
            <div className="landing">
                <div className="container">
                    <div className="row">
                        <img src={logo} alt="companyLogo" className="img img-container-logo"/>

                        <h1 className="login-tab">Log in</h1>
                        <div className="login">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <form action="dashboard.html">
                                        <div className="form-group">
                                            <input type="username" className="form-control form-control-lg"
                                                   placeholder="username" name="username"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg"
                                                   placeholder="Password" name="password"/>
                                        </div>
                                        <br/>
                                        <br/>
                                        <input type="submit" className="btn btn-lg btn-primary mr-2"
                                               value="Login"/>
                                    </form>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <hr/>
                            <h6 className="text-center"> new here ? </h6>
                            <br/>

                            <Link to={'/register'}>
                                <button className="btn btn-lg btn-primary mr-2">
                                    Sign Up
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingLoging;