import axios from 'axios';
import {GET_ERRORS, GET_DEPLOY_RECORDS, UPDATE_DEPLOY_RECORD} from "./types";


export const createDeployRecord = (deployRecordData, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/deployment-record", deployRecordData);
        history.push("/dashboard");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const getDeployRecords = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8080/api/deployment-record/all");
        dispatch({
            type: GET_DEPLOY_RECORDS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const updateDeployRecord = (deployRecordData, history) => async dispatch => {
    try {
        const res = await axios.put("http://localhost:8080/api/deployment-record", deployRecordData);
        history.push("/dashboard");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

