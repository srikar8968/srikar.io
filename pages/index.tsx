import { useEffect, useRef, useState } from 'react'
import { getAllPosts } from '@/lib/post'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import type EntryType from '@/types/entry'
import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import TiltAnimateContainer from '@/components/app/PageHeader/partials/TiltAnimateContainer'
import TiltAnimate from '@/components/app/PageHeader/partials/TiltAnimate'
import Gallery from '@/components/app/Gallery'
import PostList from '@/components/app/PostList'
import SocialPanel from '@/components/app/SocialPanel'
import WorkDisplay from '@/components/app/WorkDisplay'

import skills from '../_data/skills'
import projects from '../_data/projects'
import work from '../_data/work'

import styles from '@/styles/Home.module.css'

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = ({posts}: { posts: EntryType[] }) => {
  const [hovered, setIsHovered] = useState(false);

  const welcomeTitleTxtRef = useRef(null);
  const welcomeDescTxtRef = useRef(null);
  const welcomeRefContainer = useRef(null);

  const projectsTitleTxtRef = useRef(null);
  const projectsGalleryRef = useRef(null);
  const projectsRefContainer = useRef(null);

  const expertiseColLRef = useRef(null);
  const expertiseColRRef = useRef(null);
  const expertiseRefContainer = useRef(null);

  const writingsBackdropRef = useRef(null);
  const writingsRefContainer = useRef(null);

  const revealRef = useRef([]);

  const tl = gsap.timeline({ paused: true, defaults: { transformOrigin: 'center', duration: 0.3, delay: 0.2 } });

  const scrollEffect = (el, start = 'top bottom') => ({
    trigger: el,
    start: start,
    end:"bottom top",
    scrub: true
  })

  useEffect(() => {
      tl.set(revealRef.current, { scale: 0 })
        .to(revealRef.current, { scale: 1, stagger: 0.3 })
        .play();
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {

          tl.to(welcomeTitleTxtRef.current, { x: -50, scrollTrigger: scrollEffect(welcomeRefContainer.current, 10) })
            .to(welcomeDescTxtRef.current, { x: 50, scrollTrigger: scrollEffect(welcomeRefContainer.current, 10) })
            // ------------
            .to(expertiseColLRef.current, { y: -50, scrollTrigger: scrollEffect(expertiseRefContainer.current, 'center bottom') })
            .to(expertiseColRRef.current, { y: 50, scrollTrigger: scrollEffect(expertiseRefContainer.current, 'center bottom') })
            // ------------
            .fromTo(writingsBackdropRef.current, { xPercent: -50 }, { xPercent: -30, scrollTrigger: scrollEffect(writingsRefContainer.current) })
            // ------------
            .to(projectsTitleTxtRef.current, { x: -50, scrollTrigger: scrollEffect(projectsRefContainer.current) })
            // .to(projectsGalleryRef.current, { x: 50, scrollTrigger: scrollEffect(projectsRefContainer.current) })
            .play()

        }
      });

      return () => tl.kill();
  }, []);

  return (
    <>
      <Head>
        <title>Srikar Panuganti | Web Developer</title>
        <meta name="description" content="Web Developer who love's to build a digital faster web" />
      </Head>

      <>
        <section ref={welcomeRefContainer} className={styles.heroWrapper}>
          <div className="container">
            <div className={styles.heroWrapperInner}>
              <div className={styles.heroWrapperContent}>
                <h1 ref={welcomeTitleTxtRef} className={styles.heroWrapperTitle}>Hey, I&apos;m <span>Srikar</span>.</h1>
                <p ref={welcomeDescTxtRef} className={styles.heroWrapperDesc}>
                  I&apos;m a <span className={styles.heroWrapperDescOutline}>full-stack web dev</span>, living in&nbsp;
                  <span><Image src="/images/charminar.png" width={45} height={45} alt="Hyderabad, India" title="Hyderabad, India" /></span>
                  <span className={styles.heroWrapperDescOutline}>Hyd, India</span> with knack for building <br/>scalable faster <span className={styles.heroWrapperDescOutline}>web</span>.
                </p>
                <a href="/myresume.pdf" target="_blank" rel="noreferrer" className="txt-primary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M13 2v7h7"/></svg>
                  <small className="font-alt txt-lg">&nbsp;View Resume</small>
                </a>
              </div>
              <div className={styles.heroWrapperAvtarWrapper}>
                <div className={styles.avatarWrapper}>
                  <TiltAnimate className={styles.heroWrapperAvtarFallback} threshold={25}>
                      <svg className={styles.svgBlob} ref={el => revealRef.current[0] = el} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                          <path d="M380.5,315.5Q326,381,248.5,384Q171,387,120,318.5Q69,250,124,188.5Q179,127,272,89Q365,51,400,150.5Q435,250,380.5,315.5Z" fill="#0d9488"></path>
                      </svg>
                  </TiltAnimate>
                  <TiltAnimate threshold={-10}>
                    <div ref={el => revealRef.current[1] = el} className={styles.heroWrapperAvtar}>
                      <Image src="/images/avatar-dark-sm.png" layout="fill" alt="Srikar Panuganti" priority />
                    </div>
                  </TiltAnimate>
                </div>
                <div className={styles.heroSocialPanel}> 
                  <SocialPanel />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className="container">
            <p ref={el => revealRef.current[2] = el}>I am a Web Developer with vast array of knowledge in front end and back end technologies, frameworks, databases and best code practices. Having more than a 2 year&apos;s of experience and seeking to proven process in the position of a Developer to further enhance organizational worth owing to my knowledge in Web Development and dedicated to further developing career skills at professional level to meet company targets and culture.</p>
            <div className="flex justify-center">
              <SocialPanel />
            </div>
          </div>
        </section>

        <section ref={expertiseRefContainer} className={styles.expertiseSection}>
          <div className="container flex items-center justify-bw">
            <div ref={expertiseColLRef} className={styles.expertiseSectionCols}
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}>
              <TiltAnimateContainer threshold={8} active={hovered}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{width:'75%', opacity: '0.75'}} viewBox="0 0 850.538 740.83"><path d="M766.878 385.54a354.21 354.21 0 0 1-98.85 245.9q-5.745 6.015-11.8 11.74-9.225 8.775-19.07 16.87a353.934 353.934 0 0 1-217.58 80.69q-3.975.09-7.98.09c-63.43 0-143.21-33.88-215.61-80.78q-8.985-5.82-17.81-11.91-4.125-2.82-8.21-5.72a730.43 730.43 0 0 1-79.32-64.8 514.116 514.116 0 0 1-45.75-48.92c-55.63-68.62-67.9-130.45 11.41-143.16q14.085-2.25 27.34-4.81 19.2-3.69 36.75-7.97 23.64-5.745 44.42-12.46 6.99-2.25 13.66-4.59c65.74-23.09 109.74-53.2 139.69-85.87q7.62-8.295 14.05-16.79a236.055 236.055 0 0 0 17.83-27.12 254.898 254.898 0 0 0 18.41-41.05l.27-.78c23.83-68.74 16.58-132.5 42.87-153.84 112.38-91.23 252.29 38.69 317.96 191.9q4.965 11.58 9.34 23.3 1.965 5.235 3.79 10.49 4.8 13.694 8.71 27.46 1.5 5.25 2.86 10.49c.97 3.77 1.9 7.53 2.76 11.29 6.39 27.53 9.86 54.68 9.86 80.35Z" className={styles.svgBackDrop}/><path d="M419.578 740.74q-3.975.09-7.98.09c-63.43 0-143.21-33.88-215.61-80.78q-8.985-5.82-17.81-11.91l5.16-31.4L339.548 596l78.4 59.95Z" fill="#2f2e41"/><path d="M427.098 180.05h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.27a2.593 2.593 0 0 0 2.6 2.59h22.26a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6Z" fill="#fff"/><path d="M427.098 218h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.27a2.593 2.593 0 0 0 2.6 2.59h22.26a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6ZM427.098 255.95h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6ZM429.658 296.04a2.617 2.617 0 0 0-2.56-2.14h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6V296.5a2.313 2.313 0 0 0-.04-.46ZM428.108 332.05a2.634 2.634 0 0 0-1.01-.2h-22.26a2.595 2.595 0 0 0-2.6 2.6v22.26a2.588 2.588 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.616 2.616 0 0 0-1.59-2.4ZM473.858 180.05h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.27a2.593 2.593 0 0 0 2.6 2.59h22.26a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M473.858 218h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.27a2.593 2.593 0 0 0 2.6 2.59h22.26a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6ZM473.858 255.95h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6ZM473.858 293.9h-22.26a2.593 2.593 0 0 0-2.46 1.78 2.478 2.478 0 0 0-.14.82v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M473.858 331.85h-22.26a2.595 2.595 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M520.618 180.05h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.27a2.593 2.593 0 0 0 2.6 2.59h22.26a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6ZM520.618 218h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.27a2.593 2.593 0 0 0 2.6 2.59h22.26a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M520.618 255.95h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M520.618 293.9h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6ZM520.618 331.85h-22.26a2.595 2.595 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6ZM567.378 180.05h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.27a2.593 2.593 0 0 0 2.6 2.59h22.26a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M567.378 218h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.27a2.593 2.593 0 0 0 2.6 2.59h22.26a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6ZM567.378 255.95h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6Z" fill="#fff"/><path d="M567.378 293.9h-22.26a2.601 2.601 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M567.378 331.85h-22.26a2.595 2.595 0 0 0-2.6 2.6v22.26a2.595 2.595 0 0 0 2.6 2.6h22.26a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M614.138 180.05h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6ZM614.138 218h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6ZM614.138 255.95h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6Z" fill="#fff"/><path d="M614.138 293.9h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M614.138 331.85h-22.27a2.593 2.593 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M660.898 180.05h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6ZM660.898 218h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6Z" fill="#fff"/><path d="M660.898 255.95h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M660.898 293.9h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M660.898 331.85h-22.27a2.593 2.593 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6Z" fill="#fff"/><path d="M707.658 180.05h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6ZM707.658 218h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M707.658 255.95h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M707.658 293.9h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6Z" fill="#fff"/><path d="M707.658 331.85h-22.27a2.593 2.593 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6ZM754.418 180.05h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6ZM754.418 218h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M754.418 255.95h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M754.418 293.9h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6ZM754.418 331.85h-22.27a2.593 2.593 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M801.178 180.05h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M801.178 218h-22.27a2.599 2.599 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6ZM801.178 255.95h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6ZM801.178 293.9h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M801.178 331.85h-22.27a2.593 2.593 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6ZM847.938 180.05h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59v-22.27a2.608 2.608 0 0 0-2.6-2.6ZM847.938 218h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.27a2.59 2.59 0 0 0 2.59 2.59h22.27a2.6 2.6 0 0 0 2.6-2.59V220.6a2.608 2.608 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path d="M847.938 255.95h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.608 2.608 0 0 0-2.6-2.6Z" fill="#14b8a6"/><path d="M847.938 293.9h-22.27a2.6 2.6 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6V296.5a2.608 2.608 0 0 0-2.6-2.6ZM847.938 331.85h-22.27a2.593 2.593 0 0 0-2.59 2.6v22.26a2.593 2.593 0 0 0 2.59 2.6h22.27a2.601 2.601 0 0 0 2.6-2.6v-22.26a2.601 2.601 0 0 0-2.6-2.6Z" fill="#e6e6e6"/><path fill="#2f2e41" d="M336.095 660.051h-.62l.53-.07.09.07z"/><circle data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b" cx="282.814" cy="176.733" r="68.322" fill="#ffb6b6"/><path data-name="bf427902-b9bf-4946-b5d7-5c1c7e04535e" d="M342.646 126.64s17.87-34.16-21.444-37.266c0 0-33.515-30.402-67.676-5.558 0 0-18.633 0-28.822 21.086 0 0-14.655-5.558-17.876 9.316 0 0-10.723 31.056 0 59.005 10.724 27.95 14.286 31.056 14.286 31.056s-17.621-58.599 25.27-61.704 90.886-29.91 94.46 4.251 8.954 42.578 8.954 42.578 33.95-48.789-7.152-62.764Z" fill="#2f2e41"/><path d="m459.548 345.11-.22 1.16-2.47 13.04-17.07 90.2-1.01 5.31-2.12 11.23-2.9 15.32-6.43 33.95-1.84 9.73-.69 3.65-.24 1.28-1.91 10.07-.58 3.04-4.66 34.53-4.07 30.09 13.62 13.62-8.12 8.12-5.33 30.53.01.07h-217.53q-13.2-8.55-26.02-17.63l1.79-13.4s6.16-23.93 3.57-26.79c-2.58-2.86-8.24-7.97-8.24-7.97l7.13-16.64.99-2.31-1.66-34.43-.04-.83-.55-11.35-.07-1.46-.11-2.19-2.11-43.68-.04-.72-.64-13.24-.6-12.59-.26-5.31-2.57-53.13-1.74-36.08-1.52-31.41 6.11-2.07 65.35-22.21 27.07-35.19 56.34.42 27.58.21 46.02 42.68 10.47 5 .08.04 7.51 3.59 19.04 9.09 20.13 9.62 10.33 4.93Z" fill="#cacaca"/><path d="M269.109 557.55a30.286 30.286 0 0 1-40.664-22.43l-106.559-15.117 37.043-41.902 95.511 20.78a30.45 30.45 0 0 1 14.669 58.67Z" fill="#ffb6b6"/><path d="M221.598 481.37a13.522 13.522 0 0 0-7.89-4.87l-43.72-9.09-4.49-.93a18.933 18.933 0 0 1-12.53-9.07 19.16 19.16 0 0 1-2.45-7.9 18.895 18.895 0 0 1 .89-7.48l15.15-45.65 9.83-29.62a41.792 41.792 0 0 0 2.09-11.05 43.349 43.349 0 0 0-9.07-28.89 42.693 42.693 0 0 0-49.01-13.64c-.25.09-.51.19-.76.29a42.583 42.583 0 0 0-25.31 28.41l-10.68 38.85-22.03 80.09a57.766 57.766 0 0 0 48.96 72.68l62.97 7.38 29.14 3.42a13.497 13.497 0 0 0 14.84-10.73 4.895 4.895 0 0 0 .11-.55l.7-4.32 5.93-36.38.06-.37a13.475 13.475 0 0 0-2.73-10.58Z" fill="#cacaca"/><path d="M336.983 558.717a30.286 30.286 0 0 0 37.094-27.94l103.362-29.994-42.581-36.26-91.627 34.042a30.45 30.45 0 0 0-6.248 60.152Z" fill="#ffb6b6"/><path d="m528.758 433.69-49.16-113.14a42.819 42.819 0 0 0-20.27-21.35 43.356 43.356 0 0 0-8.78-3.2c-.47-.12-.94-.23-1.41-.32a42.132 42.132 0 0 0-19.48.36 42.814 42.814 0 0 0-27.34 21.73 1.004 1.004 0 0 0-.08.14 43.1 43.1 0 0 0-.37 38.85l.61 1.22 34.74 69.77a18.9 18.9 0 0 1-10.5 26.19l-2.44.88-43.88 15.85a13.497 13.497 0 0 0-8.33 16.79l.11.35 12.3 39.36c.06.18.12.36.19.54a7.054 7.054 0 0 0 .4.99 13.482 13.482 0 0 0 15.81 7.53l23.68-6.25 4.83-1.28 61.15-16.15a57.76 57.76 0 0 0 38.22-78.86Z" fill="#cacaca"/><path d="M44.898 528.7a514.116 514.116 0 0 0 45.75 48.92h451.97a16.446 16.446 0 0 1 16.42 16.43l.65 114.53a355.43 355.43 0 0 0 77.47-48.53q9.84-8.085 19.07-16.87 6.045-5.73 11.8-11.74a355.629 355.629 0 0 0 68.82-102.74Z" fill="#3f3d56"/><path d="M668.028 631.44q-5.745 6.015-11.8 11.74h-96.21v-11.74Z" fill="#fff"/><path d="M458.648 255.95a5.538 5.538 0 0 0-4.87-2.9h-327.84a5.555 5.555 0 0 0-5.54 5.55v196.22h338.93V258.6a5.385 5.385 0 0 0-.68-2.65Z" fill="#3f3d56"/><path d="M120.101 449.507v24.214a7.644 7.644 0 0 0 7.644 7.644h125.097v47.786h-1.662a.993.993 0 0 0-.993.993v3.324a.993.993 0 0 0 .993.993h77.658a.993.993 0 0 0 .993-.993v-3.324a.993.993 0 0 0-.993-.993h-1.662v-47.786h125.097a7.644 7.644 0 0 0 7.644-7.644v-24.214Z" fill="#3f3d56"/><circle cx="285.903" cy="348.704" r="31.306" fill="#14b8a6"/><path d="M365.668 173h-5c0-37.8-37.41-62.57-75.15-62.59a82.382 82.382 0 0 0-16.35 1.59c-6.06 1.21-12.35 2.66-18.53 4.55-24.37 7.47-46.97 21.91-46.97 56.45a78.591 78.591 0 0 0 2.54 19.88l-4.84 1.26a83.876 83.876 0 0 1-2.7-21.14c0-30.18 12.39-50.91 33.79-63.27 11.25-6.5 24.98-10.69 40.71-12.73a97.13 97.13 0 0 1 19.75-.6c43.4 3.12 72.75 36.4 72.75 76.6Z" fill="#14b8a6"/><path d="m373.998 175.77-1.97-14.56a15.71 15.71 0 0 0-5-9.56 15.816 15.816 0 0 0-13.25-4l-3.13.43a6.524 6.524 0 0 0-4.35 2.53 6.548 6.548 0 0 0-1.29 4.87l4.55 33.54a6.577 6.577 0 0 0 5.3 5.57 6.154 6.154 0 0 0 1.22.12 6.499 6.499 0 0 0 .88-.06l3.5-.47a15.791 15.791 0 0 0 10.74-6.43c.27-.38.53-.77.77-1.17a16.748 16.748 0 0 0 2.03-10.81Z" fill="#14b8a6"/><path d="M348.628 148.69a6.432 6.432 0 0 0-2.33 1.92 6.548 6.548 0 0 0-1.29 4.87l4.55 33.54a6.577 6.577 0 0 0 5.3 5.57Z" fill="#fff"/><path d="m373.998 175.77-1.97-14.56a15.71 15.71 0 0 0-5-9.56l4.53 33.37a6.176 6.176 0 0 0 .41 1.56 16.748 16.748 0 0 0 2.03-10.81Z" fill="#3f3d56"/><ellipse cx="532.218" cy="258.909" rx="2.5" ry="7" transform="rotate(-7.725 -144.493 1513.038)" fill="#3f3d56"/><ellipse cx="529.218" cy="240.909" rx="2.5" ry="7" transform="rotate(-7.725 -147.493 1495.038)" fill="#3f3d56"/><ellipse cx="548.218" cy="247.909" rx="2.5" ry="7" transform="rotate(-7.725 -128.493 1502.038)" fill="#3f3d56"/><path d="M285.518 110.41a82.382 82.382 0 0 0-16.35 1.59c-6.06 1.21-12.35 2.66-18.53 4.55-9.65-.47-16.75-2.97-18.18-6.82 11.25-6.5 24.98-10.69 40.71-12.73a97.13 97.13 0 0 1 19.75-.6 5.727 5.727 0 0 1 2.72 3.82c.47 3.48-3.5 7.18-10.12 10.19Z" fill="#3f3d56"/><path d="m221.678 207.7-7.7-32.01a6.024 6.024 0 0 0-4.88-4.55 6.733 6.733 0 0 0-1-.08 6.026 6.026 0 0 0-1.4.17l-2.98.72a14.904 14.904 0 0 0-10.99 17.96l3.45 14.36a15.845 15.845 0 0 0 5.34 8.62 14.045 14.045 0 0 0 1.36.97 14.81 14.81 0 0 0 11.37 1.84l2.97-.72a5.84 5.84 0 0 0 2.17-1.01 5.993 5.993 0 0 0 2.29-6.27Z" fill="#14b8a6"/><ellipse cx="378.629" cy="274.523" rx="2.5" ry="7" transform="rotate(-13.531 -44.177 971.198)" fill="#3f3d56"/><ellipse cx="368.629" cy="277.523" rx="2.5" ry="7" transform="rotate(-13.531 -54.177 974.198)" fill="#3f3d56"/><path d="m222.168 207.58-7.7-32.01a6.532 6.532 0 0 0-5.29-4.92l10.51 43.72a6.511 6.511 0 0 0 2.48-6.79Z" fill="#fff"/><path d="M194.468 183.57a6.476 6.476 0 0 0-1.17-2.45 14.725 14.725 0 0 0-.57 8.79l3.45 14.36a15.845 15.845 0 0 0 5.34 8.62Z" fill="#3f3d56"/></svg>
              </TiltAnimateContainer>
            </div>
            <div ref={expertiseColRRef} className={styles.expertiseSectionCols}>
              <span className="txt-primary font-alt txt-lg">Here are some of my expertise</span>
              <h2 className={styles.expertiseSectionTitle}><span className="txt-primary">.</span>Building projects with trending technologies</h2>
              <div className="flex items-center flex-wrap">
                { skills.map((skill, index) => <span className={styles.expertiseSectionTags} key={index}>{ skill.name }</span>) }
              </div>
            </div>
          </div>
        </section>

        <section ref={writingsRefContainer} className={styles.writingsSection}>
          <div ref={writingsBackdropRef} className={styles.writingsSectionBackdrop}></div>
          <div className="container flex items-center justify-bw flex-wrap">
            <div className={styles.writingsSectionColsL}>
              <h2 className={styles.writingsSectionTitle}><span className="txt-primary">.</span>My Recent Writings</h2>
              Check out my blog for occasional writings on things I've learned, projects I've been working on and thoughts on hot topics.
              <br/><br/>
              Writings based on design, development, and building excellent web applications.
              <br/><br/>
              <Link href="/writings"><a className="txt-primary font-alt txt-lg">{ `< view all writings />` }</a></Link>
            </div>
            <div className={styles.writingsSectionColsR}>
              <PostList posts={posts} />
            </div>
          </div>
        </section>

        <section ref={projectsRefContainer} className={styles.projectsSection}>
          <div className="container">
            <h2 ref={projectsTitleTxtRef} className={styles.projectsSectionTitle}><span className="txt-primary">.</span>My Work</h2>

            <WorkDisplay items={work}/>

            <h3 className="title-lg">::::: my other projects</h3>
            <div ref={projectsGalleryRef}>
              <Gallery items={projects} />

              <a href="https://github.com/srikar8968/" target="_blank" rel="noreferrer" className="flex txt-primary items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                <small className="font-alt txt-lg">&nbsp;Go to Repository</small>
              </a>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const posts = await getAllPosts([
        'title',
        'date',
        'slug',
        'readingTime',
        'excerpt'
    ]);

    return {
        props: {
            posts
        }
    }
}