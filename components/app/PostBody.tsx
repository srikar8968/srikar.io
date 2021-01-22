import { Children } from "react"

import styled from 'styled-components'

const Wrapper = styled.div`
& .remark-highlight {
    margin: 1.25rem 0;
    background-color: ${({theme}) => theme.bg.secondary};
    border 1px solid ${({theme}) => theme.border.secondary};
    border-radius: 0.25rem;
    overflow: hidden;
    font-size: 16px
}
& code.language-unknown {
    border 1px solid ${({theme}) => theme.border.secondary};
    padding: .1em .5em;
    white-space: normal;
    font-size: 1rem;
    color: rgb(202, 108, 154);
}
& .remark-highlight pre[class*="language-"] {
    margin: 0;
    padding: 1em
}
& p, & ul {
    margin: 1.25rem 0
}
& ul {
    margin-left: 24px;
    list-style: disc
}
& a {
    color: ${({theme}) => theme.text.primary};
}
`
type Props = {
    content: string
}

const PostBody = ({content}: Props) => {
    return (
        <Wrapper className="post-content" dangerouslySetInnerHTML={{ __html: content }}></Wrapper>
    )
}
export default PostBody