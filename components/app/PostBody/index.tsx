import PostCss from '@/styles/PostCss'

type Props = {
    content: string
}

const PostBody = ({content}: Props) => {
    return (
        <PostCss className="post-content" dangerouslySetInnerHTML={{ __html: content }}></PostCss>
    )
};
export default PostBody