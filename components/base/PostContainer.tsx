import styled from 'styled-components'

const PostContainer = styled.div`
    width: 100%;
    max-width: 672px;
    margin: 0 auto;
    padding: ${({pd}) => pd || '0'};
`

export default PostContainer