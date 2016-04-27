/*
Functions for Mouse detection events
*/
(function(){

var mouseDown = false;
var lastMouseX = null;
var lastMouseY = null;

function handleMouseDown(event) {
    mouseDown = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    // 2) ANNEYKIM: records the mouse coordinates and prints to console
    console.log("MouseDown x: "+lastMouseX);
    console.log("MouseDown y: "+lastMouseY);
}

function handleMouseUp(event) {
    mouseDown = false;
}

function handleMouseMove(event) {
    if (!mouseDown) {
        // ANNEYKIM: then mouse is up and not moving
        return;
    }
    // ANNEYKIM: mousemove is a mousedown type of event
    var newX = event.clientX;
    var newY = event.clientY;

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

}());