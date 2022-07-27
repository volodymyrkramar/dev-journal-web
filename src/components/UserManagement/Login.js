import React, {Component} from 'react';
class Login extends Component {
    render() {
        return (
            <div className="login">
                <p className="login-tab">Log In:</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <form action="dashboard.html">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg"
                                           placeholder="Email Address" name="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Password" name="password"/>
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

export default Login;