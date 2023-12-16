import { FormInput } from "components/form-input/FormInput";
import { FormEvent, memo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { setFormDataAction } from "storage/form/formDataActions";
import { formDataSelector } from "storage/form/formDataSelector";
import { useAppSelector } from "storage/hookTypes";
import { formDataConstants } from "utils/formDataConstants";
import { Form } from "components/form/Form";
import { FormButtons } from "components/form-buttons/FormButtons";

type TStepThreeFormProps = {
    onSubmitForm: () => void
    onClickBack: () => void
}

type TFormTextarea = {
    about: string
}

export const StepThreeForm = memo(({onSubmitForm, onClickBack}: TStepThreeFormProps) => {

    const { data } = useAppSelector(formDataSelector)
    const dispatch = useDispatch();

    const { handleSubmit, register, formState: { errors } } = useForm<TFormTextarea>({
        mode: 'onBlur',
        defaultValues: {
            about: data.about
        }
    });   
    
    const handleFormItemChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        dispatch(setFormDataAction({ [e.currentTarget.name]: e.currentTarget.value }))
    }

    const aboutRegister = register("about", formDataConstants.about.register)

    return (
        <Form handleForm={handleSubmit(onSubmitForm)}>
            <FormInput  {...aboutRegister}
                validationError={errors?.about?.message}
                label="О себе"
                autoComplete="off"
                typeTag="textarea"
                onChange={handleFormItemChange}
                textLength={data.about.split(" ").join("").length}            
            />
            <FormButtons handleClickBack={onClickBack}/>
        </Form>
    )
})