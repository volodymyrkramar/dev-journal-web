import React, {Component} from 'react';
import "./AddDeployRecord.css";

class AddDeployRecord extends Component {
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-6 text-center">Create / edit deploy record</h1>
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="project"
                                        name="project"
                                    />
                                </div>
                                <h6>Deploy date:</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg date-field"
                                        name="createdDate"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="environment"
                                        name="environment"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="core branch"
                                        name="coreBranch"

                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="core commit"
                                        name="coreCommit"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="il branch / app branch (for client app)"
                                        name="ilBranch"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="il commit / app commit (for client app)"
                                        name="ilCommit"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="notes"></textarea>
                                </div>
                                <br/>

                                <input type="submit"
                                       className="btn btn-secondary btn-lg btn-block submit-new-deploy-record-button"
                                       name="notes"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddDeployRecord;