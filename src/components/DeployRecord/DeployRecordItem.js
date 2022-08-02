import React, {Component} from 'react';
import delIco from "../../../src/media/del.svg";
import editIco from "../../../src/media/edit.svg";
import noteIco from "../../../src/media/notes.svg";
import './DeployRecordItem.css';
import {Link} from "react-router-dom";

class DeployRecordItem extends Component {
    render() {
        const {deployRecord} = this.props;

        function getDateStringFormatted(inDate) {
            if (inDate === null) {
                return "";
            }
            let date = new Date(inDate);
            return `${date.getDate() < 10 ? ("0" + (date.getDate() + 1)) : date.getDate() + 1}-${date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1}-${date.getFullYear().toString().slice(2)} 
            ${date.getHours()}:${date.getMinutes() < 10 ? ("0" + (date.getMinutes() + 1)) : date.getMinutes() + 1}`.replace("\n", "");
        }

        return (
            <tr>
                <td>{getDateStringFormatted(deployRecord.deploymentDate).split(" ")[0]}</td>
                <td>{deployRecord.project}</td>
                <td>{deployRecord.environment}</td>
                <td>{deployRecord.coreBranch}</td>
                <td className="commit">{deployRecord.coreCommit}</td>
                <td>{deployRecord.ilBranch}</td>
                <td className="commit">{deployRecord.ilCommit}</td>
                <td style={{whiteSpace : 'pre-line'}}>{(deployRecord.createdBy !== null ? deployRecord.createdBy + " / " : "") +
                    (deployRecord.createdBy !== null && deployRecord.createdBy.length > 12 ? "\n" : "") + getDateStringFormatted(deployRecord.createdDate)}</td>
                <td style={{whiteSpace : 'pre-line'}}>{(deployRecord.updatedBy !== null ? deployRecord.updatedBy + " / " : "") +
                    (deployRecord.updatedBy !== null && deployRecord.updatedBy.length > 12 ? "\n" : "") + getDateStringFormatted(deployRecord.updatedDate)}</td>
                <td id="buttons">
                    <Link to={{
                        pathname: `/notes/${deployRecord.notes !== "" ? deployRecord.notes : "No notes yet"}`,
                        state: {notes: deployRecord.notes}
                    }}>
                        <button className="btn btn-primary">
                            <img src={noteIco} alt="note" className="img in-row-ico"/>
                        </button>
                    </Link>
                </td>
                <td id="buttons">
                    <Link to={{
                        pathname: `/updateDeployRecord/${deployRecord.id}`,
                        state: {deployRecord: deployRecord}
                    }}>
                        <button className="btn btn-primary update">
                            <img src={editIco} alt="edit" className="img in-row-ico"/>
                        </button>
                    </Link>
                    <button className="btn btn-danger delete">
                        <img src={delIco} alt="delete" className="img in-row-ico"/>
                    </button>
                </td>
            </tr>
        );
    }
}

export default DeployRecordItem;