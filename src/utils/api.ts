import axios, { AxiosResponse } from "axios";
import { TStateFormData } from "storage/form/types/formDataReducerTypes";
export const api = axios.create();
api.defaults.baseURL = "https://web-api-example.com/";

type TFormResponse = {
    response: string
}

export class FormDataApi {

    fetchSendForm(data: TStateFormData): Promise<AxiosResponse<TFormResponse>> {
        return api.post("/form", data);
    }
}

export const apiForm = new FormDataApi();