import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import deployRecordReducer from "./deployRecordReducer";

export default combineReducers({
    errors: errorReducer,
    deployRecord: deployRecordReducer
});