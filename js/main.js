'use strict';

function init() {
    $('#userCode').keyup(codeKeyUp);
    codeKeyUp();
}

function codeKeyUp(e){
    var cssCode = $('#userCode').text();
    $('#userStyles').text(cssCode);
}

$(init);
