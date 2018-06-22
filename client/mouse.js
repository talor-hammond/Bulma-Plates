function mouseTransform(x, y) {
    let newX = x - window.innerWidth * 0.05
    let newY = y - window.innerHeight * 0.05
    return { x: newX, y: newY }
}

function checkMouseDistance(obj, mx, my) {
    let relativeX = obj.cx - mx
    let relativeY = obj.cy - my
    let hypot = Math.sqrt(Math.pow(relativeX, 2) + Math.pow(relativeY, 2))

    return hypot
}

function moveFromMouse(obj, mx, my) {
    let relativeX = obj.cx - mx
    let relativeY = obj.cy - my
    let hypot = checkMouseDistance(obj, mx, my)

    let strength = 1/Math.pow(hypot, 2)

    let newX = obj.cx + strength*(relativeX/hypot)
    let newY = obj.cy + strength*(relativeY/hypot)

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

// let obj1 = {
//     cx: 200,
//     cy: 200,
//     r: 50
// }

// let obj2 = {
//     cx: 200,
//     cy: 299,
//     r: 50
// }

// console.log(processCollision(obj1, obj2))

module.exports = {
    mouseTransform,
    checkForCollision,
    processCollision,
    checkMouseDistance,
    moveFromMouse
}