import styled from 'styled-components'
import Nav from '../app/Nav'
import PostContainer from '../base/PostContainer'
import Comments from '../app/Comments'
import useDarkMode from 'use-dark-mode'
import PostEntry from '../app/PostEntry'

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

const PostLayout = ({ route, children }) => {
    const isDarkMode = useDarkMode(false);
    return (
        <div className="post-layout">
            <main>
                <article className="app-content">
                    <div className="container">
                        <PostContainer pd="2rem 0">
                            { children }
                        </PostContainer>
                    </div>
                    <MorePosts>
                        <div className="container">
                            <h3>Recent Posts</h3>
                            <div className="flex">
                                <PostEntry post={{
                                    title: '20 Useful JavaScript Snippets while Developing a Project',
                                    excerpt: 'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.',
                                    slug: 'twenty-useful-js-snippets',
                                    date: '2020-01-01',
                                    readingTime: '5 min'
                                }} />
                                <PostEntry post={{
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