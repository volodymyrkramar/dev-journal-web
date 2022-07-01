import React from 'react';
import {Link} from 'react-router-dom';

const CreateDeployRecordButton = () => {
    return (
        <React.Fragment>
            <Link to="/addDeployRecord" className="btn btn-lg btn-info">
                Create deploy record
            </Link>
        </React.Fragment>
    );
};

export default CreateDeployRecordButton;
