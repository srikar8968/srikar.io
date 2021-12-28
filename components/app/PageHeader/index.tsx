import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import TiltAnimate from './partials/TiltAnimate'

import styles from './partials/PageHeader.module.css'

const PageHeader = ({title, description}: { title: string, description?: string }) => {
    const tl = gsap.timeline({ paused: true, defaults: { transformOrigin: 'center', duration: 0.2, delay: 0.2 } });
    let revealRef = useRef([]);

    useEffect(() => {
        tl.set(revealRef.current, { scale: 0 })
          .to(revealRef.current, { scale: 1, stagger: 0.2, ease: 'back.out' })
          .play()
        return () => tl.kill();
    }, []);

    return (
        <div className={styles.pageHeader}>
            <TiltAnimate className={styles.headerFallback} threshold={10}>
                <svg className={styles.svgBlob} ref={el => revealRef.current[0] = el} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.5,315.5Q326,381,248.5,384Q171,387,120,318.5Q69,250,124,188.5Q179,127,272,89Q365,51,400,150.5Q435,250,380.5,315.5Z" fill="#0d9488"></path>
                </svg>
            </TiltAnimate>
            <TiltAnimate threshold={20}>
                <h1 ref={el => revealRef.current[1] = el} className={styles.title}>{title}</h1>
                <p ref={el => revealRef.current[2] = el} className={styles.tagLine}>{description}</p>
            </TiltAnimate>
        </div>
    )
}

export default PageHeader