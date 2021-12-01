import styled from 'styled-components'

export const Svg = styled.svg`
width: 24px;
height: 24px;
& > path, & > circle {
    opacity: 0;
    transform-origin: center
}
`