import styled from 'styled-components'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Button from '../base/Button'
import Link from 'next/link'

const Wrapper = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background-color: ${({theme}) => theme.bg.primary};
	opacity: 0;
	visibility: hidden;
	z-index: 50;
	overflow: hidden;
`
const SlideInWrapper = styled(Wrapper)`
	background-color: ${({theme}) => theme.bg.invert};
	left: auto;
	right: 0;
`
const Close = styled(Button)`
	position: absolute;
	right: 0;
	top: 50%;
	text-align: center;
	padding: 1rem;
	height: 6rem;
	width: 6rem;
	border-top-left-radius: 4rem;
	border-bottom-left-radius: 4rem;
	opacity: 0;
	visibility: hidden;
`
const Body = styled.ul`
	padding: 6rem 8rem;
	text-align: center;
	& li > a {
		display: inline-block;
		font-size: ${({theme}) => theme.fontSize.xl8[0]};
		font-weight: 900;
		margin: 1.5rem 0;
		opacity: 0.5;
		&:hover {
			opacity: 1;
			color: inherit
		}
	}
`

type Props = {
	open: boolean,
	onClose: Function
}

const Menu = ({open, onClose}: Props) => {
	const tl = gsap.timeline({ paused: true, defaults: { duration: 0.6 } });
	const menuBgRef = useRef(null);
	const menuRef = useRef(null);
	const closeBtnRef = useRef(null);
	// useEffect(() => { tl.to(menuRef.current, { xPercent: 0 }).reversed(true).paused(false) }, []);
	useEffect(() => {
		if(open) tl.to(menuBgRef.current, { autoAlpha: 1, duration: 0.1 });
		tl.fromTo(menuBgRef.current, { xPercent: open ? -110 : 0 }, { xPercent: open ? 0 : -110 });

		if(open) tl.to(menuRef.current, { autoAlpha: 1, duration: 0.1 });
		tl.fromTo(menuRef.current, { xPercent: open ? 0 : +110 }, { xPercent: open ? +110 : 0 });

		tl.fromTo(closeBtnRef.current, { xPercent: +100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1 });

		if(!open) tl.reverse();
		tl.play()
	}, [open]);

	return (
		<Wrapper ref={menuBgRef}>
			<Close ref={closeBtnRef} onClick={onClose}>CLOSE</Close>
			<SlideInWrapper ref={menuRef} />
			<Body>
				<li><Link href="/"><a>Home</a></Link></li>
				<li><Link href="/"><a>About</a></Link></li>
				<li><Link href="/"><a>Writings</a></Link></li>
				<li><Link href="/"><a>Work</a></Link></li>
			</Body>
		</Wrapper>
	)
}

export default Menu