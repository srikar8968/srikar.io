import { useEffect, useRef, useState } from 'react'
import { getAllPosts } from '@/lib/post'
import PageHeader from '@/components/app/PageHeader'
import PostList from '@/components/app/PostList'
import Search from '@/components/app/Search'
import Head from 'next/head'

import { GetStaticProps } from 'next'
import type EntryType from '@/types/entry'
import type { NextPage } from 'next'


const Writings: NextPage = ({posts}: { posts: EntryType[] }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(() => {
        const _posts = posts
            .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
            .filter((post) =>
              post.title.toLowerCase().includes(searchValue.toLowerCase())
            );
        setFilteredPosts(_posts);
    }, [searchValue]);

    return (
        <>
            <Head>
                <title>Writings | Srikar Panuganti</title>
                <meta name="description" content="My Weekly Writings on different Technologies in our current era" />
            </Head>
            <div className="pb mb">
                <div className="post-container">
                    <PageHeader 
                        title="My Writings"
                        description="Here are my writings based on design, development, and building excellent web applications."/>
                    <Search onSearchEnter={(val) => setSearchValue(val)} />
                    <PostList posts={filteredPosts} />
                </div>
            </div>
        </>
    )
}

export default Writings

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts([
        'title',
        'date',
        'slug',
        'readingTime',
        'excerpt'
    ]);

    return {
        props: {
            posts
        }
    }
}

