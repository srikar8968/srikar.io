import styled from 'styled-components'
import Image from 'next/image'
import PostLayout from '@/components/layouts/Post'
import PostBody from '@/components/app/PostBody'
import { getPostBySlug, getAllPosts } from '@/lib/post'
import { format, parseISO } from 'date-fns'
import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'
import useDarkMode from 'use-dark-mode'
import PostType from '@/types/post'
import { useState } from 'react'
import { Popover } from 'react-tiny-popover'

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSize.xl5[0]};
    line-height: 3.25rem;
    font-weight: 800;
    color: ${({theme}) => theme.text.default};
    margin: 1rem 0 2rem 0;
`

type Props = {
    post: PostType
};

const Post = ({post}: Props) => {
    const isDarkMode = useDarkMode(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    // if(!router.isFallback && !post?.slug) {
    //     return <ErrorPage statusCode={404} />
    // }
    return (
        <PostLayout>
            <Head>
                <title>{ post.title } | { format(parseISO(post.date), 'yyyy') }</title>
                <link rel="stylesheet" href={`/css/prism-${ isDarkMode.value ? 'dark' : 'light' }.css`} />
            </Head>
            <div className="text-md text-light flex items-center flex-wrap">
                <span className="pr text-md">: : : : : :&nbsp;</span>
                <span>{ format(parseISO(post.date), 'MMMM dd, yyyy') }</span>
                <span className="pl pr">•</span>
                <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                    { post.readingTime }
                </span>
                <span className="pl pr">•</span>
                {/* <Popover
                    isOpen={isPopoverOpen}
                    positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                    content={<div>Hi! I'm popover content.</div>}
                    > */}
                    <button onClick={() => setIsPopoverOpen(!isPopoverOpen)} className="flex items-center">
                        share&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                    </button>
                {/* </Popover> */}
            </div>
            <Title>{post.title}</Title>
            { post.featureImage ?
                <div className="bg-light flex">
                    <Image 
                        src={`/images/posts/${post.featureImage}`} 
                        alt={post.title}
                        width={672} 
                        height={365} 
                        priority />
                </div> : null }
            <PostBody content={post.content} />
            {/* <Modal /> */}
        </PostLayout>
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

export default Post