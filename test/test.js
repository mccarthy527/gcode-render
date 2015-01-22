var render = require("../index.js")

function fun(x,y,z){return Math.max(x*x+y*y+z*z-50,-2-z, z-4);}
var res = [100,100,100];
var size = [15,15,25];
var center = [5,0,0];


var mymesh = render(fun, res, size, center)
var mymesh2 = render(fun, res, size, [0,0,0])

var shell = require("mesh-viewer")()




var mesh

shell.on("viewer-init", function() {
  mesh = shell.createMesh(mymesh2)
})

shell.on("gl-render", function() {
  mesh.draw()
})