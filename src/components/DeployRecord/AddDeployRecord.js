import React, {Component} from 'react';
import "./AddDeployRecord.css";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {createDeployRecord} from "../../actions/deployRecordActions";
import classnames from "classnames";


class AddDeployRecord extends Component {
    constructor() {
        super();
        this.state = {
            project: "",
            environment: "",
            deploymentDate: "",
            coreBranch: "",
            coreCommit: "",
            ilBranch: "",
            ilCommit: "",
            notes: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //life cycle hooks
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newDeployRecord = {
            project: this.state.project,
            environment: this.state.environment,
            deploymentDate: this.state.deploymentDate,
            coreBranch: this.state.coreBranch,
            coreCommit: this.state.coreCommit,
            ilBranch: this.state.ilBranch,
            ilCommit: this.state.ilCommit,
            notes: this.state.notes,
        };
        this.props.createDeployRecord(newDeployRecord, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-6 text-center">Create / edit deploy record</h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {"is-invalid": errors.project})}
                                        placeholder="project"
                                        name="project"
                                        value={this.state.project}
                                        onChange={this.onChange}
                                    />
                                    {errors.project && (<div className="invalid-feedback">{errors.project}</div>)}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {"is-invalid": errors.environment})}
                                        placeholder="environment"
                                        name="environment"
                                        value={this.state.environment}
                                        onChange={this.onChange}
                                    />
                                    {errors.environment && (<div className="invalid-feedback">{errors.environment}</div>)}
                                </div>
                                <h6>Deploy date:</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className={classnames("form-control form-control-lg date-field", {"is-invalid": errors.deploymentDate})}
                                        name="deploymentDate"
                                        value={this.state.deploymentDate}
                                        onChange={this.onChange}
                                    />
                                    {errors.deploymentDate && (<div className="invalid-feedback">{errors.deploymentDate}</div>)}

                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className= "form-control form-control-lg"
                                        placeholder="core branch"
                                        name="coreBranch"
                                        value={this.state.coreBranch}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="core commit"
                                        name="coreCommit"
                                        value={this.state.coreCommit}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="il branch / app branch (for client app)"
                                        name="ilBranch"
                                        value={this.state.ilBranch}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="il commit / app commit (for client app)"
                                        name="ilCommit"
                                        value={this.state.ilCommit}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        placeholder="notes"
                                        name="notes"
                                        value={this.state.notes}
                                        onChange={this.onChange}
                                    >
                                    </textarea>
                                </div>
                                <br/>

                                <input
                                    type="submit"
                                    className="btn btn-secondary btn-lg btn-block submit-new-deploy-record-button"
                                    value="Save deploy record"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

AddDeployRecord.propTypes = {
    createDeployRecord: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {createDeployRecord})(AddDeployRecord);
