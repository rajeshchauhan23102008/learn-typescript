"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircle(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
