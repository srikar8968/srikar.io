import { Transition, TransitionGroup } from 'react-transition-group'
import { gsap } from 'gsap'
import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    opacity: 0.25;
    filter: blur(3px)
`

const PageTransition = ({show, children}) => {
    const tl = gsap.timeline({ paused: true, defaults: { transformOrigin: 'center', duration: .5, ease: 'power1.out' } });
    const [prevNode, setPrevNode] = useState(null);
    return (
        // <TransitionGroup>
            <Transition
            key={show}
            unmountOnExit
            in={show}
            appear={show}
            onEnter={node => {
                tl.set(node, {
                    filter: 'blur(3px)',
                    autoAlpha: 0.25
                })
            }}
            addEndListener={(node, done) => {
                tl.to(node, {
                    filter: 'blur(0px)',
                    autoAlpha: show ? 1 : 0.25,
                    onComplete: done
                }).play()
            }}>
                <Wrapper className="w-full">{children}</Wrapper>
            </Transition>
        // </TransitionGroup>
    )
}

export default PageTransition