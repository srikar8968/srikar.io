import styled from 'styled-components'
import Image from 'next/image'
import PostLayout from '../../components/layouts/Post'
import PostBody from '../../components/app/PostBody'
import { getPostBySlug, getAllPosts } from '../../lib/post'
import { format, parseISO } from 'date-fns'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import useDarkMode from 'use-dark-mode'
import PostType from '../../types/post'
import Modal from '../../components/base/Modal'

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSize.xl5[0]};
    line-height: ${({theme}) => theme.fontSize.xl5[1].lineHeight};
    font-weight: 800;
    margin: 1rem 0 2rem 0;
`

type Props = {
    post: PostType
}

const Post = ({post}: Props) => {
    const isDarkMode = useDarkMode(false);
    
    // if(!router.isFallback && !post?.slug) {
    //     return <ErrorPage statusCode={404} />
    // }
    return (
        <>
            <Head>
                <title>{ post.title } | { format(parseISO(post.date), 'yyyy') }</title>
                <link rel="stylesheet" href={`/css/prism-${ isDarkMode.value ? 'dark' : 'light' }.css`} />
            </Head>
            <div className="text-md text-light flex items-center flex-wrap">
                <span className="pr text-md">: : : : : :&nbsp;</span>
                <span>{ format(parseISO(post.date), 'MMMM dd, yyyy') }</span>
                <span className="pl pr">•</span>
                <span>{ post.readingTime }</span>
                <span className="pl pr">•</span>
                <button className="flex items-center">
                    share&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                </button>
            </div>
            <Title>{post.title}</Title>
            { post.featureImage ?
                <div>
                    <Image 
                        src={`/images/posts/${post.featureImage}`} 
                        alt={post.title}
                        width={672} 
                        height={365} 
                        priority />
                </div> : null }
            <PostBody content={post.content} />
            {/* <Modal /> */}
        </>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({params}: Params) {
    const _post = getPostBySlug(params.slug, [
        'title',
        'date',
        'featureImage',
        'readingTime',
        'content'
    ]);
    const content = await markdownToHtml(_post.content || '');

    return {
        props: {
            post: {
                ..._post,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])
  
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }),
      fallback: false,
    }
}

Post.Layout = PostLayout

export default Post