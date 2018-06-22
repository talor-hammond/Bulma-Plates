
function checkMouse (obj, mx, my) {
    let distance = Math.sqrt(Math.pow(mx-obj.cx, 2)+Math.pow(my-obj.cy, 2))-obj.r
    console.log(distance)
}

 function mouseTransform(x, y) {
    let newX = x - window.innerWidth*0.05
    let newY = y - window.innerHeight*0.05
    return {x: newX, y: newY}
  }

  module.exports = {
      checkMouse,
      mouseTransform
  }