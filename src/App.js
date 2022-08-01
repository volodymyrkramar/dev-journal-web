import React, {Component} from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import LandingLoging from "./components/Layout/LandingLoging";
import Register from "./components/UserManagement/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import AddDeployRecord from "./components/DeployRecord/AddDeployRecord";
import UpdateDeployRecord from "./components/DeployRecord/UpdateDeployRecord";
import Admin from "./components/Admin/Admin";
import jwt_decode from "jwt-decode";
import setJWT from "./securityUtils/setJWT";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/securityActions";
import Notes from "./components/DeployRecord/Notes";

const jwtToken = localStorage.jwtToken;

if(jwtToken) {
    setJWT(jwtToken);
    const decoded = jwt_decode(jwtToken);
    store.dispatch({
        type: "SET_CURRENT_USER",
        payload: decoded
    });

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/";
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header/>
                        <Route exact path="/" component={LandingLoging}/>
                        <Route exact path="/login" component={LandingLoging}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/addDeployRecord" component={AddDeployRecord}/>
                        <Route exact path="/updateDeployRecord/:id" component={UpdateDeployRecord}/>
                        <Route exact path="/admin" component={Admin}/>
                        <Route exact path="/notes/:notes" component={Notes}/>
                        {/*<Route exact path="/notesModal" component={NotesModal}/>*/}
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
