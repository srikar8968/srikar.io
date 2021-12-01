import styled from 'styled-components'

export const Wrapper = styled.footer`
    width: 100%;
    background-color: ${({theme}) => theme.bg.default};
    // border-top: 1px solid ${({theme}) => theme.border.secondary};
    z-index: 99;
    & .container {
        height: ${({theme}) => theme.spacing[20]};
        justify-content: space-between;
    }
`