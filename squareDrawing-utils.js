/*
Functions for drawing squares with given coordinates
*/
var squaremakingcanvas; 
var context2D; 

function setupSquareMakingCanvas() {
    squaremakingcanvas = document.getElementById("squaremakingcanvas");
    context2D = squaremakingcanvas.getContext("2d");
}

function setSmallSquare(x,y,[c1,c2,c3]) {
    console.log("Drawing setSmallSquare: "+x + ", "+y);
    console.log("Drawing setSmallSquare color: "+'rgb('+c1+','+c2+','+c3+')');
    context2D.fillStyle = 'rgb('+c1+','+c2+','+c3+')';
    context2D.fillRect(x,y,10,10);
}

function setLargeSquare(x,y,[c1,c2,c3]) {
    context2D.fillStyle = 'rgb('+c1+','+c2+','+c3+')';
    context2D.fillRect(x,y,100,100);
}


