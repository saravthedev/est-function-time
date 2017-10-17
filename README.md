# est-function-time 

est-function-time is to estimate time taken by the code. you can add points at any line of the code and check the time taken between the points.

## Examples

```
var eft = require('est-function-time');
var checkSet = eft();
asycn.series([
	function(callback) {
		checkSet.addStartPoint('stage one');
		//async operation
	},
	function(callback) {
		checkSet.addPoint('stage two');
		//async operation
	},
	function(callback) {
		checkSet.addEndPoint('stage three');
		//async operation
	},
],function(err) {
	console.log(checkSet.getList().join("\n"));
	//will print
	// stage one  ----> stage two 10
	// stage two  ----> stage three 10
	//Total Time  : stage one ----> stage three  8760
});
```

## Options

* addPoint - will add a point with the key given
* addStartPoint - will add a point and consider that is the starting point 
* addEndPoint - will add a point and consider that is the end point 
* getList - will give you array of info time taken between each points. It will give Total Time info if start point & end point are added.