import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import {gsap} from 'gsap'

const Gallery = styled.div`
    display: flex;
    position: relative;
    max-height: calc(100vh - ( 2 * ${({theme}) => theme.spacing[20]}));
    height: calc(100vh - ( 2 * ${({theme}) => theme.spacing[20]}));
    overflow-hidden;
    padding: 0 .5rem;
    width: 100%;
`
const GalleryItemWrapper = styled.div`
    opacity: 0;
    display: block;
    position: relative;
    flex-shrink: 0;
    margin-right: 1.25rem;
    height: calc(100vh - ( 2 * ${({theme}) => theme.spacing[20]}));
    width: 14rem;
    border-radius: 0.25rem;
    &:last-child {
        margin: 0;
    }
`
const GalleryItem = styled(GalleryItemWrapper)`
    opacity: 1;
    margin-right: 0;
    background-position: 0% 95%;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("/images/${({img}) => img}");
    background-image: url("/images/${({img}) => img}"), linear-gradient(to bottom, transparent, ${({theme}) => theme.bg.primary});
    & h2 {
        width: 100%;
        text-align: left;
        position: absolute;
        bottom: 7rem;
        right: -3.5rem;
        color: #fff;
        font-size: ${({theme}) => theme.fontSize.xl6[0]};
        font-weight: 200;
        transform: rotate(-90deg);
        transform-origin: center;
    }
`

const Item = ({item}) => {
    const bxRef = useRef(null);
    const itemRef = useRef(null);
    const mouseEnter = () => {
        gsap.to(bxRef.current, { duration: 0.3, y: -10 });
        gsap.to(itemRef.current, { duration: 0.3, y: -25 })
    }
    const mouseLeave = () => {
        gsap.to(bxRef.current, { duration: 0.3, y: 0 });
        gsap.to(itemRef.current, { duration: 0.3, y: 0 })
    }
    return (
        <Link href={item.path} passHref>
            <GalleryItem 
                as="a"
                img={item.thumb} 
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave} 
                ref={bxRef}>
                <h2 ref={itemRef}>{item.title}</h2>
            </GalleryItem>
        </Link>
    )
}

const ProfileGallery = () => {
    let bxRef = useRef([]);
    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5, delay: 0.5 } });
    const items = [
        { title: "About", path: '/about', thumb: 'about.svg' },
        { title: "Projects", path: '/projects', thumb: 'projects.svg' },
        { title: "Writings", path: '/writings', thumb: 'writings.svg' },
        { title: "Skills", path: '/skills', thumb: 'contact.svg' },
        { title: "Contact", path: '/contact', thumb: 'contact.svg' }
    ];
    useEffect(() => {
        tl.set(bxRef.current, { autoAlpha: 0, y: -150 })
          .to(bxRef.current, {
            autoAlpha: 1,
            y: 0, 
            stagger: { each: 0.25, from: 'start' } 
          }).play();
        return () => tl.kill();
    }, []);
    return (
        <ScrollContainer vertical={false} horizontal={true}>
            <Gallery>
                { items.map((item, index) => (
                    <GalleryItemWrapper key={index} ref={el => bxRef.current[index] = el}>
                        <Item key={index} item={item} />
                    </GalleryItemWrapper>
                )) }
            </Gallery>
        </ScrollContainer>
    )
}

export default ProfileGallery
