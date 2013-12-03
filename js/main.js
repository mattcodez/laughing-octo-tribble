'use strict';

function init() {
    //$('#userCode').keyup(codeKeyUp);
    //codeKeyUp();
	
	var editor = CodeMirror(
		function(el) {
			$('#userCode').replaceWith(el);
		}, 
		{
			mode:			'css',
			value: 			$('#userCode').text(),
			lineNumbers:	true,
			autofocus:		true
		}
	);
	
	editor.on('change', function(cm, change){
		updateViewer(cm.getValue());
	});
}

function updateViewer(newContents){
   $('#userRender')[0].contentWindow.document.getElementById('userStyles').innerText = newContents;
}

$(init);