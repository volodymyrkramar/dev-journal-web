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
            secretKeyphrase: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.security.validToken) {
            this.props.history.push('/dashboard');
        }
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            confirmedPassword: this.state.confirmedPassword,
            secretKeyphrase: this.state.secretKeyphrase
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
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg", {'is-invalid': errors.username})}
                                           placeholder="username"
                                           name="username"
                                           value={this.state.username}
                                           onChange={this.onChange}
                                           autoComplete="off"/>
                                    {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}

                                </div>

                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control form-control-lg", {'is-invalid': errors.password})}
                                           placeholder="password - should be at least 6 characters"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.onChange}
                                           autoComplete="off"/>
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control form-control-lg", {'is-invalid': errors.confirmedPassword})}
                                           placeholder="confirm password"
                                           name="confirmedPassword"
                                           value={this.state.confirmedPassword}
                                           onChange={this.onChange}
                                           autoComplete="new-password"/>
                                    {errors.confirmedPassword && (<div className="invalid-feedback">{errors.confirmedPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg", {'is-invalid': errors.secretKeyphrase})}
                                           placeholder="enter your secret phrase"
                                           name="secretKeyphrase"
                                           value={this.state.secretKeyphrase}
                                           onChange={this.onChange}
                                           autoComplete="off"/>
                                    {errors.secretKeyphrase && (<div className="invalid-feedback">{errors.secretKeyphrase}</div>)}
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Submit"/>
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
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});
export default connect(mapStateToProps, {createNewUser})(Register);