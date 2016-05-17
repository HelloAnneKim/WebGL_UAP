/*
Functions for drawing squares with given coordinates
*/
var squareMakingCanvas; 
var context2D; 

// parameters for size squares
var smallSide;
var largeSide;

// parameters for colors
var paintingColor = [0,0,0];
var red = [300,0.0,0.0];
var green = [0.0,300,0.0];
var blue = [0,0.0,300];
var pink = [300,0.0,300];
var white = [360,360,360];

function setupSquareMakingCanvas(canvasWidth, canvasHeight) {
    squareMakingCanvas = document.getElementById("squareMakingCanvas");
    context2D = squareMakingCanvas.getContext("2d");
    squareMakingCanvas.style.width = canvasWidth;
    squareMakingCanvas.style.height = canvasHeight;
    squareMakingCanvas.style.visibility = 'hidden';
}

function setupCornerColoringSquares(canvasWidth, canvasHeight) {
    setSmallSquare(0,0, white);
}

function setSmallSquare(x,y,[c1,c2,c3]) {
    context2D.fillStyle = 'rgb('+c1+','+c2+','+c3+')';
    context2D.fillRect(x-(smallSide/2),y-(smallSide/2),smallSide,smallSide);
}

function setLargeSquare(x,y,[c1,c2,c3]) {
    context2D.fillStyle = 'rgb('+c1+','+c2+','+c3+')';
    context2D.fillRect(x,y,largeSide,largeSide);
}

function setPaintingColor(color) {
    paintingColor = color;
}


