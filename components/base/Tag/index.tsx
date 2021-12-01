import styled from 'styled-components'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    theme: [string, number],
    [x: string]: any
}

const Wrapper = styled.div`
    display: inline-block;
    padding: 0.425rem 0.75rem;
    border: 1px dashed ${({theme, tagTheme}) => theme.colors[tagTheme[0]][tagTheme[1]]};
    color: ${({theme, tagTheme}) => theme.colors[tagTheme[0]][tagTheme[1]]};
    border-radius: 0.25rem;
    margin: 0.25rem;
    font-size: ${({theme}) => theme.fontSize.sm[0]};
    font-weight: 500
`

const Tag = ({theme, children, ...props}: Props) => {
    return (
        <Wrapper tagTheme={theme}>{ children }</Wrapper>
    )
}

export default Tag