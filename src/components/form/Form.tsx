import { ReactNode } from 'react';
import s from './styles.module.scss'
import classNames from 'classnames';

interface IFormProps {
    handleForm: (data:any) => void, 
    children?: ReactNode, 
    align?: 'left' | 'center' | 'rigth'
}


export const Form = ({handleForm, children, align='left'}: IFormProps) => {
   
    return ( 
        <form onSubmit={handleForm} className={classNames(s.form, {[s[align]]: !!align}) }>
            {children}
        </form>
     );
}