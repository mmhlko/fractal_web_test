import { TAdvantageFormList } from "types/formDataTypes"

export const convertAdvantageList = (currentList: TAdvantageFormList) => {
    const result = currentList.map(item => item.advantage)
    return result
}

export const parseAdvantageList = (array: string[]) => {

    const result = array.map(string => ({ advantage: string }))
    return result
}