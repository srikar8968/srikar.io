import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

import { Wrapper } from './partials/styles'

type Props = {
    pathname: string
}

const Menu = ({ pathname }: Props) => {
	const links = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Writings',
			path: '/writings'
		},
		{
			name: 'Contact',
			path: '/contact'
		},
	];
	const linkRef = useRef([null]);
	const tl = gsap.timeline({ paused: true, defaults: { duration: 0.6 } });

	useEffect(() => {
		tl.set(linkRef.current, { x: -100 })
		  	.to(linkRef.current, {
			  	x: 0,
				delay: 0.5,
			  	stagger: { each: 0.2, from: 'start' }
		  	}).play();
	}, [pathname]);

	return (
		<Wrapper>
			{ links.map((link, index) => (
				<Link key={index} href={ link.path }>
					<a className={ pathname == link.path ? 'active' : null } ref={el => linkRef.current[index] = el}>
						<span>{ link.name }</span>
					</a>
				</Link>
			)) }
		</Wrapper>
	)
}

export default Menu