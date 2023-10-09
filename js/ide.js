let editor;

window.onload=function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}

function onchangeLanguage(){
    if(language =='c' || language == 'cpp')editor.session.mode("ace/mode/c_cpp");
    else if(language =='python')editor.session.mode("ace/mode/python");
    else if(language =='java')editor.session.mode("ace/mode/java");
}

function executeCode (){

    $.ajax({

    url: "/ide/app/compiler.php",

    method: "POST",

    data: {
    language: $("#languages") .val(),
    code: editor.getSession().getValue()
    },

    success: function (response) {
    $(".output"). text (response)}
})
}