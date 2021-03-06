import styled from 'styled-components'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Tilt from './animation/Tilt'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    min-height: ${({theme}) => theme.spacing[48]};
    & svg {
        opacity: 0;
        position: absolute;
        top: 0;
        left: calc(50% - ${({theme}) => theme.spacing[36]});
        width: ${({theme}) => theme.spacing[72]};
        margin: -40px;
        transform: scale(0);
        transform-origin: center
    }
    & p {
        width: 80%;
        margin: 0 auto;
    }
`
const SvgTilt = styled(Tilt)`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
`
const PageTitle = styled.h1`
    font-size: ${({theme}) => theme.fontSize.xl3[0]};
    line-height: ${({theme}) => theme.fontSize.xl3[1].lineHeight};
    font-weight: 800;
    color: ${({theme}) => theme.text.secondary};
    margin-bottom: .5rem;
`

type Props = {
    title: string,
    description: string
}

const PageHeader = ({title, description}: Props) => {
    const tl = gsap.timeline({ paused: true, defaults: { transformOrigin: 'center' } });
    const svgRef = useRef(null);

    useEffect(() => {
        tl.to(svgRef.current, { duration: 0.3, autoAlpha: 0.25, scale: 1, ease: 'back.out' })
          .play()
    }, []);

    return (
        <Wrapper>
            <SvgTilt threshold={18}>
                <svg ref={svgRef} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <path id="blob" d="M380.5,315.5Q326,381,248.5,384Q171,387,120,318.5Q69,250,124,188.5Q179,127,272,89Q365,51,400,150.5Q435,250,380.5,315.5Z" fill="#d97706"></path>
                </svg>
            </SvgTilt>
            <Tilt threshold={25}>
                <PageTitle>{title}</PageTitle>
                <p className="text-md text-light">{description}</p>
            </Tilt>
        </Wrapper>
    )
}

export default PageHeader