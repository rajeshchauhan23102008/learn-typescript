"use strict";
var MyMath;
(function (MyMath) {
    function calcRectangle(length, width) {
        return length * width;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
