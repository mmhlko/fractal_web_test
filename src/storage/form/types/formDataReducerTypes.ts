export type TStateFormData = {
    tel: string
    email: string
    nickName: string
    firstName: string
    lastName: string
    sex: string
    advantages: string[],
    checkBox: number[]
    radio: string
    about: string
}

export type TFormDataState = {
    data: TStateFormData,
    currentStep: number | null,
}