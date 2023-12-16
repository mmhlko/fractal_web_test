import { StepTwoForm } from "components/step-two-form/StepTwoForm";
import s from "./styles.module.scss";
import { memo, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFormStepAction } from "storage/form/formDataActions";
import { formDataSelector } from "storage/form/formDataSelector";
import { useAppSelector } from "storage/hookTypes";
import { RoutePath } from "pages/routeConfig";
import { StepOneForm } from "components/step-one-form/StepOneForm";
import { StepThreeForm } from "components/step-three-form/StepThreeForm";
import { STEPS_COUNT } from "utils/formDataConstants";
import Modal from "modules/modal/Modal";
import { FormResponce } from "components/form-response/FormResponce";
import { ProgressBar } from "components/progress-bar/ProgressBar";
import { Spinner } from "components/spinner/Spinner";

export const FormSteps = memo(() => {

    const { currentStep, data: formData } = useAppSelector(formDataSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [response, setResponse] = useState<"OK" | "Error">("OK");
    const [loading, setLoading] = useState(false)

    const apiSendForm = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setResponse((Math.random() > 0.5) ? "OK" : "Error")
            setIsModalOpen(true)
            console.log(formData) //вывод формы в консоль
        }, 1000);
        //Promise находится в utils/api
    }

    const onSubmit = () => {
        currentStep === 3 && apiSendForm()
        currentStep < STEPS_COUNT && dispatch(setFormStepAction(currentStep + 1))
    }

    const handleClickBack = () => {
        currentStep !== 1 ? dispatch(setFormStepAction(currentStep - 1)) : navigate(RoutePath.main)
    }

    const renderFormByStep = () => {
        switch (currentStep) {
            case 1:
                return <StepOneForm onSubmitForm={onSubmit} onClickBack={handleClickBack} />
            case 2:
                return <StepTwoForm onSubmitForm={onSubmit} onClickBack={handleClickBack} />
            case 3:
                return <StepThreeForm onSubmitForm={onSubmit} onClickBack={handleClickBack} />
            default:
                break;
        }
    }

    const onCloseModal = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        !currentStep && navigate(RoutePath.main)
    }, [])

    return (
        <section className={s.wrapper}>
            <ProgressBar />
            {renderFormByStep()}
            <Modal isOpen={isModalOpen} onClose={onCloseModal}>
                <FormResponce success={response === "OK"} onClose={onCloseModal} />
            </Modal>
            {loading && <Spinner />}
        </section>
    )
})