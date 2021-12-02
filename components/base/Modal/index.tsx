import { useEffect } from 'react'
import { ModalWrapper, ModalBackDrop } from './partials/styles'

type Props = {
    show: boolean
}

const Modal = ({show}: Props) => {
    useEffect(() => {
        const r = window.innerWidth;
    }, [show]);
    return (
        <ModalWrapper>
            <ModalBackDrop />
        </ModalWrapper>
    )
}

export default Modal