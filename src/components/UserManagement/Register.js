import React, {Component} from 'react';
import {createNewUser} from "../../actions/securityActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import './Register.css';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmedPassword: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            confirmedPassword: this.state.confirmedPassword
        };
        this.props.createNewUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    render() {

        const {errors} = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="username"
                                           name="username"
                                           value={this.state.username}
                                           onChange={this.onChange}
                                           autoComplete="off"/>

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="password" name="password"
                                           value={this.state.password}
                                           onChange={this.onChange}
                                           autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Confirm Password"
                                           name="confirmedPassword"
                                           value={this.state.confirmedPassword}
                                           onChange={this.onChange}
                                           autoComplete="off"/>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
});
export default connect(mapStateToProps, {createNewUser})(Register);