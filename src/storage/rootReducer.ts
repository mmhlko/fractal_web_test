import { combineReducers } from "redux";
import { formDataReducer } from "./form/formDataReducer";

export const rootReducer = combineReducers({
    formData: formDataReducer,
})