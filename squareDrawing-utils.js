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

function setupSquareMakingCanvas(canvasWidth, canvasHeight) {
    squareMakingCanvas = document.getElementById("squareMakingCanvas");
    context2D = squareMakingCanvas.getContext("2d");
    squareMakingCanvas.style.width = canvasWidth;
    squareMakingCanvas.style.height = canvasHeight;
    squareMakingCanvas.style.visibility = 'hidden';
}

function setupCornerColoringSquares(canvasWidth, canvasHeight) {
    setLargeSquare(0,0, red);
    setLargeSquare(canvasWidth-largeSide,0,green);
    setLargeSquare(0,canvasHeight-largeSide, blue);
    setLargeSquare(canvasWidth-largeSide,canvasHeight-largeSide, pink);
}

function setSmallSquare(x,y,[c1,c2,c3]) {
    console.log("Drawing setSmallSquare: "+x + ", "+y);
    console.log("Drawing setSmallSquare color: "+'rgb('+c1+','+c2+','+c3+')');
    context2D.fillStyle = 'rgb('+c1+','+c2+','+c3+')';
    context2D.fillRect(x,y,smallSide,smallSide);
}

function setLargeSquare(x,y,[c1,c2,c3]) {
    context2D.fillStyle = 'rgb('+c1+','+c2+','+c3+')';
    context2D.fillRect(x,y,largeSide,largeSide);
}

function setPaintingColor(color) {
    paintingColor = color;
}


