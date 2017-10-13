"# est-function-time" 
var pdd = require('est-function-time');
var asycn = require('async'); //optional

// addPoint takes key optional, if key not present it take a default key
// getList to get all the points added and diff between them in milliseconds




asycn.series([

	function(callback) {
		pdd.addPoint('stage one');
		//async operation
	},
	function(callback) {
		pdd.addPoint('stage two');
		//async operation
	},
	function(callback) {
		pdd.addPoint('stage two');
		//async operation
	},
	
],function(err) {

	console.log(pdd.getList().join("\n"));
	//will print
	// stage one  ----> stage two 10
	// stage two  ----> stage three 10

});
