import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import PostEntry from '@/components/app/PostEntry'
import EmptyPlaceholder from '@/components/app/EmptyPlaceholder'

import EntryType from '@/types/entry'

const PostList = ({ posts }: { posts: EntryType[] } ) => {
    const postsRef = useRef([]);
    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5, delay: 0.5 } });

	useEffect(() => {
        if(posts?.length > 0) {
            tl.set(postsRef.current, { x: 80, autoAlpha: 0 })
            .to(postsRef.current, {
                x: 0,
                autoAlpha: 1,
                delay: 0.3,
                stagger: { each: 0.2, from: 'start' }
            }).play();
        }
    }, [posts]);

	return (
		<>
			{ posts?.map((post, index) => (
				<div style={{ opacity: 0 }} key={post.slug} ref={el => postsRef.current[index] = el}>
	            	<PostEntry post={post} />
            	</div>
	        )) }

            { !(posts?.length > 0) && <EmptyPlaceholder /> }
		</>
	)
}

export default PostList