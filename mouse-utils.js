/*
Functions for Mouse detection events
*/
var mouseDown = false;
var lastMouseX = null;
var lastMouseY = null;

function handleMouseDown(event) {
    mouseDown = true;
    lastMouseX = event.pageX;
    lastMouseY = event.pageY;
}

function handleMouseUp(event) {mouseDown = false;}

function handleMouseMove(event) {
    if (!mouseDown) {
        return;
    }

    var newX = event.pageX;
    var newY = event.pageY;

    var deltaX = newX - lastMouseX
    var deltaY = newY - lastMouseY;

    lastMouseX = newX
    lastMouseY = newY;
}
function listenToMouse(canvas) {
    canvas.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
    document.onmousemove = handleMouseMove;
}
