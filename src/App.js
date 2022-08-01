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
                        {/*<Route exact path="/admin" component={Admin}/>*/}
                        {/*<Route exact path="/notesModal" component={NotesModal}/>*/}
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
