/*
Functions for setting up the webGL
*/

var displayedCanvas;
var gl;
var program;

// shader variables
var v;
var f;
var vs;
var fs;

function setupDisplayedCanvas(canvasWidth, canvasHeight, clearColor) {
    displayedCanvas = document.getElementById("displayedCanvas");
    displayedCanvas.style.width = canvasWidth;
    displayedCanvas.style.height = canvasHeight;

    gl = displayedCanvas.getContext("experimental-webgl");
    gl.viewport(0, 0, displayedCanvas.width, displayedCanvas.height);
    gl.clearColor(clearColor[0],clearColor[1],clearColor[2],clearColor[3]); 
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function setupShaders() {
    v = document.getElementById("vertex").firstChild.nodeValue;
    f = document.getElementById("fragment").firstChild.nodeValue;
    vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, v);
    gl.compileShader(vs);
    fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, f);
    gl.compileShader(fs);
    program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    // Catch any errors
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS))
        console.log(gl.getShaderInfoLog(vs));
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS))
        console.log(gl.getShaderInfoLog(fs));
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        console.log(gl.getProgramInfoLog(program));
}



