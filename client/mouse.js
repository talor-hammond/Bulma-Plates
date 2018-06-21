
function checkMouse (obj, mx, my) {
    let distance = Math.sqrt(Math.pow(mx-obj.cx, 2)+Math.pow(my-obj.cy, 2))-obj.r
    console.log(distance)
}
