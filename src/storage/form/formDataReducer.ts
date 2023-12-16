import { SET_FORM_DATA, SET_FORM_STEP } from "./formDataActionTypeNames";
import { TFormDataActions } from "./types/formDataActionTypes";
import { TFormDataState, TStateFormData } from "./types/formDataReducerTypes";

const initialState: TFormDataState = {
    data: {
        tel: "",
        email: "",
        nickName: "",
        firstName: "",
        lastName: "",
        sex: "",
        advantages: [""],
        checkBox: [],
        radio: "",
        about: ""
    },
    currentStep: null,
};

export function formDataReducer(state = initialState, action: TFormDataActions) {

    switch (action.type) {
        case SET_FORM_STEP:
            return { ...state, currentStep: action.payload }
        case SET_FORM_DATA:
            return { ...state, data: {...state.data, ...action.payload} as TStateFormData}
        default:
            return state
    }
}