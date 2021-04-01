import styled from 'styled-components'
import PlainLayout from '../components/layouts/Plain'
import Nav from '../components/app/Nav'
import Footer from '../components/app/Footer'
import Link from 'next/link'
import ProfileGallery from '../components/app/ProfileGallery'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const Wrapper = styled.div`
    position: relative;
    max-height: calc(100vh - ( 2 * ${({theme}) => theme.spacing[20]}));
    height: calc(100vh - ( 2 * ${({theme}) => theme.spacing[20]}));
    display: flex;
    align-items: center;
`
const Hero = styled.div`
    flex-shrink: 0;
    margin: 2rem 4rem;
    overflow: hidden;
    & h1 {
        font-size: ${({theme}) => theme.fontSize.xl7[0]};
        line-height: ${({theme}) => theme.fontSize.xl7[1].lineHeight};
        margin-bottom: 1rem;
        font-weight: 200;
        overflow: hidden;
    }
    & .txtReveal {
        opacity: 0;
    }
    & > span {
        color: ${({theme}) => theme.text.secondary};
    }
`

const About = () => {
    const tl = gsap.timeline({ paused: true, defaults: { duration: 1, delay: 0.25, ease: 'power4.out' } });
    let txtRef = useRef([]);
    useEffect(() => {
        tl.set(txtRef.current, { autoAlpha: 0, xPercent: -100 })
          .to(txtRef.current, { autoAlpha: 1, duration: 0.2 })
          .to(txtRef.current, { xPercent: 0, stagger: 0.5 }).play();
        return () => tl.kill();
    }, [])
    return (
        <>
            <Nav mode="none" navigation="none" lists={
                <button className="ml pl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg></button>
            } />
            <div className="w-full">
                <Wrapper>
                    <Hero>
                        <span ref={el => txtRef.current[2] = el} className="mb block txtReveal">Hello, I'm <span className="text-primary">Srikar</span></span>
                        <h1>
                            <span ref={el => txtRef.current[0] = el} className="block txtReveal">Web</span>
                            <span ref={el => txtRef.current[1] = el} className="block txtReveal">Developer</span>
                        </h1>
                        <Link href="/about">
                        <a className="text-sm flex items-center">
                            <span>: : : : : :&nbsp;&nbsp;</span>
                            <span>More about me</span>
                        </a></Link>
                        <Link href="/portfolio-simple"><a className="text-sm text-light">View simplified version</a></Link>
                    </Hero>
                    <ProfileGallery />
                </Wrapper>
            </div>
            <Footer />
        </>
    )
}

About.Layout = PlainLayout;

export default About


