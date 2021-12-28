import Head from 'next/head'
import Image from 'next/image'
import PostLayout from '@/components/layout/Post'
import Meta from '@/components/app/PostEntry/partials/Meta'
import UserCard from '@/components/app/UserCard'
import useDarkMode from 'use-dark-mode';
import { format, parseISO } from 'date-fns'
import { getPostBySlug, getPostSlugs } from '@/lib/post'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import { useRouter } from "next/router";

import { GetStaticPaths, GetStaticProps } from 'next'
import type { NextPage } from 'next'
import type PostType from '@/types/post'

import styles from '@/styles/Post.module.css'

const Post: NextPage = ({ post }: { post: PostType }) => {
    const site = "https://srikar-io-srikar8968.vercel.app/";
    const ogUrl = site + useRouter().asPath;
    const darkMode = useDarkMode();
    const MDXComponent = useMemo(() => getMDXComponent(post.content), [post.content])

    return (
        <div className={`post post-${post.slug}`}>
            <Head>
                <title>{ post.title } | Srikar Panuganti</title>
                <meta name="description" content={ post.excerpt } />
                <meta name="author" content="Srikar Panuganti" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content={ post.title } />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={ ogUrl }/>
                <meta property="og:description" content={ post.excerpt } />
                <meta property="og:site_name" content="Srikar Panuganti" />
                <meta property="og:image" content={ post?.featureImage ? `${site}images/posts/${post.featureImage}` : 'logo-ic.png' } />

                <link rel="stylesheet" href={`/css/code/prism-${ darkMode.value ? 'coldark-dark' : 'one-light' }.css`} />
            </Head>
            <div className={styles.postSingle}>
                <div className="post-container">

                    <UserCard />
                    <Meta post={post} single={true} />

                    <h1 className={styles.title}>{post.title}</h1>

                    { post.featureImage ?
                        <div className="">
                            <Image 
                                src={`/images/posts/${post.featureImage}`} 
                                alt={post.title}
                                width={672} 
                                height={365} 
                                layout="responsive" />
                        </div> : null 
                    }

                    <PostLayout>
                        <MDXComponent />
                    </PostLayout>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }: { slug: string }) => {
    const post = await getPostBySlug(params.slug, [
        'title',
        'date',
        'excerpt',
        'featureImage',
        'readingTime',
        'content'
    ]);

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getPostSlugs()

    return {
      paths: slugs.map((slug) => {
        return {
          params: {
            slug: slug.replace(/\.md$/, ''),
          },
        }
      }),
      fallback: false,
    }
}

export default Post