import styled from 'styled-components'
import Section from '../components/base/Section'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { getAllPosts } from '../lib/post'
import Link from 'next/link'

import PostType from '../types/post'

const Wrapper = styled.div`
  
`
const HeroWrapper = styled.div`
  padding-top: 4rem;
  text-align: center;
  overflow: hidden;
  max-height: calc(100vh - ${({theme}) => theme.spacing[20]});
  & h1 {
    font-size: ${({theme}) => theme.fontSize.xl4[0]};
    line-height: ${({theme}) => theme.fontSize.xl4[1].lineHeight};
    font-weight: 900;
    margin-bottom: 1rem
  }
  & p {
    font-size: ${({theme}) => theme.fontSize.xl[0]};
    color: ${({theme}) => theme.text.secondary}
  }
`
const ScrollerWrapper = styled.div`
  width: 100%;
  overflow: hidden
  & svg {
    width: 100%;
  }
  & svg > circle {
    opacity: 0;
  }
`

type Props = {
  allPosts: PostType[]
}

const Index = ({allPosts}: Props) => {
  const tl = gsap.timeline({ paused: true });
  const circleRef = useRef(null);
  useEffect(() => {
    tl.set(circleRef.current, { opacity: 1 })
      .from(circleRef.current, { duration: 0.5, scale: 0, transformOrigin: 'center', ease: 'back.out' }).play()
  }, [])

  return (
    <Wrapper>
      <HeroWrapper>
        <div className="container">
          <h1>Hey, I'm Srikar</h1>
          <p>I'm a full-stack web developer and designer, living in India<br/>who love's building digital website</p>
          <ScrollerWrapper>
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle ref={circleRef} cx="12" cy="12" r="10"/></svg>
          </ScrollerWrapper>
        </div>
      </HeroWrapper>
      <Section as="section" type="invert" color="invert" py="16">
        <div className="container">
          <h2>Latest</h2>
          <ul>
            { allPosts.map((post, index) => (
              <li key={index}><Link href="/writings/[slug]" as={`/writings/${post.slug}`}><a>{ post.title }</a></Link></li>
            )) }
          </ul>
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