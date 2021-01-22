import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import styled from 'styled-components'
import PostType from '../../types/post'

const Wrapper = styled.a`
    display: block;
    padding: .875rem;
    margin: 0 -0.875rem;
    text-align: left;
    border-radius: .25rem;
    transition: none;
    &:hover {
        background-color: ${({theme}) => theme.bg.light};
        color: ${({theme}) => theme.text.secondary};
        box-shadow: ${({theme}) => theme.boxShadow.DEFAULT}
    }
    & h2 {
        font-size: ${({theme}) => theme.fontSize.xl[0]};
        line-height: ${({theme}) => theme.fontSize.xl[1].lineHeight};
        font-weight: 700
    }
    & .post-meta {
        font-size: ${({theme}) => theme.fontSize.sm[0]};
        margin-top: 0.125rem
    }
`

type Props = {
    post: PostType
}

const PostEntry = ({post}: Props) => {
    return (
        <Link href="/writings/[slug]" as={`/writings/${post.slug}`} passHref>
            <Wrapper>
                <h2>{ post?.title }</h2>
                <p className="text-secondary">{ post?.excerpt }</p>
                <div className="post-meta text-light flex items-center flex-wrap">
                    <span className="pr text-md">: : : : : :&nbsp;</span>
                    <span>{ format(parseISO(post.date), 'MMMM dd, yyyy') }</span>
                    <span className="pl pr">•</span>
                    <span>{ post.readingTime }</span>
                </div>
            </Wrapper>
        </Link>
    )
}

export default PostEntry