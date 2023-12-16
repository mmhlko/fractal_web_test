import s from "./styles.module.scss";
import { FormInput } from "components/form-input/FormInput";
import { Button } from "ui/button/Button";
import { TFormData } from "types/formDataTypes";
import { useForm } from "react-hook-form";
import { Form } from "components/form/Form";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";
import { formDataConstants } from "utils/formDataConstants";
import { useDispatch } from "react-redux";
import { setFormDataAction, setFormStepAction } from "storage/form/formDataActions";
import { FocusEvent, FormEvent, KeyboardEvent } from "react";
import { useAppSelector } from "storage/hookTypes";
import { formDataSelector } from "storage/form/formDataSelector";
import FolderSvg from "./assets/folder.svg"

const CANDIDATE_NAME = "Максим Михайленко"
const candidateLinks = [
    { label: "Telegram", value: "https://t.me/maxsvk" },
    { label: "GitHub", value: "https://github.com/mmhlko" },
    { label: "Резюме", value: "https://hh.ru/resume/c09002fdff0c0cd58c0039ed1f49635875376f" },
]

export const MainInfo = () => {
    const dispatch = useDispatch();
    const { data } = useAppSelector(formDataSelector)
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>({ mode: 'onBlur' });
    const navigate = useNavigate();

    const onSubmit = () => {
        dispatch(setFormStepAction(1))
        navigate(RoutePath.steps)
    }
    const telRegister = register(formDataConstants.tel.name, formDataConstants.tel.register)
    const emailRegister = register(formDataConstants.email.name, formDataConstants.email.register)

    const onTelInputFoced = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        if (!/^\+\d*$/.test(e.currentTarget.value) && e.currentTarget.value.length <= 4) {
            e.currentTarget.value = '+7 (';
        }           
    }
    const onKeyTelDown = (e: KeyboardEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const curLen = e.currentTarget.value.length
        const isDelOrBackSpace = e.key === "Backspace" || e.key === "Delete"
        if (!/\d/.test(e.key) && !isDelOrBackSpace) {
            e.preventDefault();
        }            
        if (isDelOrBackSpace) {
            return
        }
        if (e.currentTarget.value.length === 18) {
            e.preventDefault()
        }
        if (curLen < 2) {
            e.currentTarget.value = "+7 ("
        }
        if (curLen === 2) {
            e.currentTarget.value = e.currentTarget.value + "(";
        }
        if (curLen === 7) {
            e.currentTarget.value = e.currentTarget.value + ") ";
        }
        if (curLen === 12) {
            e.currentTarget.value = e.currentTarget.value + "-";
        }
        if (curLen === 15) {
            e.currentTarget.value = e.currentTarget.value + "-";
        }
    }
    const handleFormItemChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        dispatch(setFormDataAction({ [e.currentTarget.name]: e.currentTarget.value }))
    }

    return (
        <section className={s.wrapper}>
            <div className={s.header}>
                <div className={s.avatar}>{CANDIDATE_NAME.split(" ").map((n) => n[0]).join("")}</div>
                <div className={s.info}>
                    <p className={s.name}>{CANDIDATE_NAME}</p>
                    <ul className={s.links}>
                        {candidateLinks.map((item, index) => (
                            <li key={index} className={s.link}>
                                <FolderSvg />
                                <a className={s.link_item} href={item.value}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Form handleForm={handleSubmit(onSubmit)}>
                <FormInput {...telRegister}
                    label="Номер телефона"
                    type="tel"
                    placeholder="+7 999 999-99-99"
                    validationError={errors?.tel?.message}
                    value={data.tel}
                    onChange={handleFormItemChange}
                    onFocus={onTelInputFoced}
                    onKeyDown={onKeyTelDown}
                    extraClass={s.mainInfo_input}
                    
                />
                <FormInput {...emailRegister}
                    label="Email"
                    type="email"
                    placeholder="webstudio.fractal@example.com"
                    validationError={errors?.email?.message}
                    value={data.email}
                    onChange={handleFormItemChange}
                    extraClass={s.mainInfo_input}
                />
                <Button type="submit">Начать</Button>
            </Form>
        </section>
    )
}