import axios from 'axios';
import {GET_ERRORS, GET_DEPLOY_RECORDS, GET_DEPLOY_RECORD} from "./types";
import {useParams} from "react-router-dom";
import {useEffect} from "react";


export const createDeployRecord = (deployRecordData, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/deployment-record", deployRecordData);
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
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

export const getDeployRecord = (id) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/deployment-record/${id}`);
        dispatch({
            type: GET_DEPLOY_RECORD,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

}

// export const updateDeployRecord = (deployRecordData, history) => async dispatch => {
//     try {
//         const res = await axios.put("http://localhost:8080/api/deployment-record", deployRecordData);
//         history.push("/dashboard");
//     } catch (err) {
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data
//         });
//     }
// }

