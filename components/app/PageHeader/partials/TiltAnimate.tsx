import { ReactNode, useEffect, useRef } from 'react'
import { onMouseUpdate, onAccelerometerUpdate } from './utils'
import { gsap } from 'gsap'

type Props = {
    children: ReactNode,
    threshold: number,
    [x: string]: any
}

const TiltAnimate = ({children, threshold, ...props}: Props) => {
    const containerRef = useRef(null);

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
        const { rotationXValue, rotationYValue } = onMouseUpdate(e, threshold);
        animateEl(rotationXValue, rotationYValue);
    };
    const onDeviceMove = (e) => {
        const { xPosition, yPosition } = onAccelerometerUpdate(e);
        animateEl(xPosition, yPosition)
    };

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove, false);
        if (window.DeviceMotionEvent != undefined) {
            window.addEventListener('devicemotion', onAccelerometerUpdate, false);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove, false);
            if(window.DeviceMotionEvent != undefined) {
                window.removeEventListener('devicemotion', onAccelerometerUpdate, false);
            }
        }
    }, []);

    

    return (
        <div {...props} ref={containerRef}>
            { children }
        </div>
    )
}

export default TiltAnimate