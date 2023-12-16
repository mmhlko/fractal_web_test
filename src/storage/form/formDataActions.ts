import { TFormData } from "types/formDataTypes"
import { SET_FORM_DATA, SET_FORM_STEP } from "./formDataActionTypeNames"
import { TFormDataActions } from "./types/formDataActionTypes"

export const setFormStepAction = (data: number): TFormDataActions => {
    return {
        type: SET_FORM_STEP,
        payload: data,
    }
}

export const setFormDataAction = (data: TFormData): TFormDataActions => {
    return {
        type: SET_FORM_DATA,
        payload: data,
    }
}