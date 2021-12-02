import styled from 'styled-components'

export const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  transform: translateY(-50%);
  line-height: 1rem;
  z-index: 30;
  & > a {
    color: ${({theme}) => theme.text.secondary};
    display: inline-block;
    margin-bottom: .75rem;
    padding: 0;
	border: 1px solid;
	font-size: ${({theme}) => theme.fontSize.xs[0]};
	font-weight: 600;
	border-radius: 4rem;
	width: 16px;
	height: 16px;
	overflow: hidden;
	text-align: center;
	transition: all 0.3s ease;
	& > span {
		display: inline-block;
		transform: scale(0);
		transform-origin: center left;
		transition: all 0.3s ease;
	}
	&.active {
		color: ${({theme}) => theme.text.primary};
		border-color: ${({theme}) => theme.border.primary};
	}
  }
  & > a:hover {
	background-color: ${({theme}) => theme.bg.default};
	padding: .5rem .875rem;
	width: 90px;
	height: 34px;
	margin-left: -0.5rem;
	& > span {
		transform: scale(1);
	}
  }
`