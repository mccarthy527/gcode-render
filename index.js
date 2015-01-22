"use strict"
var isosurface = require("isosurface")
module.exports = render



//fun: implicit function to render
//res: 3x1 vector, the number of samples in x,y,z directions
//size: size of the box to be rendered
//center: center point of the grid of samples. Specifies the location to render
//returns a mesh
function render(fun, res, size, center)
{
	//calculate the bounds based on size.
	var bounds = [[-size[0]/2,-size[1]/2,-size[2]/2],[size[0]/2,size[1]/2,size[2]/2]];	
	console.log(size);
	console.log(bounds);
	
	function implicitwrapper(x,y,z){return fun(x+center[0],y+center[1],z+center[2]);}
	
	//TODO:
	//to take center into account, we will move the function rather than moving the bounds.  This way the model will be centered about the origin which will make it easier to rotate, finding the mesh, etc in the display.
	
	return isosurface.surfaceNets(res, implicitwrapper, bounds ) 
}


//function add(a,b){return [a[0]+b[0],a[1]+b[1],a[2]+b[2]];}	//add two 3d vectors

