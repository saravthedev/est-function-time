var moment = require('moment');
module.exports = function () {
    var myModule = (function (key) {
        var keysList = [];
        var timeStampList = [];
        var startPoint;
        var endPoint;
        var myObj = {};
        myObj.addStartPoint = function (key) {
            var output = myObj.addPoint(key);
            startPoint = output;
            return output;
        };
        myObj.addEndPoint = function (key) {
            var output = myObj.addPoint(key);
            endPoint = output;
            return output;
        };
        myObj.addPoint = function (key) {
            var thisTime = moment();
            if (!key) {
                key = "Stage " + keysList.length;
            }
            keysList.push(key);
            timeStampList.push(thisTime);
            return { 'key': key, 'moment': thisTime };
        }
        myObj.getList = function () {
            var ret = [];
            var max = { 'index': 0, 'amount': 0 }, min = { 'index': 0, 'amount': 0 };
            for (i = 1; i < keysList.length; i++) {
                var diff = timeStampList[i] - timeStampList[i - 1];
                var str = [
                    keysList[i - 1],
                    ' ----> ',
                    keysList[i],
                    '  ',
                    diff
                ].join("");
                ret.push(str);
                if (diff > max.amount) {
                    max.amount = diff;
                    max.index = ret.length - 1;
                }
                if (diff < min.amount) {
                    min.amount = diff;
                    min.index = ret.length - 1;
                }
            }
            ret[max.index] += "  max";
            ret[min.index] += "  min";
            if(startPoint && endPoint) {
                var diff = endPoint.moment - startPoint.moment;
                var str = [
                    'Total Time  : ',
                    startPoint.key,
                    ' ----> ',
                    endPoint.key,
                    '  ',
                    diff
                ].join("");
                ret.push(str);
            }
            return ret;
        }
        return myObj;
    })();
    return myModule;
};