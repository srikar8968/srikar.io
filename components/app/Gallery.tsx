import styled from 'styled-components'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useRef } from 'react'
import WorkType from '../../types/work'

const Wrapper = styled.div`
	display: flex;
	align-items: stretch;
	padding: 2rem 0;
`
const GalleryItem = styled.div`
	display: block;
	width: 33%;
	position: relative;
	margin: 0 .5rem;
	overflow: hidden;
	border-radius: 0.25rem;
	& .bg-overlay {
		& img { 
			background-color: ${({theme}) => theme.bg.secondary}; 
			opacity: ${({theme}) => (theme.mode == 'dark') ? '0.2' : '0.6' }
		}
	}
	& .overlay{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 1rem;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		color: #fff;
		overflow: hidden;
		& img {
			opacity: 0.8
		}
		&.otxt{
			transform: translateY(280px);
			background-color: ${({theme}) => theme.bg.default};
			color: ${({theme}) => theme.text.default};
			opacity: 0.9;
			backdrop-filter: blur(2px;);
			padding: 0 2rem;
		}
	}
`

type ItemProps = {
	item: WorkType
}

const Item = ({item}: ItemProps) => {
	const overlayRef = useRef();
	const logoRef = useRef();
	const screenRef = useRef();
	const onHoverEnter = () => {
		gsap.to(overlayRef.current, { y: 0 });
		gsap.to(logoRef.current, { y: -280, scale: 0.5 });
	}
	const onHoverLeave = () => {
		gsap.to(overlayRef.current, { y: 280 });
		gsap.to(logoRef.current, { y: 0, scale: 1 });
	}

	return (
		<GalleryItem 
			onMouseEnter={onHoverEnter}
			onMouseLeave={onHoverLeave}
			as="a" 
			href={item.url} 
			target="_blank" 
			rel="nofollow">
			<div className="bg-overlay" ref={screenRef}>
				<Image 
					src={`/images/work-images/${item.screens[0]}`}
					alt={ item.name }
					width={510}
					height={280} />
			</div>
			<div className="overlay" ref={logoRef}>
				<Image
					src={`/images/work-images/${item.logo}`}
					alt={`${item.name} logo`}
					width={180}
					height={50} />
			</div>
			<div className="overlay otxt" ref={overlayRef}>
				{item.description}
			</div>
		</GalleryItem>
	)
}

type ListProps = {
	items: WorkType[]
}

const Gallery = ({items}: ListProps) => {
	return (
		<Wrapper>
			{ items.map((item,index) => (
				<Item item={item} key={index} />
			)) }
		</Wrapper>
	)
}

export default Gallery