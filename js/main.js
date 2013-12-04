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
			autofocus:		true,
			tabSize:		2
		}
	);
	
	editor.on('change', function(cm, change){
		updateViewer(cm.getValue());
	});
	
	CodeMirror.signal(editor, 'change', editor);
}

function updateViewer(newContents){
   $('#userRender')[0].contentWindow.document.getElementById('userStyles').innerText = newContents;
}

$(init);