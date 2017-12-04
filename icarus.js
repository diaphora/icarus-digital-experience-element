$(document).ready(function(){
    $("a").gray-tooltip();
});

$(document).ready(function(){
    $("a").black-tooltip();
});

if (window.parent && window.parent.parent){
  window.parent.parent.postMessage(["resultsFrame", {
    height: document.body.getBoundingClientRect().height,
    slug: "2htZe"
  }], "*"
