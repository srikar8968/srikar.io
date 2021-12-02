import styled from 'styled-components'

const Button = styled.button`
	display: inline-block;
	background-color: ${({theme}) => theme.bg.invert};
	color: ${({theme}) => theme.text.invert};
	padding: 0.75rem 1.25rem;
	font-size: ${({theme}) => theme.fontSize.sm[0]};
	&:hover {
		color: ${({theme}) => theme.text.invert};
	}
`

export default Button