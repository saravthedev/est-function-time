var moment = require('moment');
var myModule = (function (key) {
    var keysList = [];
    var timeStampList = [];
    this.addPoint = function (key) {
        var thisTime = moment();
        if(!key) {
            key="Stage "+keysList.length;
        }
        keysList.push(key);
        timeStampList.push(thisTime);
        return {'key':key,'moment':thisTime};
    }
    this.getList = function() {
        var ret =[];
        for(i=1;i<keysList.length;i++) {
            var str = [
                keysList[i-1],
                ' ----> ',
                keysList[i],
                '  ',
                timeStampList[i]-timeStampList[i-1]
            ].join("");
            ret.push(str);
        }
        return ret;
    }
    return this;
})();
module.exports=myModule;