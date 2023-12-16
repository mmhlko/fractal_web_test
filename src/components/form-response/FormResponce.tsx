import s from "./styles.module.scss";
import successIcon from "./assets/Circle Check Filled.png"
import errorIcon from "./assets/Circle Cancel Filled.png"
import { Button } from "ui/button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { resetFormDataAction } from "storage/form/formDataActions";

type TFormResponceProps = {
    success: boolean
    onClose: () => void
}

export const FormResponce = ({success, onClose}: TFormResponceProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = () => {
        dispatch(resetFormDataAction())
        navigate(RoutePath.main)
    }

    const handleButtonClick = () => {
        success
            ? onFinish()
            : onClose()
    }
    return (
        <div className={classNames(s.wrapper, {[s.wrapper__errorCase]: !success})}>
            <h2 className={s.title}>{success ? "Форма успешно отправлена" : "Ошибка"}</h2>
            <img className={s.responseImage} src={success ? successIcon : errorIcon} alt="responseIcon" />
            <Button action={handleButtonClick}>{success ? "На главную" : "Закрыть"}</Button>
        </div>
    )
}