import styled from 'styled-components'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import useDarkMode from 'use-dark-mode';
import defaultStyles from '../../styles/defaultStyles'

import ToggleTheme from './ToggleTheme'

const NavBar = styled.header`
    position: ${({fixed}) => fixed ? 'fixed' : 'relative'};
    top: 0;
    width: 100%;
    height: ${({theme}) => theme.spacing[20]};
    background-image: ${({fixed}) => fixed ? `linear-gradient(to bottom, ${({theme}) => theme.bg.default} 10px, transparent 85px)` : `none`};
    z-index: 99;
    & .container {
        height: ${({theme}) => theme.spacing[20]};
    }
    & .signature-container {
        display: block;
        height: 24px;
        width: 60px;
        flex-shrink: 0;
    }
`
const LogoWrapper = styled.div`
    position: absolute;
    left: 0;
    line-height: 0;
    opacity: 0;
    transform: rotateX(90deg)
`

const Nav = ({fixed, navigation, lists, ...props}) => {
    const signatureRef = useRef(null);
    const signatureInvRef = useRef(null);
    const navRef = useRef(null);
    const darkMode = useDarkMode(false);
    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });
    useEffect(() => {
        if(fixed) {tl.set(navRef.current, { height: '0rem', duration: 0, backgroundImage: 'none' })}
        if(darkMode.value) {
            tl.to(signatureRef.current, { rotateX: 90, autoAlpha: 0 })
              .to(signatureInvRef.current, { rotateX: 0, autoAlpha: 1 });
        } else {
            tl.to(signatureInvRef.current, { rotateX: 90, autoAlpha: 0 })
              .to(signatureRef.current, { rotateX: 0, autoAlpha: 1 });
        }
        if(fixed) {
            tl.to(navRef.current, {backgroundImage: `linear-gradient(to bottom, #${darkMode.value? '1c1917' : 'fff'} 10px, transparent 85px)`})
              .to(navRef.current, { height: defaultStyles.spacing[20] });
        }
        tl.play();
    }, [darkMode]);

    return (
        <NavBar ref={navRef} fixed={fixed ? true : false} {...props}>
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <a className="relative signature-container">
                        <LogoWrapper ref={signatureRef}>
                            <Image 
                            src={`/images/signature-sm.png`}
                            alt="Panuganti Srikar"
                            width={60}
                            height={23} />
                        </LogoWrapper>
                        <LogoWrapper ref={signatureInvRef}>
                            <Image 
                            src={`/images/signature-inv-sm.png`}
                            alt="Panuganti Srikar"
                            width={60}
                            height={23} />
                        </LogoWrapper>
                    </a>
                </Link>
                <div className="w-full flex items-stretch justify-end">
                    { navigation !== 'none' ? <>
                            <nav className="flex items-center text-md mr">
                                <Link href="/writings"><a className="ml mr">Writings</a></Link>
                                <Link href="/portfolio"><a className="ml mr">Portfolio</a></Link>
                                <Link href="/"><a className="ml mr">Projects</a></Link>
                                <Link href="/"><a className="ml mr">Contact</a></Link>
                            </nav>
                            <Link href="/"><a className="mr pr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a></Link>
                        </> : null
                    }
                    <ToggleTheme />
                    { lists }
                </div>
            </div>
        </NavBar>
    )
}

export default Nav