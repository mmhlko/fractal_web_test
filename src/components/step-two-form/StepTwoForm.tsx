import { FormInput } from "components/form-input/FormInput";
import s from "./styles.module.scss"
import { memo, useEffect } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { useDispatch } from "react-redux"
import { setFormDataAction } from "storage/form/formDataActions";
import { formDataSelector } from "storage/form/formDataSelector";
import { useAppSelector } from "storage/hookTypes";
import { Button } from "ui/button/Button"
import { checkboxRadioGroupData, formDataConstants } from "utils/formDataConstants";
import { Form } from "components/form/Form";
import { FormButtons } from "components/form-buttons/FormButtons";
import { convertAdvantageList, parseAdvantageList } from "utils/formDataFn";
import Deleteicon from "./assets/delete-icon.svg"

type TStepTwoFormProps = {
    onSubmitForm: () => void
    onClickBack: () => void
}

export const StepTwoForm = memo(({ onSubmitForm, onClickBack }: TStepTwoFormProps) => {

    const { data } = useAppSelector(formDataSelector)
    const currentAdvantages = data?.advantages
    const dispatch = useDispatch();

    const { control, handleSubmit, register, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            advantages: parseAdvantageList(currentAdvantages),
            checkbox: data.checkBox.map(num => num.toString()),
            radio: data.radio.toString()
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "advantages",
        rules: {
            required: "required"
        }
    });
    const watchAdvantages = useWatch({
        control,
        name: "advantages",
    })
    const watchCheckbox = useWatch({
        control,
        name: "checkbox",
    })
    const watchRadio = useWatch({
        control,
        name: "radio",
    })
    const handleClickAdd = () => {
        append({ advantage: "" })
    }
    const handleDeleteAdvantages = (index: number) => {
        currentAdvantages.length > 1 && remove(index)
    }

    useEffect(() => {
        dispatch(setFormDataAction({ advantages: convertAdvantageList(watchAdvantages) }))
    }, [watchAdvantages])

    useEffect(() => {
        dispatch(setFormDataAction({ checkBox: watchCheckbox.map(str => +str) }))
    }, [watchCheckbox])
    useEffect(() => {
        dispatch(setFormDataAction({ radio: +watchRadio }))
    }, [watchRadio])

    return (
        <Form handleForm={handleSubmit(onSubmitForm)}>
            <div className={s.input_group}>
                <p className={s.input_group__title}>Преимущества</p>
                {fields.map((field, index) => (
                    <div className={s.input_wrapper} key={field.id}>
                        <FormInput
                            {...register(`advantages.${index}.advantage`, formDataConstants.advantages.register)}
                            type="text"
                            validationError={errors.advantages && errors?.advantages[index]?.advantage?.message}
                            defaultValue={field.advantage}
                            autoComplete="off"
                            placeholder="Введите преимущество"
                        />
                        <Deleteicon className={s.deleteIcon} id={"button-remove-" + index} onClick={() => handleDeleteAdvantages(index)} />
                    </div>
                ))}
                <Button action={handleClickAdd} secondary>+</Button>
            </div>
            <div className={s.input_group}>
                <p className={s.input_group__title}>Checkbox группа</p>
                {errors?.checkbox && <p className='errorMessage'>{errors.checkbox.message}</p>}
                {checkboxRadioGroupData.map((item, index) => (
                    <FormInput {...register("checkbox", formDataConstants.checkbox.register)}
                        type="checkbox"
                        id={`field-checkbox-group-option-${index + 1}`}
                        name="checkbox"
                        value={item.value}
                        label={item.label.toString()}
                        key={index}
                    />
                ))}
            </div>
            <div className={s.input_group}>
                <p className={s.input_group__title}>Radio группа</p>
                {errors?.checkbox && <p className='errorMessage'>{errors.checkbox.message}</p>}
                {checkboxRadioGroupData.map((item, index) => (
                    <FormInput {...register("radio", formDataConstants.radio.register)}
                        type="radio"
                        id={`field-radio-group-option-${index + 1}`}
                        name="radio"
                        value={item.value}
                        label={item.label.toString()}
                        key={index}
                    />
                ))}
            </div>

            <FormButtons handleClickBack={onClickBack} />
        </Form>
    )
})