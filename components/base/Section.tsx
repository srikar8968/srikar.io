import styled from 'styled-components'

const Section = styled.div`
    background-color: ${({theme, type}) => theme.bg[type] || 'transparent'};
    padding-top: ${({theme, pt}) => theme.spacing[pt] || '0rem'};
    padding-bottom: ${({theme, pb}) => theme.spacing[pb] || '0rem'};
    padding-left: ${({theme, pl}) => theme.spacing[pl] || '0rem'};
    padding-right: ${({theme, pr}) => theme.spacing[pr] || '0rem'};
    color: ${({theme, color}) => theme.text[color] || theme.text.default };
`

export default Section