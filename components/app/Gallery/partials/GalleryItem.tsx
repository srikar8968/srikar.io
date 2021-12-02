import Image from 'next/image'
import { gsap } from 'gsap'
import { useRef } from 'react'
import WorkType from '@/types/work'
import { Item } from './styles'

type ItemProps = {
	item: WorkType
}

const GalleryItem = ({item}: ItemProps) => {
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
		<Item 
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
		</Item>
	)
}

export default GalleryItem