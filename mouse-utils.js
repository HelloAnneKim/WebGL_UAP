/*
Functions for Mouse detection events
*/
var mouseDown = false;
var lastMouseX = null;
var lastMouseY = null;

function handleMouseDown(event) {
    mouseDown = true;
    // lastMouseX = event.clientX;
    // lastMouseY = event.clientY;
    lastMouseX = event.pageX;
    lastMouseY = event.pageY;
    // 2) ANNEYKIM: records the mouse coordinates and prints to console
    console.log("MouseDown x: "+lastMouseX);
    console.log("MouseDown y: "+lastMouseY);
}

function handleMouseUp(event) {
    mouseDown = false;
}

function handleMouseMove(event) {
    if (!mouseDown) {
        return;
    }
    // var newX = event.clientX;
    // var newY = event.clientY;
    var newX = event.pageX;
    var newY = event.pageY;

    var deltaX = newX - lastMouseX
    var deltaY = newY - lastMouseY;

    lastMouseX = newX
    lastMouseY = newY;

    console.log("MouseMove x: "+lastMouseX);
    console.log("MouseMove y: "+lastMouseY);
}
function listenToMouse(canvas) {
    canvas.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
    document.onmousemove = handleMouseMove;
}
