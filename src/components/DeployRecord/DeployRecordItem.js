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
            ${date.getHours()}:${date.getMinutes() < 10 ? ("0" + (date.getMinutes() + 1)) : date.getMinutes() + 1}`;
        }

        return (
            <tr>
                <td>{getDateStringFormatted(deployRecord.deploymentDate).split(" ")[0]}</td>
                <td>{deployRecord.project}</td>
                <td>{deployRecord.environment}</td>
                <td>{deployRecord.coreBranch}</td>
                <td>{deployRecord.coreCommit}</td>
                <td>{deployRecord.ilBranch}</td>
                <td>{deployRecord.ilCommit}</td>
                <td>{(deployRecord.createdBy !== null ? deployRecord.createdBy + " / " : "") + getDateStringFormatted(deployRecord.createdDate)}</td>
                <td>{(deployRecord.updatedBy !== null ? deployRecord.updatedBy + " / " : "") + getDateStringFormatted(deployRecord.updatedDate)}</td>
                <td>
                    <button className="btn btn-primary">
                        <img src={noteIco} alt="note" className="img in-row-ico"/>
                    </button>
                </td>
                <td>
                    <Link to={`/updateDeployRecord/${deployRecord.id}`}>
                        <button className="btn btn-primary">
                            <img src={editIco} alt="edit" className="img in-row-ico"/>
                        </button>
                    </Link>
                    <button className="btn btn-danger">
                        <img src={delIco} alt="delete" className="img in-row-ico"/>
                    </button>
                </td>
            </tr>
        );
    }
}

export default DeployRecordItem;