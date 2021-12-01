import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Tilt from '@/components/base/animation/Tilt'

import { Wrapper, SvgTilt, PageTitle } from './partials/styles'

type Props = {
    title: string,
    description?: string
};

const PageHeader = ({title, description}: Props) => {
    const tl = gsap.timeline({ paused: true, defaults: { transformOrigin: 'center', duration: 0.2 } });
    let revealRef = useRef([]);

    useEffect(() => {
        tl.set(revealRef.current, { scale: 0 })
          .to(revealRef.current, { scale: 1, stagger: 0.2, ease: 'back.out' })
          .play()
        return () => tl.kill();
    }, []);

    return (
        <Wrapper>
            <SvgTilt active={true} threshold={10}>
                <svg ref={el => revealRef.current[0] = el} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.5,315.5Q326,381,248.5,384Q171,387,120,318.5Q69,250,124,188.5Q179,127,272,89Q365,51,400,150.5Q435,250,380.5,315.5Z" fill="#0d9488"></path>
                </svg>
            </SvgTilt>
            <Tilt active={true} threshold={20}>
                <PageTitle ref={el => revealRef.current[1] = el} >{title}</PageTitle>
                <p ref={el => revealRef.current[2] = el} className="text-md text-secondary">{description}</p>
            </Tilt>
        </Wrapper>
    )
}

export default PageHeader