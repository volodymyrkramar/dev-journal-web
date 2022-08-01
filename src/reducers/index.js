import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import deployRecordReducer from "./deployRecordReducer";
import securityReduser from "./securityReduser";

export default combineReducers({
    errors: errorReducer,
    deployRecord: deployRecordReducer,
    security: securityReduser
});