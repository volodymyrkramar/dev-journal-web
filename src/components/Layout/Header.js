import React, {Component} from "react";
// import {Link} from 'react-router-dom';
import './Header.css';
import logo from "../../media/pay-force-logo-motto.svg";

class Header extends Component {
    render() {
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
                        <div className="col-md-6 header-line">
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
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-3 right-block header-line">
                            <div className="bell-block">
                                <li className="far fa-bell fa-lg">
                                </li>
                            </div>
                            <div className="log-block">
                                <li className="nav-item  dropdown no-arrow">
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                         aria-labelledby="userDropdown">
                                        <div className="dropdown-divider"></div>
                                    </div>
                                </li>
                            </div>
                        </div>

                    </div>
                </header>
                <br/>
            </div>


        );
    }
}

export default Header;
