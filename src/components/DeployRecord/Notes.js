import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Notes extends Component {


    render() {

        return (
            <div>
                <div className="container">
                    <h1 className="display-6 text-right">Notes:</h1>
                    <hr/>
                    <br/>
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8">
                            <div className="form-group">
                                    <p style={{whiteSpace : 'pre-line'}}>{this.props.match.params.notes}</p>
                                <br/>
                                <Link to="/dashboard" className="btn btn-primary">Back</Link>
                            </div>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Notes;