import {GET_DEPLOY_RECORDS} from "../actions/types";

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
        default:
            return state;
    }
}