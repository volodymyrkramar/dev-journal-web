import React, {Component} from 'react';
import './LandingLoging.css';
import logo from "../../media/pay-force-logo-motto.svg";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import {login} from "../../actions/securityActions";

class LandingLoging extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const LoginRequest = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(LoginRequest);
    }

    render() {
        return (
            <div className="landing">
                <div className="container">
                    <div className="row">
                        <h1 className="login-tab display-4 text-center">Log in</h1>
                        <img src={logo} alt="companyLogo" className="img img-container-logo"/>

                        <div className="login">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input type="text"
                                                   className="form-control form-control-lg"
                                                   placeholder="username"
                                                   name="username"
                                                   value={this.state.username}
                                                    onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="password"
                                                   className="form-control form-control-lg"
                                                   placeholder="Password"
                                                   name="password"
                                                   value={this.state.password}
                                                    onChange={this.onChange}


                                            />
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

LandingLoging.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});

export default connect(mapStateToProps, {login}) (LandingLoging);