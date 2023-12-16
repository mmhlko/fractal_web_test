import { ReactNode } from "react";
import s from "./styles.module.scss"
import classNames from "classnames";

export type TButtonProps = {
    children: ReactNode,
    type?: "button" | "submit",
    action?: () => void,
    secondary?: boolean,
}

export const Button = ({ children, action, type="button", secondary }: TButtonProps) => {

    return (
        <button
            onClick={action}
            className={classNames(s.button, {[s.button_secondary]: secondary})}
            type={type}
        >
            {children}
        </button>
    )
}