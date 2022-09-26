const moment = require('moment');
class estimateTime {
    constructor() {
        this.keysList = [];
        this.timeStampList = [];
        this.startPoint;
        this.endPoint;
    }
    addStartPoint = function (key) {
        let output = this.addPoint(key);
        this.startPoint = output;
        return output;
    }
    addEndPoint = function (key) {
        let output = this.addPoint(key);
        this.endPoint = output;
        return output;
    };
    addPoint = function (key) {
        let thisTime = moment();
        if (!key) {
            key = "Stage " + this.keysList.length;
        }
        this.keysList.push(key);
        this.timeStampList.push(thisTime);
        return { 'key': key, 'moment': thisTime };
    }
    getList = function () {
        let ret = [];
        let max = { 'index': 0, 'amount': -1 };
        let min = { 'index': 0, 'amount': 'NONE' };
        for (let i = 1; i < this.keysList.length; i++) {
            let diff = this.timeStampList[i] - this.timeStampList[i - 1];
            let str = [
                this.keysList[i - 1],
                ' ----> ',
                this.keysList[i],
                '  ',
                diff
            ].join("");
            ret.push(str);
            if (diff > max.amount) {
                max.amount = diff;
                max.index = ret.length - 1;
            }
            if (min.amount == 'NONE' || diff < min.amount) {
                min.amount = diff;
                min.index = ret.length - 1;
            }
        }
        ret[max.index] += "  max";
        ret[min.index] += "  min";
        if (this.startPoint && this.endPoint) {
            let diff = this.endPoint.moment - this.startPoint.moment;
            let str = [
                'Total Time  : ',
                this.startPoint.key,
                ' ----> ',
                this.endPoint.key,
                '  ',
                diff
            ].join("");
            ret.push(str);
        }
        return ret;
    }
}
module.exports = estimateTime;
