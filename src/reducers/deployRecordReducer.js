import {GET_DEPLOY_RECORD, GET_DEPLOY_RECORDS, DELETE_DEPLOY_RECORD} from "../actions/types";
import deployRecordItem from "../components/DeployRecord/DeployRecordItem";

const initialState = {
    deployRecords: [],
    deployRecord: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_DEPLOY_RECORDS:
            return {
                ...state,
                deployRecords: action.payload,
            };
        case GET_DEPLOY_RECORD:
            return {
                ...state,
                deployRecord: action.payload,
            };

        case DELETE_DEPLOY_RECORD:
            return {
                ...state,
                deployRecords: state.deployRecords.filter(deployRecordItem => deployRecordItem.id !== action.payload),
            };
        default:
            return state;
    }
}