import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import PostType from '@/types/entry'
import { Wrapper } from './partials/styles'

type Props = {
    post: PostType,
    gutter?: Boolean
};

const PostEntry = ({post, gutter = true}: Props) => {
    return (
        <Link href="/writings/[slug]" as={`/writings/${post.slug}`} passHref>
            <Wrapper gutter={gutter}>
                <h5>{ post?.title }</h5>
                <p className="text-secondary text-md">{ post?.excerpt }</p>
                <div className="post-meta text-light flex items-center flex-wrap">
                    <span className="pr text-md">: : : : : :&nbsp;</span>
                    <span>{ format(parseISO(post.date), 'MMMM dd, yyyy') }</span>
                    <span className="pl pr">•</span>
                    <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                        { post.readingTime }
                    </span>
                </div>
            </Wrapper>
        </Link>
    )
}

export default PostEntry