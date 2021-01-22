import styled from 'styled-components'

const Section = styled.div`
    background-color: ${({theme, type}) => theme.bg[type] || theme.bg.default};
    padding: ${({theme, py}) => theme.spacing[py] || '0rem'} 0rem;
    color: ${({theme, color}) => theme.text[color] || theme.text.default };
`

export default Section