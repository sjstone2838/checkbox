"use strict";
var _ = require('lodash');
var Utils = (function () {
    function Utils() {
    }
    // modal = false; 
    Utils.prototype.proper = function (s) {
        var properArray = [];
        _.forEach(s.match(/([a-z0-9!\.])+/gi), function (w) {
            properArray.push(w[0].toUpperCase() + w.slice(1));
        });
        return properArray.join(' ');
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.component.js.map