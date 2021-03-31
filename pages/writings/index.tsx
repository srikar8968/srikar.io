import { getAllPosts } from '../../lib/post'
import PostType from '../../types/post'
import PostContainer from '../../components/base/PostContainer'
import PostEntry from '../../components/app/PostEntry'
import PageHeader from '../../components/base/PageHeader'

type Props = {
    posts: PostType[]
}

const Writings = ({posts}: Props) => {
    return (
        <div className="pb mb">
            <div className="container text-center">
                <PostContainer pd="1rem 0">
                    <PageHeader 
                    title="My Writings" 
                    description="Here are my writings based on design, development, and building excellent web applications." />
                    <div className="pt mt">
                        { posts?.map(post => (
                            <PostEntry key={post.slug} post={post} />
                        )) }
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

