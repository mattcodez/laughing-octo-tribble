"strict"

// Purpose:	Stop watch
// By: 		Matt McAlear
// Date:	12/1/13

function stopWatch(start, miliseconds){
	this.currentTime = start * 1000;
	this.interval = 1000;
	
	this._miliseconds = miliseconds;
	this._intId = null;
	this._displayId = 'stopWatch';
}

stopWatch.prototype.start = function(){
	var that = this;
	this._intId = window.setInterval(function(){
		that.currentTime += that.interval;
		
		//Set display
		that.setDisplay();
		
	}, this.interval);
}

stopWatch.prototype.stop = function(){
	window.clearInterval(this._intId);
}

stopWatch.prototype.setDisplay = function(){
	//console.log(this.currentTime);
	var h = ("0" + Math.floor(this.currentTime / 3600000)).toString().substr(-2);
	var m = ("0" + Math.floor(this.currentTime % 3600000 / 60000)).toString().substr(-2);
	var s = ("0" + Math.floor(this.currentTime % 60000 / 1000)).toString().substr(-2);
	var ms= this.currentTime.toString().substr(-3);
	var totalSeconds = this.currentTime / 1000;
	
	document.getElementById(this._displayId).innerHTML = '<span style="font-size: 50px;font-weight: bold;">'+h+':'+m+':'+s+'</span><span id="stopWatchTotal" style="display: none;">'+totalSeconds+'</span>';
	if(this._miliseconds == true){
		document.getElementById(this._displayId).innerHTML = document.getElementById(this._displayId).innerHTML + '<span style="font-size: 20px;">'+ms+'</span>';
	}
	
}