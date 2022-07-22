import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import './App.css';
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./components/Dashboard/Dashboard";
import AddDeployRecord from "./components/DeployRecord/AddDeployRecord";
import UpdateDeployRecord from "./components/DeployRecord/UpdateDeployRecord";
import Admin from "./components/Admin/Admin"
import {Provider} from "react-redux";
import store from "./store";
import NotesModal from "./components/Layout/NotesModal";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/addDeployRecord" element={<AddDeployRecord/>}/>
                    <Route path="/updateDeployRecord/:id" element={<UpdateDeployRecord/>} exact />
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/notesModal" element={<NotesModal/>}/>
                    }
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
