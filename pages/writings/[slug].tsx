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

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSize.xl4[0]};
    line-height: ${({theme}) => theme.fontSize.xl4[1].lineHeight};
    font-weight: 800;
    margin: .875rem 0 1.5rem 0;
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
                <span>{ format(parseISO(post.date), 'MMMM dd, yyyy') }</span>
                <span className="pl pr">•</span>
                <span>{ post.readingTime }</span>
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