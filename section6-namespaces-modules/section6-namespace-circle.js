"use strict";
var MyMath;
(function (MyMath) {
    var MyCircle;
    (function (MyCircle) {
        var PI = 3.14;
        function calcCircle(diameter) {
            return diameter * PI;
        }
        MyCircle.calcCircle = calcCircle;
    })(MyCircle = MyMath.MyCircle || (MyMath.MyCircle = {}));
})(MyMath || (MyMath = {}));
