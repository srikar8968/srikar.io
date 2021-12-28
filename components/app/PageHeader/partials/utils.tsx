export const onAccelerometerUpdate = (e) => {
    var aX = e.accelerationIncludingGravity.x*1;
    var aY = e.accelerationIncludingGravity.y*1;
    var aZ = e.accelerationIncludingGravity.z*1;
    //The following two lines are just to calculate a
    // tilt. Not really needed. 
    var xPosition = Math.atan2(aY, aZ) * 20;
    var yPosition = Math.atan2(aX, aZ) * 20;
    
    xPosition = Math.round(xPosition * 1000) / 1000;
    yPosition = Math.round(yPosition * 1000) / 1000;
    
    return { xPosition, yPosition }
}
export const onMouseUpdate = (e, threshold) => {
    const _w = window.innerWidth;
    const _h = window.innerHeight;
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    const xPos = (mouseX / _w) - 0.5;
    const yPos = (mouseY / _h) - 0.5;
    const rotationYValue = (threshold || 20) * xPos;
    const rotationXValue = (threshold || 20) * yPos;
    
    return { rotationXValue, rotationYValue }
}

export const onContainerMouseUpdate = (e, threshold, dimensions) => {
    const _w = dimensions.width;
    const _h = dimensions.height;
    const rect = dimensions.rect;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPos = (mouseX / _w) - 0.5;
    const yPos = (mouseY / _h) - 0.5;
    const rotationYValue = (threshold || 20) * xPos;
    const rotationXValue = (threshold || 20) * yPos;
    
    return { rotationXValue, rotationYValue }
}