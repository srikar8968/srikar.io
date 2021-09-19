import styled from 'styled-components'
import Section from '../components/base/Section'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { getAllPosts } from '../lib/post'
import useWindowDimensions from '../lib/utils/useWindowDimensions'
import Link from 'next/link'
import Image from 'next/image'
import PostContainer from '../components/base/PostContainer'

import PostType from '../types/entry'

const Wrapper = styled.div`
  /*background-image: url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23d97706' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-size: 50%;*/
`
const BubbleTransition = styled.div`
  background-color: #d97706;
  width: 80px;
  height: 80px;
  opacity: 0.2;
  border-radius: 100%;
  position: fixed;
  z-index: -1;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 25%;
`
const HeroWrapper = styled.div`
  overflow: hidden;
  min-height: calc(100vh);
  margin-top: -${({theme}) => theme.spacing[28]};
  display: flex;
  align-items: center;
  & h1 {
    font-size: ${({theme}) => theme.fontSize.xl5[0]};
    line-height: 3.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  & .navLst {
    font-size: ${({theme}) => theme.fontSize.xl[0]};
    & a span {
      color: ${({theme}) => theme.text.primary}
    }
  }
`

type Props = {
  allPosts: PostType[]
};

const Index = ({allPosts}: Props) => {
  const bubbleEffRef = useRef(null);
  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    const { innerWidth: vw, innerHeight: vh } = window;

    tl.to(bubbleEffRef.current, { width: vw/2, height: vh-50, borderRadius: 0 }).play();
  }, []);
  
  return (
    <Wrapper>
      <BubbleTransition ref={bubbleEffRef} />
      <HeroWrapper>
        <PostContainer>
          <h1>
            Hey, I'm&nbsp;
            <span className="text-primary">Srikar</span>.<br/>
            I'm a full-stack web dev, living in 
            <span className="ml mr"><Image src="/images/charminar.png" width={35} height={35} alt="Hyderabad, India" title="Hyderabad, India" /></span>India 
            who love's building digital websites.
          </h1>
          <div className="navLst flex items-center flex-wrap text-secondary">
            <Link href="/writings"><a className="mr ml">&lt;\<span>writings</span>&gt;</a></Link>
            <Link href="/work"><a className="mr ml">&lt;\<span>work</span>&gt;</a></Link>
            <Link href="/contact"><a className="mr ml">&lt;\<span>contact</span>&gt;</a></Link>
          </div>
        </PostContainer>
      </HeroWrapper>
      {/*<Section as="section" type="invert" color="invert" py="16">
        <div className="container">
          <h2>Latest</h2>
          <ul>
            { allPosts.map((post, index) => (
              <li key={index}><Link href="/writings/[slug]" as={`/writings/${post.slug}`}><a>{ post.title }</a></Link></li>
            )) }
          </ul>
        </div>
      </Section>*/}
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