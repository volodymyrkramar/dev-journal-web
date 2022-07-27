import React, {Component} from 'react';
import './Landing.css';
import logo from "../res/images/pay-force-logo-motto.svg";
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Payforce dev journal</h1>
                                <img
                                    src={logo}
                                    alt="companyLogo" className="img img-container-logo"/>

                                <div className="login">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8 m-auto">
                                                <h3 className="login-tab">Log in:</h3>
                                                <form action="dashboard.html">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control form-control-lg"
                                                               placeholder="Email Address" name="email"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control form-control-lg"
                                                               placeholder="Password" name="password"/>
                                                    </div>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <input type="submit" className="btn btn-lg btn-primary mr-2"
                                                           value="Login"/>
                                                </form>
                                            </div>
                                        </div>
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
            </div>
        );
    }
}

export default Landing;