function mouseTransform(x, y) {
    let newX = x - window.innerWidth * 0.05
    let newY = y - window.innerHeight * 0.05
    return { x: newX, y: newY }
}

function checkMouseDistance(obj, mx, my) {
    let relativeX = Number(obj.cx) - Number(mx)
    let relativeY = Number(obj.cy) - Number(my)
    let hypot = Math.sqrt(Math.pow(relativeX, 2) + Math.pow(relativeY, 2))
    
    return hypot - obj.r
}

function moveFromMouse(obj, mx, my) {
    let relativeX = Number(obj.cx) - Number(mx)
    let relativeY = Number(obj.cy) - Number(my)
    let hypot = checkMouseDistance(obj, mx, my) + obj.r

    let strength = 100000/Math.pow(hypot, 2)

    let newX = Number(obj.cx) + strength*(relativeX/hypot)
    let newY = Number(obj.cy) + strength*(relativeY/hypot)

    
    if (newX < 0 + obj.r) newX = obj.r
    else if (newX > window.innerWidth*0.9 - obj.r) newX = window.innerWidth*0.9 - obj.r

    if (newY < 0 + obj.r) newY = obj.r
    else if (newY > window.innerHeight*0.9 - obj.r) newY = window.innerHeight*0.9 - obj.r
    
    obj.cx = newX
    obj.cy = newY
}

function checkForCollision(obj1, obj2) {
    let Xdistance = obj1.cx - obj2.cx
    let Ydistance = obj1.cy - obj2.cy
    let totalDistance = Math.sqrt(Math.pow(Xdistance, 2) + Math.pow(Ydistance, 2))

    return (totalDistance < (obj1.r + obj2.r))
}

function processCollision(obj1, obj2) {
    let Xdistance = ((obj1.cx + obj2.cx) / 2) + Math.random() * 200 - 100
    let Ydistance = ((obj1.cy + obj2.cy) / 2) + Math.random() * 200 - 100
    
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