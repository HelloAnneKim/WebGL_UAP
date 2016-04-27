(function() {

var context2D = document.createElementById("squaremakingcanvas");

function setSmallSquare(x,y,color) {
    var c1 = color[0];
    var c2 = color[1];
    var c3 = color[2];

    context2D.fillStyle = 'rgb('+c1+','+c2+','+c3+')';
    context2D.fillRect(x,y,10,10)
}

function setLargeSquare(x,y,color) {
    var c1 = color[0];
    var c2 = color[1];
    var c3 = color[2];

    context2D.fillStyle = 'rgb('+c1+','+c2+','+c3+')';
    context2D.fillRect(x,y,100,100)
}

}());