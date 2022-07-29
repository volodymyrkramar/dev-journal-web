import React, {Component} from "react";
// import {Link} from 'react-router-dom';
import './Header.css';
import logo from "../../../src/components/res/images/pay-force-logo-motto.svg";

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
                        <div className="col-md-8">
                            <nav>
                                <ul>
                                    <li className="nav-item">
                                        {/*<Link to="/Dashboard">*/}
                                        {/*    Candidates*/}
                                        {/*</Link>*/}
                                        <a className="nav-link" href="/dashboard">
                                            Dashboard
                                        </a>
                                    </li>
                                    {/*<li className="nav-item">*/}
                                    {/*    /!*<Link to="/Dashboard">*!/*/}
                                    {/*    /!*    Vacancies*!/*/}
                                    {/*    /!*</Link>*!/*/}
                                    {/*    <a className="nav-link" href="/dashboard">*/}
                                    {/*        Dashboard*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*    /!*<Link to="/Dashboard">*!/*/}
                                    {/*    /!*    Clients*!/*/}
                                    {/*    /!*</Link>*!/*/}
                                    {/*    <a className="nav-link" href="/dashboard">*/}
                                    {/*        Dashboard*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*    /!*<Link to="/Dashboard">*!/*/}
                                    {/*    /!*    User*!/*/}
                                    {/*    /!*</Link>*!/*/}
                                    {/*    <a className="nav-link" href="/dashboard">*/}
                                    {/*        Dashboard*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                    {/*    /!*<Link to="/Dashboard">*!/*/}
                                    {/*    /!*    Sign Up*!/*/}
                                    {/*    /!*</Link>*!/*/}
                                    {/*    <a className="nav-link" href="/dashboard">*/}
                                    {/*        Dashboard*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    <li className="nav-item">
                                        {/*<Link to="/Dashboard">*/}
                                        {/*    Login*/}
                                        {/*</Link>*/}
                                        <a className="nav-link" href="/admin">
                                            Admin-console
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-3 right-block">
                            <div className="bell-block">
                                <li className="far fa-bell fa-lg">
                                </li>
                            </div>
                            <div className="log-block">
                                <li className="nav-item  dropdown no-arrow">
                                    {/*<Link className="nav-link dropdown-toggle" to="" id="userDropdown" role="button"*/}
                                    {/*      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                    {/*    <img className="img-profile rounded-circle"*/}
                                    {/*         src="https://source.unsplash.com/QAB-WJcbgJk/30x30"/>*/}
                                    {/*    <span className="mr-2 d-none d-lg-inline">  John Dou</span>*/}
                                    {/*</Link>*/}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                         aria-labelledby="userDropdown">
                                        {/*<Link className="dropdown-item" to="">*/}
                                        {/*    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"> </i>*/}
                                        {/*    Profile*/}
                                        {/*</Link>*/}
                                        {/*<Link className="dropdown-item" to="">*/}
                                        {/*    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"> </i>*/}
                                        {/*    Settings*/}
                                        {/*</Link>*/}
                                        {/*<Link className="dropdown-item" to="">*/}
                                        {/*    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"> </i>*/}
                                        {/*    Activity Log*/}
                                        {/*</Link>*/}
                                        <div className="dropdown-divider"></div>
                                        {/*<Link className="dropdown-item" to="" data-toggle="modal"*/}
                                        {/*      data-target="#logoutModal">*/}
                                        {/*    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"> </i>*/}
                                        {/*    Logout*/}
                                        {/*</Link>*/}
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
