import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import PostContainer from '@/components/base/PostContainer'
import PostEntry from '@/components/app/PostEntry'
import PageHeader from '@/components/base/PageHeader'
import EmptyBox from '@/components/base/EmptyBox'
import SearchBox from '@/components/app/SearchBox'
import { getAllPosts } from '@/lib/post'
import PostType from '@/types/entry'

type Props = {
    posts: PostType[]
};

const Writings = ({posts}: Props) => {
    const [searchValue, setSearchValue] = useState('');
    const postsRef = useRef([]);
	const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5 } });

    const filteredPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    useEffect(() => {
        if(filteredPosts.length > 0) {
            tl.set(postsRef.current, { x: 80, autoAlpha: 0 })
            .to(postsRef.current, {
                x: 0,
                autoAlpha: 1,
                delay: 0.3,
                stagger: { each: 0.2, from: 'start' }
            }).play();
        }
    }, [filteredPosts]);

    return (
        <div className="pb mb">
            <div className="container">
                <PostContainer pd="0 0 1rem 0">
                    <PageHeader 
                        title="My Writings" 
                        description="Here are my writings based on design, development, and building excellent web applications." />
                    <SearchBox onSearchEnter={(val) => setSearchValue(val)} />
                    <div className="pt mt pb mb">
                        { filteredPosts?.map((post, index) => (
                            <div key={post.slug} ref={el => postsRef.current[index] = el}>
                                <PostEntry post={post} />
                            </div>
                        )) }
                        { !(filteredPosts.length > 0) && <EmptyBox /> }
                    </div>
                </PostContainer>
            </div>
        </div>
    )
}

export default Writings

export const getStaticProps = async () => {
    const posts = getAllPosts([
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

