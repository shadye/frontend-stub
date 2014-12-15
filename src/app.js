var index = require("./bundles/index/index.jade")();

window.onload = function() {
	document.body.innerHTML = index;
};

if (module.hot) {
	module.hot.accept();
};