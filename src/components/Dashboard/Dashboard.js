import React, {Component} from 'react';
import DeployRecordItem from "../DeployRecord/DeployRecordItem";
import CreateDeployRecordButton from "../DeployRecord/CreateDeployRecordButton";
import "./Dashboard.css";
import {connect} from "react-redux";
import {getDeployRecords} from "../../actions/deployRecordActions";
import PropTypes from "prop-types";
import NotesModal from "../Layout/NotesModal";

class Dashboard extends Component {

    componentDidMount() {
        this.props.getDeployRecords();
    }

    render() {

        const {deployRecords} = this.props.deployRecord;

        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-6 text-right">Deployments:</h1>
                            <CreateDeployRecordButton/>
                            <hr/>
                            <div className="table-responsive-xl">
                                <table id="mytable" className="table table-bordred table-striped">
                                    <thead>
                                    <tr>
                                        <th>date</th>
                                        <th>project</th>
                                        <th>server</th>
                                        <th>core branch</th>
                                        <th>core commit</th>
                                        <th>il branch</th>
                                        <th>il commit</th>
                                        <th>created</th>
                                        <th>updated</th>
                                        <th>note</th>
                                        <th>actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        deployRecords.filter(dr => !dr.deleted).map(deployRecord => (
                                            <DeployRecordItem key={deployRecord.id} deployRecord={deployRecord}/>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


Dashboard.propTypes = {
    deployRecord: PropTypes.object.isRequired,
    getDeployRecords: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    deployRecord: state.deployRecord
})

export default connect(mapStateToProps, {getDeployRecords})(Dashboard);