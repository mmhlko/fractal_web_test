import s from './styles.module.scss';
import classNames from 'classnames';
import { createPortal } from 'react-dom'
import { useRef, ReactNode, MouseEvent } from 'react'

interface IModalProps {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Modal = ({children, isOpen, onClose}: IModalProps) => {
    const refModal = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()
    
    const renderContent = () => {
        return ( 
            <div ref={refModal} className={classNames(s.modal, {[s.modal_active]: isOpen})} onMouseDown={onClose}>
                <div className={classNames(s.modal__content, {[s.modal__content_active]: isOpen})} onMouseDown={handleMouseDown}>
                    {children}
                </div>
            </div> 
        );       
    }

    return createPortal(renderContent(), document.getElementById('modal-root') as HTMLDivElement)
}

export default Modal;