import styled from 'styled-components'

export const Wrapper = styled.a`
display: block;
width: 100%;
padding: .875rem;
margin: 0 ${({gutter}) => gutter ? '-0.875rem' : '0'};
text-align: left;
border-radius: .25rem;
transition: none;
&:hover {
    background-color: ${({theme}) => theme.bg.light};
    color: ${({theme}) => theme.text.default};
}
& h5 {
    font-size: ${({theme}) => theme.fontSize.xl[0]};
    line-height: ${({theme}) => theme.fontSize.xl[1].lineHeight};
    font-weight: 600
}
& .post-meta {
    font-size: ${({theme}) => theme.fontSize.sm[0]};
    margin-top: 0.125rem
}
`