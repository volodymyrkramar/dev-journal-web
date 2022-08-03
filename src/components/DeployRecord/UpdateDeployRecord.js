import React, {Component} from 'react';
import "./AddDeployRecord.css";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {createDeployRecord, getDeployRecord} from "../../actions/deployRecordActions";
import classnames from "classnames";
import {useParams} from "react-router-dom";


class UpdateDeployRecord extends Component {

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        const {
            id,
            project,
            environment,
            deploymentDate,
            coreBranch,
            coreCommit,
            ilBranch,
            ilCommit,
            notes
        } = nextProps.deployRecord;

        this.setState({
            id,
            project,
            environment,
            deploymentDate,
            coreBranch,
            coreCommit,
            ilBranch,
            ilCommit,
            notes
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getDeployRecord(id);
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const updatedDeployRecord = {
            id: this.props.deployRecord.id,
            project: this.state.project,
            environment: this.state.environment,

            deploymentDate: this.state.deploymentDate,
            coreBranch: this.state.coreBranch,
            coreCommit: this.state.coreCommit,
            ilBranch: this.state.ilBranch,
            ilCommit: this.state.ilCommit,
            notes: this.state.notes
        };
        this.props.createDeployRecord(updatedDeployRecord, this.props.history);
    }


    render() {
        const {errors} = this.state;

        const projectOptions = [
            {value: "agro", label: "agro"},
            {value: "amic", label: "amic"},
            {value: "bis", label: "bis"},
            {value: "cib", label: "cib"},
            {value: "demo", label: "demo"},
            {value: "industrial", label: "industrial"},
            {value: "kredo", label: "kredo"},
        ];

        const basicEnvironmentOptions = [
            {value: "prod", label: "prod"},
            {value: "dev", label: "dev"},
            {value: "test", label: "test"},
            {value: "android", label: "android"},
            {value: "ios", label: "ios"},
            {value: "web", label: "web"},
        ];

        return (
            <div className="deployRecords">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-6 text-center">Update deploy record</h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <select
                                        className={classnames("form-control form-control-lg", {"is-invalid": errors.project})}
                                        placeholder="project"
                                        name="project"
                                        value={this.state.project}
                                        onChange={this.onChange}
                                    >
                                        {projectOptions.map(option => (
                                            <option className="decorated" key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    {errors.project && (<div className="invalid-feedback">{errors.project}</div>)}
                                </div>
                                <div className="form-group">
                                    <select
                                        className={classnames("form-control form-control-lg", {"is-invalid": errors.environment})}
                                        placeholder="environment"
                                        name="environment"
                                        value={this.state.environment}
                                        onChange={this.onChange}
                                    >
                                        {basicEnvironmentOptions.map(option => (
                                            <option className="decorated"  key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
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
                                        className="form-control form-control-lg"
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

UpdateDeployRecord.propTypes = {
    getDeployRecord: PropTypes.func.isRequired,
    createDeployRecord: PropTypes.func.isRequired,
    deployRecord: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    deployRecord: state.deployRecord.deployRecord,
    errors: state.errors
});

export default connect(mapStateToProps, {getDeployRecord, createDeployRecord})(UpdateDeployRecord);
