"# est-function-time" 

var pdd = require('estimate-function-time');

var asycn = require('async'); //optional




// addPoint takes key optional, if key not present it take a default key
// getList to get all the points added and diff between them in milliseconds

//addStartPoint - will add an point and consider that as start point
//addEndPoint - will add an point and consider that as end point
// if start point and end point are available , getList will give the diff of them




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
