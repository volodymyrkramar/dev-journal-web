import React, {Component} from "react";
import {
    BrowserRouter,
    Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import './App.css';
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/Dashboard/Dashboard";
import AddDeployRecord from "./components/DeployRecord/AddDeployRecord";
import Admin from "./components/Admin/Admin";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/addDeployRecord" element={<AddDeployRecord />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
