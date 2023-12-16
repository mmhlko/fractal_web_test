import { Button } from "ui/button/Button";
import s from "./styles.module.scss";
import { useAppSelector } from "storage/hookTypes";
import { formDataSelector } from "storage/form/formDataSelector";
import { STEPS_COUNT } from "utils/formDataConstants";
import { memo } from "react";

type TFormButtonsProps = {
    handleClickBack?: () => void
}

export const FormButtons = memo(({handleClickBack}: TFormButtonsProps) => {
    const { currentStep } = useAppSelector(formDataSelector)

    return (
        <div className={s.buttons}>
            <Button action={handleClickBack} secondary>Назад</Button>
            <Button type="submit">{currentStep === STEPS_COUNT ? "Отправить" : "Далее" }</Button>
        </div>
    )
})