import classNames from "classnames";
import s from "./styles.module.scss";
import { useAppSelector } from "storage/hookTypes";
import { formDataSelector } from "storage/form/formDataSelector";

export const ProgressBar = () => {

    const { currentStep } = useAppSelector(formDataSelector);
    const steps = [1, 2, 3]

    return (
        <div className={s.wrapper}>
            <div className={s.scale}>
                <div className={classNames({ [s.scale_50]: currentStep > 1 }, { [s.scale_100]: currentStep > 2 })}></div>
            </div>
            {steps.map(step => (
                <span
                    className={classNames(
                        s.step_circle,
                        s[`step_circle_${step}`],
                        { [s.step_circle_active]: currentStep === step },
                        { [s.step_circle_done]: currentStep > step })
                    }
                    key={step}
                >
                    <span className={classNames(
                        s.step_number,
                        { [s.step_number_done]: currentStep >= step },
                        { [s.step_number_current]: currentStep === step })}
                    >
                        {step}
                    </span>
                </span>
            ))}
        </div>
    )
}