import styled from 'styled-components'
import PostContainer from '../base/PostContainer'
import Comments from '../app/Comments'
import useDarkMode from 'use-dark-mode'
import PostEntry from '../app/PostEntry'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { ReactNode, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

const MorePosts = styled.div`
    background-color: ${({theme}) => theme.bg.light};
    padding: 2rem 0;
    shadow: ${({theme}) => theme.boxShadow.sm};
    & h3 {
        font-size: ${({theme}) => theme.fontSize.xl3[0]};
        line-height: ${({theme}) => theme.fontSize.xl3[1].lineHeight};
        color: ${({theme}) => theme.text.light};
        font-weight: 800;
        margin-bottom: 1rem;
    }
`

const AuthorWrapper = styled.div`
    margin-top: 4rem;
    padding: 4rem 0;
    border-top: 1px solid;
    border-color: ${({theme}) => theme.border.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    & h4 {
        font-size: ${({theme}) => theme.fontSize.xl2[0]};
    }
`

type Props = {
    children: ReactNode
}

const PostLayout = ({children }: Props) => {
    const isDarkMode = useDarkMode(false);
    
    useEffect(() => {
        const boxes = gsap.utils.toArray('.remark-highlight');
        boxes.forEach((box: Element) => {
            const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
            ScrollTrigger.create({
                trigger: box,
                animation: anim,
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true
            });
        });
    }, []);

    return (
        <div className="post-layout">
            <main>
                <article className="app-content">
                    <div className="container">
                        <PostContainer pd="2rem 0">
                            { children }
                            
                            <AuthorWrapper>
                                <img src="/favicon/favicon-32x32.png" alt="srikar" />
                                <h4 className="exbold mb mt">About Author</h4>
                                <p>We engineer the thoughtful transformation of great organizations. Our proven process helps us understand what your competitors are doing right — and wrong.</p>
                                <p>Want to collaborate? <a className="text-primary" href="#">Let's connect</a></p>
                            </AuthorWrapper>
                        </PostContainer>
                    </div>
                    <MorePosts>
                        <div className="container">
                            <h3>More Writings</h3>
                            <div className="flex">
                                <PostEntry gutter={false} post={{
                                    title: '20 Useful JavaScript Snippets while Developing a Project',
                                    excerpt: 'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.',
                                    slug: 'twenty-useful-js-snippets',
                                    date: '2020-01-01',
                                    readingTime: '5 min',
                                }} />
                                <PostEntry gutter={false} post={{
                                    title: 'Two Forms of Pre-rendering',
                                    excerpt: 'A deep-dive on everything I\'ve learned in the past year building style guides, design systems, component libraries, and their best practices.',
                                    slug: 'twenty-useful-js-snippets',
                                    date: '2020-02-07',
                                    readingTime: '1 min'
                                }} />
                            </div>
                        </div>
                    </MorePosts>
                    <div className="container">
                        <PostContainer pd="1rem 0">
                            <Comments theme={isDarkMode.value ? 'dark' : 'light'} />
                        </PostContainer>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default PostLayout