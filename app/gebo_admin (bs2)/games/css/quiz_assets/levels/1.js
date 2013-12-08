// Purpose:	Teach the user TOP, LEFT, WIDTH and HEIGHT properties
// By: 		Matt McAlear
// Date:	12/5/13

//TO-DO:
// - Make this class the core abstract class
// - Make another class the will extend from this class that will be level specific


function cssGeometryModel(){
	this.level = 1;
	this.display = 'cssGeometryModel';
	this.baseCode = 'position: relative; background-color: black;';
	this.code = '';
	this.obj = {};
	/* object structure
		* obj.elementId.propertyValue
		* obj.elementName
	*/
}

cssGeometryModel.prototype.draw = function(code){
	document.getElementById(this.display).innerHTML = code;
	//Set Border
	document.getElementById(this.display).style.cssText = "border: 2px dashed lightcoral;padding: 10px;height: 300px;width: 300px;margin: 3%;";
	//Set Level Number
	this.setLevelDisplay();
}

cssGeometryModel.prototype.buildModel = function(){
	this.obj = {
		name: 'box1',
		box1: {
			left: '10px',
			top: '10px',
			width: '50px',
			height: '50px'
		}
	}
	
	var css = 'left:'+this.obj.box1.left+';top:'+this.obj.box1.top+';width:'+this.obj.box1.width+';height:'+this.obj.box1.height+';'+this.baseCode;
	this.code = '<div id="'+this.obj.name+'" style="'+css+'">&nbsp;</div>';
	
	this.draw(this.code);
}

cssGeometryModel.prototype.setLevelDisplay = function(){
	document.getElementById('levelNumber').innerHTML = this.level;
}

cssGeometryModel.prototype.displayCssInfo = function(e){
	var position = this.getRelativePosition(e);
	var obj1 = this.obj.box1;
	var obj1X = this.convertToFloat(obj1.left, 'px');
	var obj1Y = this.convertToFloat(obj1.top, 'px');
	var obj1W = this.convertToFloat(obj1.width, 'px');
	var obj1H = this.convertToFloat(obj1.height, 'px');
	var obj1XCenter = obj1X + (obj1W / 2);
	var obj1YCenter = obj1Y + (obj1H / 2);
	
	
	if(position.x >= obj1X 
	&& position.x <= obj1X + obj1W
	&& position.y >= obj1Y
	&& position.y <= obj1Y + obj1H){
		document.getElementById('cssInfoDisplay').style.cssText = 'display:block;';
		document.getElementById('cssInfoDisplay').innerHTML = 'Code Info: '+this.code;
	}else{
		document.getElementById('cssInfoDisplay').style.cssText = 'display:none;';
	}	
}

//Helper functions
cssGeometryModel.prototype.getRelativePosition = function(e){
	var t = document.getElementById(this.display);
	var x = e.clientX+(window.pageXOffset||0);
	var y = e.clientY+(window.pageYOffset||0);
	do
		x-=t.offsetLeft+parseInt(t.style.borderLeftWidth||0),
		y-=t.offsetTop+parseInt(t.style.borderTopWidth||0);
	while (t=t.offsetParent);
	return {
		x: x,
		y: y
	};
}

cssGeometryModel.prototype.convertToFloat = function(n, end){
	return parseFloat(n.substr(0, n.length-end.length));
}

//init class
var cssGeometryModel = new cssGeometryModel();

//init method
window.onload = function(){
	cssGeometryModel.buildModel();
	
	window.document.getElementById('cssGeometryModel').onmousemove = function(e){
		cssGeometryModel.displayCssInfo(e);
	}
}