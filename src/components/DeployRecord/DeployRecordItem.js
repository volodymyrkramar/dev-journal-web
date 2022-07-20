import React, {Component} from 'react';

class DeployRecordItem extends Component {
    render() {
        const {deployRecord} = this.props;

        function getDateStringFormatted(inDate) {
            if (inDate === null) {
                return "";
            }
            let date = new Date(inDate);
            return `${date.getDate()}-${date.getMonth() < 10 ? ("0" + (date.getMonth()  + 1)) : date.getMonth()  + 1}-${date.getFullYear().toString().slice(2)} 
            ${date.getHours()}:${date.getMinutes()< 10 ? ("0" + (date.getMinutes()  + 1)) : date.getMinutes()  + 1}`;
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
                <td>{(deployRecord.createdBy !== null ? deployRecord.createdBy + " / ": "") + getDateStringFormatted(deployRecord.createdDate)}</td>
                <td>{(deployRecord.updatedBy !== null ? deployRecord.updatedBy + " / ": "") + getDateStringFormatted(deployRecord.updatedDate)}</td>
                <td>
                    <button className="btn btn-primary">
                        <i className="fas">
                            <img src="/src/media/note.svg" alt="note"/>
                        </i>
                    </button>
                </td>
                <td>
                    <button className="btn btn-primary">
                        <i className="fas fa-edit">
                            <img src={"src/media/edit.svg.png"} alt={"edit"}/>
                        </i>
                    </button>
                    {/*<button className="btn btn-danger">*/}

                    {/*        <DeleteOutlineOutlinedIcon/>*/}
                    {/*</button>*/}
                </td>
            </tr>
        );
    }
}

export default DeployRecordItem;