// Purpose:	Teach the user TOP, LEFT, WIDTH and HEIGHT properties
// By: 		Matt McAlear
// Date:	12/5/13

function cssGeometryModel(){
	this.display = 'cssGeometryModel';
	this.baseCode = 'position: absolute; background-color: black;';
	this.code = '';
	this.obj = {};
	/* object structure
		* obj.elementId.propertyValue
		* obj.elementName
	*/
}

cssGeometryModel.prototype.draw = function(code){
	console.log(code);
	document.getElementById(this.display).innerHTML = code;
}

cssGeometryModel.prototype.buildModel = function(){
	this.obj = {
		name: 'box1',
		box1: {
			left: 10,
			top: 10,
			width: 50,
			height: 50
		}
	}
	
	var css = 'left:'+this.obj.box1.left+';top:'+this.obj.box1.top+';width:'+this.obj.box1.width+';height:'+this.obj.box1.height+';'+this.baseCode;
	this.code = '<div id="'+this.obj.name+'" style="'+css+'">&nbsp;</div>';
	
	this.draw(this.code);
}

//init class
var cssGeometryModel = new cssGeometryModel();

//init method
window.onload = function(){
	cssGeometryModel.buildModel();
}