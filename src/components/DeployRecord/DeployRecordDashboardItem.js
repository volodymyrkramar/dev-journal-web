import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./DeployRecordDashboardItem.css"


class DeployRecordDashboardItem extends Component {

    // onDeleteClick = id => {
    //     this.props.deleteCandidate(id);
    // };

    render() {
        // const {deployRecord} = this.props;
        return (
            <tr>
                {/*<td><input type="checkbox" className="checkthis"/></td>*/}
                {/*<td>{deployRecord.date}</td>*/}
                {/*<td>{deployRecord.project}</td>*/}
                {/*<td>{deployRecord.environment}</td>*/}
                {/*<td>{deployRecord.coreBranch}</td>*/}
                {/*<td>{deployRecord.coreCommit}</td>*/}
                {/*<td>{deployRecord.ilBranch}</td>*/}
                {/*<td>{deployRecord.ilCommit}</td>*/}
                {/*<td>{deployRecord.created}</td>*/}
                {/*<td>{deployRecord.creator}</td>*/}
                {/*<td>{deployRecord.updated}</td>*/}
                {/*<td>{deployRecord.updater}</td>*/}

                <td><input type="checkbox" className="checkthis"/></td>
                <td>"date"</td>
                <td>"project"</td>
                <td>"environment"</td>
                <td>"coreBranch"</td>
                <td>"coreCommit"</td>
                <td>"ilBranch"</td>
                <td>"ilCommit"</td>
                <td>"created"</td>
                <td>"creator"</td>
                <td>"updated"</td>
                <td>"updater"</td>
                {/*<td>*/}
                {/*    <Link to={`/candidateProfilePage/${candidate.id}`}>*/}
                {/*    <p data-placement="top" data-toggle="tooltip" title="Show more">*/}
                {/*        <button className="btn btn-outline-success btn-xs" data-title="Show more"*/}
                {/*                data-toggle="modal" data-target="#show more"><span*/}
                {/*            className="fa fa-id-card-o" aria-hidden="true"></span></button>*/}
                {/*    </p>*/}
                {/*    </Link>*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    <Link to={`/updateCandidate/${candidate.id}`}>*/}
                {/*    <p data-placement="top" data-toggle="tooltip" title="Edit">*/}
                {/*        <button className="btn btn-edit btn-xs" data-title="Edit"*/}
                {/*                data-toggle="modal" data-target="#edit"><span*/}
                {/*            className="fa fa-pencil-square-o" aria-hidden="true"></span></button>*/}
                {/*    </p>*/}
                {/*    </Link>*/}
                {/*</td>*/}
                {/*<td>*/}
                {/*    <p data-placement="top" data-toggle="tooltip" title="Delete"onClick={this.onDeleteClick.bind(*/}
                {/*        this, candidate.id)}>*/}
                {/*        <button className="btn btn-danger btn-xs" data-title="Delete"*/}
                {/*                data-toggle="modal" data-target="#delete" ><span*/}
                {/*            className="fa fa-trash-o" aria-hidden="true"></span></button>*/}
                {/*    </p>*/}
                {/*</td>*/}
            </tr>

    )
        ;
    }
}

// CandidatesDashboardItem.propTypes={
//     deleteCandidate: PropTypes.func.isRequired
// };

// export default connect(null, {deleteCandidate})(CandidatesDashboardItem);

export default DeployRecordDashboardItem;