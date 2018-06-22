function mouseTransform(x, y) {
    let newX = x - window.innerWidth * 0.05
    let newY = y - window.innerHeight * 0.05
    return { x: newX, y: newY }
}

function checkMouseDistance(obj, mx, my) {
    let relativeX = obj.cx - mx
    let relativeY = obj.cy - my
    let hypot = Math.sqrt(Math.pow(relativeX, 2) + Math.pow(relativeY, 2))

    return hypot - obj.r
}

function moveFromMouse(obj, mx, my) {
    let relativeX = obj.cx - mx
    let relativeY = obj.cy - my
    let hypot = checkMouseDistance(obj, mx, my) + obj.r

    // let strength = 1/Math.pow(hypot, 2)
    strength = 1

    let newX = obj.cx + strength*(relativeX/hypot)
    let newY = obj.cy + strength*(relativeY/hypot)

    console.log({newX, newY});
    
    return {cx: newX, cy: newY}
}

function checkForCollision(obj1, obj2) {
    let Xdistance = obj1.cx - obj2.cx
    let Ydistance = obj1.cy - obj2.cy
    let totalDistance = Math.sqrt(Math.pow(Xdistance, 2) + Math.pow(Ydistance, 2))

    return (totalDistance < (obj1.r + obj2.r))
}

function processCollision(obj1, obj2) {
    let Xdistance = (obj1.cx + obj2.cx) / 2
    let Ydistance = (obj1.cy + obj2.cy) / 2
    
    let newObj = { cx: Xdistance, cy: Ydistance }
    
    return newObj
}

module.exports = {
    mouseTransform,
    checkForCollision,
    processCollision,
    checkMouseDistance,
    moveFromMouse
}