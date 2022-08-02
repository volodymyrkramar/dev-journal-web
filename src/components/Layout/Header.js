import React, {Component} from "react";
// import {Link} from 'react-router-dom';
import './Header.css';
import logo from "../../media/pay-force-logo-motto.svg";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/securityActions";
import {Link} from "react-router-dom";

class Header extends Component {

    logout() {
        this.props.logout();
        window.location.href = "/";
    }

    render() {
        const {validToken, user} = this.props.security;

        let headerLinks;

        if (validToken && user) {
            headerLinks = (
                <div className="col-md-9 header-line">
                    <nav>
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">
                                    Admin-console
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/logout"
                                    onClick={this.logout.bind(this)}
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            );
        } else {
            headerLinks = (
                <div className="col-md-9 header-line">
                    <nav>
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Login
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">
                                    Register
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            );
        }

        return (
            <div className="container-fluid">
                <header>
                    <div className="row menu">
                        <div className="col-md-1">
                            <div className="logo-img">
                                <img
                                    src={logo}
                                    alt="companyLogo" className="img img-container-logo"/>
                            </div>
                        </div>
                        <div className="col-md-2 header-line app-name-holder">
                            <p className="app-name">Pay Force</p>
                            <p className="app-name"> dev journal</p>
                        </div>
                        {headerLinks}
                    </div>

                </header>
                <br/>
            </div>


        );
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps, {logout})(Header);
