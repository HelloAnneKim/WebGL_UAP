# Learning_WebGL
## Learning WebGL (IAP 2016)

**Why:** For IAP 2016 and Spring 2016, I will be learning WebGL in order to contribute to MIT Medialab's [Starlogo Nova project](http://www.slnova.org/ "Starlogo").  The current terrain is a green square, but I would like to add image texturing.   

**Status:**  Finished.

**Scaling Details**
To scale between the canvases and the geometry, samples of different scalingConstants were used to generate the quadratic function:
scaledDistance = (42.315*(Math.pow(scalingConstant,2)))+(101.437*scalingConstant)
The samples were:
* scale: 1; 145,145 pixels from the center to the top left point of the geometry
* scale: 0.5: 62,62
* scale: 0.9: 125,125
* scale: 1.1: 161, 161
* scale 1.2: 184, 184
