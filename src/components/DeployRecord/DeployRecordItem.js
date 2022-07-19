import React, {Component} from 'react';

class DeployRecordItem extends Component {
    render() {
        const {deployRecord} = this.props;

        function getDateStringFormatted(inDate) {
            if (inDate === null) {
                return "";
            }
            let date = new Date(inDate);
            return date.toLocaleDateString() + " " + date.toLocaleTimeString();
        }

        return (
            <tr>
                <td><input type="checkbox" name="checkbox"/></td>
                <td>{deployRecord.deploymentDate}</td>
                <td>{deployRecord.project}</td>
                <td>{deployRecord.environment}</td>
                <td>{deployRecord.coreBranch}</td>
                <td>{deployRecord.coreCommit}</td>
                <td>{deployRecord.ilBranch}</td>
                <td>{deployRecord.ilCommit}</td>
                <td>{getDateStringFormatted(deployRecord.createdDate)}</td>
                <td>{deployRecord.creator}</td>
                <td>{getDateStringFormatted(deployRecord.updatedDate)}</td>
                <td>{deployRecord.updater}</td>
            </tr>
        );
    }
}

export default DeployRecordItem;