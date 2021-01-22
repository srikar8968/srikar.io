import Nav from '../app/Nav'
import PostContainer from '../base/PostContainer'

const PostLayout = ({ children }) => {
    return (
        <div className="post-layout">
            <Nav fixed={false} />
            <article className="app-content">
                <div className="container">
                    <PostContainer pd="2rem 0">
                        { children }
                    </PostContainer>
                </div>
            </article>
        </div>
    )
}

export default PostLayout