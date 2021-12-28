import { useRef, useEffect } from 'react'
import useDarkMode from 'use-dark-mode';
import { gsap } from 'gsap'
import styles from './partials/ThemeToggler.module.css';

const ThemeToggler = () => {
    const circleRef = useRef(null);
    const pathRefSun = useRef(null);
    const pathRefMoon = useRef(null);
    const buttonRef = useRef(null);
    const darkMode = useDarkMode(false);
    const tl = gsap.timeline({ paused: true, reversed:true, defaults: { duration: 0.4, transformOrigin: 'center' } });

    const onToggle = () => {
        darkMode.toggle();
        if(darkMode.value) {
            onDarkMode();
        }else {
            onLightMode();
        }
    }
    useEffect(() => {
        pathRefSun.current.style.opacity = darkMode.value ? 0 : 1;
        circleRef.current.style.opacity = darkMode.value ? 0 : 1;
        pathRefMoon.current.style.opacity = darkMode.value ? 1 : 0;
    }, [darkMode.value]);

    const onLightMode = () => {
        tl.set(buttonRef.current, { pointerEvents: 'none' })
            .set(pathRefSun.current, { rotation: -120 })
            .set(pathRefMoon.current, { scale: 0, rotation: -120 })
            .to(pathRefSun.current, { rotation: 0 })
            .to(pathRefSun.current, { autoAlpha: 0 })
            .to(circleRef.current, { scale: 0 })
            .to(pathRefMoon.current, { scale: 1, rotation: 0 })
            .set(buttonRef.current, { pointerEvents: 'auto' })
            .play();
    }
    const onDarkMode = () => {
        tl.set(buttonRef.current, { pointerEvents: 'none' })
            .set(pathRefSun.current, { rotation: 120, autoAlpha: 0 })
            .set(pathRefMoon.current, { scale: 1, rotation: 120 })
            .to(pathRefMoon.current, { scale: 0, rotation: 0 })
            .to(circleRef.current, { scale: 1 })
            .to(pathRefSun.current, { autoAlpha: 1, rotation: 0 })
            .set(buttonRef.current, { pointerEvents: 'auto' })
            .play();
    }

    return (
        <button ref={buttonRef} onClick={onToggle}>
                <svg className={styles.toggleIcon}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <circle ref={circleRef} cx="12" cy="12" r="5"/>
                    <path 
                        ref={pathRefSun} 
                        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    <path 
                        ref={pathRefMoon} 
                        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                </svg>
        </button>
    )

}

export default ThemeToggler