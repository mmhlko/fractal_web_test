import { TFormData } from "types/formDataTypes";
import { RESET_FORM_DATA, SET_FORM_DATA, SET_FORM_STEP } from "../formDataActionTypeNames";

export type TFormDataActions =  TFormDataAction | TFormStepAction | TResetFormDataAction;

export type TFormDataAction = {
    type: typeof SET_FORM_DATA,
    payload: TFormData
}

export type TFormStepAction = {
    type: typeof SET_FORM_STEP,
    payload: number
}
export type TResetFormDataAction = {
    type: typeof RESET_FORM_DATA,
}