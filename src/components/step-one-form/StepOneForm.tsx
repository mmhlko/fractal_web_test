import { FormButtons } from "components/form-buttons/FormButtons";
import { FormInput } from "components/form-input/FormInput";
import { Form } from "components/form/Form";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormDataAction } from "storage/form/formDataActions";
import { formDataSelector } from "storage/form/formDataSelector";
import { useAppSelector } from "storage/hookTypes";
import { TFormData } from "types/formDataTypes";
import { formDataConstants } from "utils/formDataConstants";

type TStepOneProps = {
    onSubmitForm: () => void
    onClickBack: () => void
}

export const StepOneForm = ({onSubmitForm, onClickBack}:TStepOneProps) => {
    const { data } = useAppSelector(formDataSelector);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>({
        mode: 'onBlur', 
    });
    
    const handleFormItemChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        dispatch(setFormDataAction({ [e.currentTarget.name]: e.currentTarget.value }))
    }

    const nicknameRegister = register(formDataConstants.nickName.name, formDataConstants.nickName.register)
    const firstNameRegister = register(formDataConstants.firstName.name, formDataConstants.firstName.register)
    const lastNameRegister = register(formDataConstants.lastName.name, formDataConstants.lastName.register)
    const sexRegister = register(formDataConstants.sex.name, formDataConstants.sex.register)

    return (
        <Form handleForm={handleSubmit(onSubmitForm)}>
            <FormInput {...nicknameRegister}
                value={data?.nickName}
                label="Никнейм"
                type="text"
                placeholder="Введите никнейм"
                validationError={errors?.nickName?.message}
                onChange={handleFormItemChange}
            />
            <FormInput {...firstNameRegister}
                value={data?.firstName}
                label="Имя"
                type="text"
                placeholder="Введите имя"
                validationError={errors?.firstName?.message}
                onChange={handleFormItemChange}
            />
            <FormInput {...lastNameRegister}
                value={data?.lastName}
                label="Фамилия"
                type="text"
                placeholder="Введите фамилию"
                validationError={errors?.lastName?.message}
                onChange={handleFormItemChange} />
            <FormInput {...sexRegister}
                label="Пол"
                typeTag="select"
                value={data?.sex}
                options={formDataConstants.sex.options}
                validationError={errors?.sex?.message}
                onChange={handleFormItemChange}
            />
            <FormButtons handleClickBack={onClickBack}/>
        </Form>
    )
}