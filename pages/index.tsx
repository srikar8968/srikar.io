import styled from 'styled-components'
import Section from '../components/base/Section'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { getAllPosts } from '../lib/post'
import Link from 'next/link'
import Image from 'next/image'
import PostContainer from '../components/base/PostContainer'

import PostType from '../types/post'

const Wrapper = styled.div`
  
`
const HeroWrapper = styled.div`
  overflow: hidden;
  min-height: calc(100vh);
  margin-top: -${({theme}) => theme.spacing[20]};
  display: flex;
  align-items: center;
  & h1 {
    font-size: ${({theme}) => theme.fontSize.xl4[0]};
    line-height: 2.75rem;
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
  const tl = gsap.timeline({ paused: true });
  
  return (
    <Wrapper>
      <HeroWrapper>
        <PostContainer>
          <h1>
            Hey, I'm&nbsp;
            <span className="text-primary">Srikar</span>.<br/>
            I'm a full-stack web developer, living in 
            <span className="ml mr"><Image src="/images/charminar.png" width={35} height={35} alt="Hyderabad, India" title="Hyderabad, India" /></span>India 
            who love's building digital website
          </h1>
          <div className="navLst flex items-center flex-wrap text-secondary">
            <Link href="/about"><a className="mr">&lt;\<span>about</span>&gt;</a></Link>
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