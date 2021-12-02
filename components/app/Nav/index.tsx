import Link from 'next/link'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import useDarkMode from 'use-dark-mode';
import defaultStyles from '@/styles/defaultStyles'
import ToggleTheme from '@/components/app/ToggleTheme'
import { NavBar, LogoWrapper } from './partials/styles'

type Props = {
    mode: string | null,
    [x: string]: any
}

const Nav = ({mode, ...props}: Props) => {
    const signatureRef = useRef(null);
    const signatureInvRef = useRef(null);
    const navRef = useRef(null);
    const darkMode = useDarkMode(false);
    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });
    useEffect(() => {
        if(mode === 'fixed') tl.set(navRef.current, { height: '0rem', duration: 0, backgroundImage: 'none' });
        tl.to(signatureRef.current, { rotateX: darkMode.value ? 90 : 0, autoAlpha: darkMode.value ? 0 : 1 })
          .to(signatureInvRef.current, { rotateX: darkMode.value ? 0 : 90, autoAlpha: darkMode.value ? 1 : 0 });
        if(mode === 'fixed') {
            tl.to(navRef.current, {backgroundImage: `linear-gradient(to bottom, #${darkMode.value? '0f0f10' : 'fff'} 10px, transparent 85px)`})
              .to(navRef.current, { height: defaultStyles.spacing[20] });
        }
        tl.play();
    }, [darkMode]);

    return (
        <NavBar ref={navRef} fixed={mode === 'fixed' ? true : false} {...props}>
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
                    <nav className="flex items-center text-md mr text-secondary">
                        <Link href="/writings"><a className="ml mr text-light">#<i>&nbsp;about&nbsp;</i></a></Link>
                        <Link href="/writings"><a className="ml mr text-light">#<i>&nbsp;writings&nbsp;</i></a></Link>
                        <Link href="/writings"><a className="ml mr text-light">#<i>&nbsp;contact&nbsp;</i></a></Link>
                    </nav>
                    {/* <Link href="/"><a className="mr pr"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a></Link> */}
                    <ToggleTheme />
                </div>
            </div>
        </NavBar>
    )
}

export default Nav