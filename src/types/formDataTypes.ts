export type TMainInfo = {
    tel: string,
    email: string
}
export type TFormData = {
    [name: string | number]: string | number | number[] | string[]
}
export type TAdvantageFormList = {
    advantage: string
}[]
export type TFormAdvantages = {
    advantages: TAdvantageFormList    
}

export type TSelectOptions = {value: string, label: string}[]