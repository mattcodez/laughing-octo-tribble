'use strict';

function init() {
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
	
	//Use i$ like $ but for elements in iFrame
	var iFrameDoc = $('#userRender')[0].contentWindow.document;
	var i$ = (function(selector){return $(iFrameDoc).find(selector);});
	
	var updateViewer = function(newContents){
		i$('#userStyles').text(newContents);
	}
	
	editor.on('change', function(cm, change){
		updateViewer(cm.getValue());
	});
	
	CodeMirror.signal(editor, 'change', editor);
}
$(init);

var puzzles = {
	"css":{
		"intro": {
			"#eye1": {
				"goals": {
					"300":{
						"left":45,
						"top": 8
					}
				}
			},
			"#eye2": {},
			"#mouth":{}
		}
	}
};