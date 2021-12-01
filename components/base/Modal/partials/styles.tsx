import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 9999;

`
export const ModalBackDrop = styled.button.attrs({
    tabIndex: '-1'
})`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background-color: ${({theme}) => theme.mode == 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)' };
    cursor: default;
    outline: 0;
`