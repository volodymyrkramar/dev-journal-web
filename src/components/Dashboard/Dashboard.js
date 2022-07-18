import React, {Component} from 'react';
import DeployRecordItem from "../DeployRecord/DeployRecordItem";
import DeployRecordDashboardItem from "../DeployRecord/DeployRecordDashboardItem";
import CreateDeployRecordButton from "../DeployRecord/CreateDeployRecordButton";
import "./Dashboard.css";

class Dashboard extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-6 text-right">Deployments:</h1>
                            <br/>
                            <CreateDeployRecordButton/>
                            <br/>
                            <hr/>

                            <br/>
                            <div className="table-responsive-xl">
                                <table id="mytable" className="table table-bordred table-striped">
                                    <thead>
                                    <tr>
                                        <th><input type="checkbox" id="checkall"/></th>
                                        <th>date</th>
                                        <th>project</th>
                                        <th>environment</th>
                                        <th>core branch</th>
                                        <th>core commit</th>
                                        <th>il branch</th>
                                        <th>il commit</th>
                                        <th>created</th>
                                        <th>creator</th>
                                        <th>updated</th>
                                        <th>updater</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {/*{deployRecords.map(deployRecord => (*/}
                                    {/*    <DeployRecordDashboardItem key={deployRecord.id} deployRecord={deployRecord}/>*/}
                                    {/*))*/}
                                    {/*}*/}
                                    <DeployRecordDashboardItem/>
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

export default Dashboard;