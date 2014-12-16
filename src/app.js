require("./app.styl");
var main = require("./bundles/main.jade")();

var wrap = document.getElementsByClassName("wrapper")[0];
console.log(main);
wrap.innerHTML = main;
