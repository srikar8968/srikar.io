import Tilt from '@/components/base/animation/Tilt'
import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    overflow: hidden;
    min-height: ${({theme}) => theme.spacing[48]};
    & svg {
        opacity: 0.4;
        position: absolute;
        top: calc(50% - ${({theme}) => theme.spacing[24]});
        left: calc(50% - ${({theme}) => theme.spacing[36]});
        width: ${({theme}) => theme.spacing[72]};
        margin: -40px;
        transform: scale(0);
        transform-origin: center
    }
    & p {
        transform: scale(0);
        width: 80%;
        margin: 0 auto;
    }
`
export const SvgTilt = styled(Tilt)`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
export const PageTitle = styled.h1`
    font-size: ${({theme}) => theme.fontSize.xl3[0]};
    line-height: ${({theme}) => theme.fontSize.xl3[1].lineHeight};
    font-weight: 800;
    color: ${({theme}) => theme.text.default};
    opacity: 0.8;
    margin-bottom: .5rem;
    transform: scale(0);
`