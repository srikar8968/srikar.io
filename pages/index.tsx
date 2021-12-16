import styled from 'styled-components'
import Section from '@/components/base/Section'
import Tag from '@/components/base/Tag'
import Tilt from '@/components/base/animation/Tilt'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { getAllPosts } from '@/lib/post'
import useWindowDimensions from '@/lib/utils/useWindowDimensions'
import Link from 'next/link'
import Image from 'next/image'
import PostContainer from '@/components/base/PostContainer'
import PostType from '@/types/entry'

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
`
const HeroWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: calc(100vh);
  margin-top: -${({theme}) => theme.spacing[36]};
  display: flex;
  align-items: center;
  & h1 {
    font-size: ${({theme}) => theme.fontSize.xl7[0]};
    line-height: 1.2;
    font-weight: 900;
  }
  & h2 {
    font-size: ${({theme}) => theme.fontSize.xl3[0]};
    margin-bottom: 1rem;
  }
  & .navLst {
    font-size: ${({theme}) => theme.fontSize.xl[0]};
    & a span {
      color: ${({theme}) => theme.text.primary}
    }
  }
`

const BgRadiant = styled(Tilt)`
  position: absolute;
  top: 5%;
  left: 0;
  opacity: 0.6;
  z-index: -1;
  & svg {
    height: 110vh
  }
`
const SkillGallery = styled.div`
  height: 480px;
  flex-shrink: 0;
  position: relative;
  width: 50%;
`
const SkillGalleryItemBase = styled.div`
  & > div {
    position: absolute;
    background-color: ${({theme}) => theme.mode === 'dark' ? theme.bg.default : '#fff'};
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.25rem;
    box-shadow: ${({theme}) => theme.mode === 'dark' ? '-5px 5px 25px 0 rgba(0,0,0,0.5)' : '0 0 2px rgba(0,0,0,0.25)'};
    opacity: 1;
    filter: grayscale(0.5)
  }
  & > div:hover {
    filter: grayscale(0)
  }
`

const SkillGalleryItem = styled(SkillGalleryItemBase)`
  & > div {
    top: ${({top}) => top || 'auto'};
    bottom: ${({bottom}) => bottom || 'auto'};
    left: ${({left}) => left || 'auto'};
    right: ${({right}) => right || 'auto'};
    background-image: url("${({logo}) => `/images/logos/${logo}`}");
    width: ${({size}) => size || '180px'};
    height: ${({size}) => size || '180px'};
    background-size: ${({bgSize}) => bgSize || '70%'};
  }
`

type Props = {
  allPosts: PostType[]
};

const Index = ({allPosts}: Props) => {
  const skills = [{
    name: 'JavaScript',
    color: ['yellow', 400]
  },{
    name: 'NodeJS',
    color: ['green', 400]
  },{
    name: 'React',
    color: ['blue', 400]
  },{
    name: 'MYSQL',
    color: ['blue', 500]
  },{
    name: 'Laravel',
    color: ['red', 500]
  },{
    name: 'TypeScript',
    color: ['blue', 600]
  },{
    name: 'NextJS',
    color: ['gray', 800]
  }];
  const revealRef = useRef([]);
  const galleryRef = useRef([]);
  const galleryContainerRef = useRef(null);
  const tl = gsap.timeline({ paused: true, defaults: { transformOrigin: 'center', duration: 0.3 } });

  useEffect(() => {
    tl.fromTo(galleryRef.current, {
        y: 100,
        scale: 0.5,
        autoAlpha: 0,
      }, {
        y: -50,
        scale: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: galleryContainerRef.current,
          start: 'top bottom',
          end:"+=100%",
          scrub: true
        },
        stagger: {
          each: 0.2,
          from: 'end'
        }
    }).play();
    tl.set(revealRef.current, { scale: 0 })
      .to(revealRef.current, { scale: 1, delay: 0.3, duration:0.5 })
      .play();

      return () => tl.kill();
  }, [])

  return (
    <Wrapper>
      <HeroWrapper>
        <BgRadiant active={true} threshold={20}>
          <svg ref={el => revealRef.current[0] = el} viewBox="0 -250 800 800" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="400" cy="102" r="400" fill="url(#heroglow_paint0_radial)" fillOpacity=".6"></circle><circle cx="209" cy="289" r="170" fill="url(#heroglow_paint1_radial)" fillOpacity=".3"></circle><defs><radialGradient id="heroglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 149 251) scale(315.089)"><stop stopColor="#3ABAB4"></stop><stop offset="1" stopColor="#3ABAB4" stopOpacity=".01"></stop></radialGradient><radialGradient id="heroglow_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -40 249) scale(133.913)"><stop stopColor="#667EEA"></stop><stop offset="1" stopColor="#667EEA" stopOpacity=".01"></stop></radialGradient></defs></svg>
        </BgRadiant>
        <PostContainer>
          <h1>
            Hey, I'm&nbsp;
            <span className="text-gr-primary">Srikar</span>.
          </h1>
          <h2>
            I'm a full-stack web dev, living in 
            <span className="ml mr"><Image src="/images/charminar.png" width={50} height={50} alt="Hyderabad, India" title="Hyderabad, India" /></span>India 
            who love's building digital websites.
          </h2>
          <div className="navLst flex items-center flex-wrap text-secondary">
            <Link href="/writings"><a className="mr ml">&lt;\<span>writings</span>&gt;</a></Link>
            <Link href="/work"><a className="mr ml">&lt;\<span>work</span>&gt;</a></Link>
            <Link href="/contact"><a className="mr ml">&lt;\<span>contact</span>&gt;</a></Link>
          </div>
        </PostContainer>
      </HeroWrapper>

      <Section ref={galleryContainerRef} id="hello" as="section" pt={4} pb={16}>
        <div className="container">
          <div className="flex items-center">
            <SkillGallery>
              <SkillGalleryItem bottom="40px" left="40px" logo="laravel.svg" size="80px">
                <div ref={el => galleryRef.current[1] = el}></div>
              </SkillGalleryItem>
              <SkillGalleryItem bottom="30px" right="0" logo="mysql.svg" size="120px">
                <div ref={el => galleryRef.current[0] = el}></div>
              </SkillGalleryItem>
              <SkillGalleryItem top="40px" left="20px" logo="nodejs.svg" size="280px">
                <div ref={el => galleryRef.current[2] = el}></div>
              </SkillGalleryItem>
              <SkillGalleryItem bottom="0" left="150px" logo="react.svg" size="200px">
                <div ref={el => galleryRef.current[3] = el}></div>
              </SkillGalleryItem>
              <SkillGalleryItem top="0" right="30px" logo="javascript.svg" size="240px" bgSize="90%">
                <div ref={el => galleryRef.current[4] = el}></div>
              </SkillGalleryItem>
            </SkillGallery>
            <Section pl={16}>
              <span className="text-primary mb semibold">Here are some of my expertise</span>
              <h2 className="font-xl5 exbold pb"><i className="text-primary">.</i>Building projects with trending technologies</h2>
              <div className="flex items-center flex-wrap mt mb pt pb">
                { skills.map((skill, index) => <Tag key={index} theme={['gray', 400]}>{ skill.name }</Tag>) }
              </div>
            </Section>
          </div>          
        </div>
      </Section>
    </Wrapper>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug'
  ])

  return {
    props: { allPosts },
  }
}