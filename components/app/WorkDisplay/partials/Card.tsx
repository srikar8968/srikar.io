import { useEffect, useRef } from 'react'
import styles from './WorkDisplay.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import type Work from '@/types/work'

gsap.registerPlugin(ScrollTrigger);

const Card = ({item, align}: { item: Work, align: string }) => {
  	const revealContainerRef = useRef([]);
  	const revealLRef = useRef([]);
  	const revealRRef = useRef([]);
  	const tl = gsap.timeline({ 
  		paused: true,
  		defaults: {
		  	stagger: {
	          	each: 0.5,
	          	from: 'end'
	    	}
	  	}
	  });

  	const scrollEffect = (el) => ({
	    trigger: el,
	  	start: 'top bottom',
	  	end: 'top center',
	  	scrub: true
  	});

  	useEffect(() => {
  		ScrollTrigger.matchMedia({
  			"(min-width: 1024px)": () => {
  				tl.fromTo(revealLRef.current, { 
				  	x: align === 'right' ? -50 : 50, 
				  	autoAlpha: 0,
		        }, {
		        	x: 0,
		        	autoAlpha: 1,
				  	scrollTrigger: scrollEffect(revealContainerRef.current)
		        })
		        .fromTo(revealRRef.current, { 
				  	x: align === 'right' ? 50 : -50, 
				  	autoAlpha: 0,
		        }, {
		        	x: 0,
		        	autoAlpha: 1,
				  	scrollTrigger: scrollEffect(revealContainerRef.current)
		        }).play()
  			}
  		});

      	return () => tl.kill();
  	}, [])

	return (
		<div ref={revealContainerRef} className={styles.cardWrapper}>
			<Link href={item?.url}>
				<a ref={revealLRef} className={styles.mediaCol} target="_blank" rel="noreferrer">
					<Image 
						src={`/images/work-images/${item.styling?.backDrop}`} 
						alt={item?.name} 
						layout="fill"
						objectFit="cover" />
				</a>
			</Link>
			<div ref={revealRRef} className={align === 'right' ? styles.contentColR : styles.contentColL}>
				<span className={styles.headLine}>{ item?.type }</span>
				<h5 className="title-lg">{ item?.name }</h5>
				<p className={styles.desc}>{ item?.description }</p>
				<ul className={styles.tools}>
					{ item?.tools.map((tool, index) => (
						<li key={index}>#<span>{ tool }</span></li>
					)) }
				</ul>
				<Link href={item?.url}>
					<a className="txt-primary" target="_blank" rel="noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Card;