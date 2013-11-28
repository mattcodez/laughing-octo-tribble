'use strict';

function init() {
    //$('#userCode').keyup(codeKeyUp);
    //codeKeyUp();
	
	var myCodeMirror = CodeMirror(
		function(el) {
			$('#userCode').replaceWith(el);
		}, 
		{value: $('#userCode').text()}
	);
}

function codeKeyUp(e){
    var cssCode = $('#userCode').text();
    $('#userStyles').text(cssCode);
}

$(init);