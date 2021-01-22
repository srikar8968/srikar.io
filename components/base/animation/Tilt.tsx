import styled from 'styled-components'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden
`

const Tilt = ({children, threshold, ...props}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('mousemove', onMouseUpdate, false);
        if (window.DeviceMotionEvent != undefined) {
            window.addEventListener('devicemotion', onAccelerometerUpdate, false);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseUpdate, false);
            if(window.DeviceMotionEvent != undefined) {
                window.removeEventListener('devicemotion', onAccelerometerUpdate, false);
            }
        }
    }, []);

    const onAccelerometerUpdate = (e) => {
        var aX = e.accelerationIncludingGravity.x*1;
        var aY = e.accelerationIncludingGravity.y*1;
        var aZ = e.accelerationIncludingGravity.z*1;
        //The following two lines are just to calculate a
        // tilt. Not really needed. 
        var xPosition = Math.atan2(aY, aZ) * 20;
        var yPosition = Math.atan2(aX, aZ) * 20;
        
        xPosition = Math.round(xPosition * 1000) / 1000;
        yPosition = Math.round(yPosition * 1000) / 1000;
        
        animate(xPosition, yPosition);
    }
    const onMouseUpdate = (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        const xPos = (mouseX / window.innerWidth) - 0.5;
        const yPos = (mouseY / window.innerHeight) - 0.5;
        const rotationYValue = threshold * xPos;
        const rotationXValue = threshold * yPos;
        animate(rotationXValue, rotationYValue)
    }

    const animate = (rotationX: number, rotationY: number) => {
        gsap.to(containerRef.current, { 
            duration: 0.5,
            rotationY: -rotationY, 
            rotationX: rotationX, 
            ease: 'power1.out', 
            transformPerspective: 900,
            transformOrigin: 'center'
        })
    }

    return (
        <Wrapper {...props} ref={containerRef} >
            { children }
        </Wrapper>
    )
}

export default Tilt