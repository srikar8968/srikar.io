import { ReactNode, useEffect, useRef, useState } from 'react'
import { onContainerMouseUpdate } from './utils'
import { gsap } from 'gsap'

type Props = {
    children: ReactNode,
    threshold: number,
    [x: string]: any
}

const TiltAnimateContainer = ({children, threshold, active, ...props}: Props) => {
    const containerRef = useRef(null);
    const [mounted, setIsMounted] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0, rect: {} })

    const animateEl = (rotationX: number, rotationY: number) => {
        gsap.to(containerRef.current, { 
            duration: 0.5,
            rotationY: -rotationY, 
            rotationX: rotationX, 
            ease: 'power1.out', 
            transformPerspective: 900,
            transformOrigin: 'center'
        })
    }
    const onMouseMove = (e) => {
        if(active) {
            const { rotationXValue, rotationYValue } = onContainerMouseUpdate(e, threshold, dimensions);
            animateEl(rotationXValue, rotationYValue);
        } else {
            animateEl(0, 0);
        }
    };

    useEffect(() => {
        setIsMounted(true);
        setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
            rect: containerRef.current.getBoundingClientRect()
        });

        window.addEventListener('mousemove', onMouseMove, false);

        return () => {
            window.removeEventListener('mousemove', onMouseMove, false);
        }
    }, [active]);

    

    return (
        <div {...props} ref={containerRef}>
            { children }
        </div>
    )
}

export default TiltAnimateContainer