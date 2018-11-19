"use strict";
/* Generic in Typescript */
var GenericExample;
(function (GenericExample) {
    console.log('Javascript Any Type as a Simple Generic');
    function echo(data) {
        return data;
    }
    console.log(echo('Any String Data'));
    console.log(echo(34));
    console.log(echo(true));
    // Simple Generic Function
    console.log('');
    console.log('TypeScript Generic Function Example');
    function betterEcho(data) {
        return data;
    }
    console.log(betterEcho('Any String Data'));
    console.log(betterEcho(34));
    console.log(betterEcho(true));
    // In-built Generic Array.
    console.log('');
    console.log('In-built Generic Array.');
    var myList = [34, 67.8];
    myList.push(11);
    myList.forEach(function (item) { return console.log(item); });
    // for (let index = 0; index < myList.length; index++) {
    //     console.log(myList[index]);    
    // }
    console.log(myList);
    // Array of Generic Type.
    console.log('');
    console.log('Array of Generic Type.');
    console.log(genericArrayFunc);
    function genericArrayFunc(args) {
        args.forEach(function (item) { return console.log(item); });
    }
    genericArrayFunc(['apple', 'banana', 'oranges']);
    genericArrayFunc([34, 55, 66]);
    // Use Generic Function as Type.
    console.log('');
    console.log('Use Generic Function as Type.');
    var myGenFunc = betterEcho;
    console.log(myGenFunc);
    console.log(myGenFunc('Generic String Function'));
    console.log(myGenFunc(55));
    // Generic Classes.
    console.log('');
    console.log('Generic Classes');
    var MyMath = /** @class */ (function () {
        function MyMath() {
        }
        return MyMath;
    }());
    var myMathObj = new MyMath();
    myMathObj.sum = function (v1, v2) { return v1 + v2; };
    console.log(myMathObj.sum(2, 3));
    var myStringObj = new MyMath();
    myStringObj.sum = function (v1, v2) { return v1 + v2; };
    console.log(myStringObj.sum('Hello', ' Rajesh, You are doing great!!!'));
    // Generic Queue Example.
    console.log('');
    console.log('Generic Queue Example');
    var Queue = /** @class */ (function () {
        function Queue() {
            var _this = this;
            this.data = [];
            this.push = function (item) { return _this.data.push(item); };
            this.pop = function () { return _this.data.shift(); };
        }
        return Queue;
    }());
    var myFIFOQueue = new Queue();
    myFIFOQueue.push(12);
    myFIFOQueue.push(45.44);
    myFIFOQueue.push(100);
    console.log(myFIFOQueue);
    console.log('Poppped Item is ' + myFIFOQueue.pop());
    console.log(myFIFOQueue);
    var myStringFIFOQ = new Queue();
    myStringFIFOQ.push('rajesh');
    myStringFIFOQ.push('rohit');
    myStringFIFOQ.push('sachin');
    console.log(myStringFIFOQ);
    console.log('Pop item is ' + myStringFIFOQ.pop());
    console.log(myStringFIFOQ);
    // Generic Array Reverse Example with Constraints.
    console.log('');
    console.log('Generic Array Reverse Example.');
    var Utility = /** @class */ (function () {
        function Utility() {
        }
        Utility.prototype.reverse = function (list) {
            var returnVal = [];
            for (var i = list.length - 1; i >= 0; i--) {
                returnVal.push(list[i]);
            }
            return returnVal;
        };
        Utility.prototype.createCustomObject = function (custObj) {
            return custObj;
        };
        return Utility;
    }());
    var myUtil = new Utility();
    var numbers = [10, 30, 40];
    console.log('Original Number List', numbers);
    console.log('Reverse Number List', myUtil.reverse(numbers));
    var names = ['raj', 'annu', 'babuu'];
    console.log(names);
    console.log(myUtil.reverse(names));
    //This will throw error because of Generic Constraint.
    var switches = [true, false, false, true, false];
    console.log(switches);
    // console.log(myUtil.reverse<boolean>(switches)); 
    var myObj = myUtil.createCustomObject({
        'name': 'rajesh',
        'age': '34'
    });
    console.log(myObj);
    /* Exercise : Generic */
    /*
   
    Let's keep it simple and only add the following methods to the Map:

    setItem(key: string, item: T) // should create a new key-value pair

    getItem(key: string) // should retrieve the value of the provided key
    clear() // should remove all key-value pairs
    printMap() // should output key-value pairs
    The map should be usable like shown below:

    const numberMap = new MyMap<number>();
    numberMap.setItem('apples', 5);
    numberMap.setItem('bananas', 10);
    numberMap.printMap();

    const stringMap = new MyMap<string>();
    stringMap.setItem('name', "Max");
    stringMap.setItem('age', "27");
    stringMap.printMap();

    */
    var MyMap = /** @class */ (function () {
        function MyMap() {
            this.map = {};
        }
        MyMap.prototype.setItem = function (key, item) {
            // should create a new key-value pair
            this.map[key] = item;
        };
        MyMap.prototype.getItem = function (key) {
            return this.map[key];
        };
        MyMap.prototype.clear = function () {
            this.map = {};
        };
        MyMap.prototype.printMap = function () {
            for (var itemKey in this.map) {
                console.log(itemKey, this.map[itemKey]);
            }
        };
        return MyMap;
    }());
    var numberMap = new MyMap();
    numberMap.setItem('apples', 5);
    numberMap.setItem('bananas', 10);
    console.log(numberMap.getItem('apples'));
    numberMap.printMap();
    numberMap.clear();
    numberMap.printMap();
    var stringMap = new MyMap();
    stringMap.setItem('apples', 'rajesh');
    stringMap.setItem('bananas', 'anay');
    console.log(stringMap.getItem('bananas'));
    stringMap.printMap();
    stringMap.clear();
    stringMap.printMap();
})(GenericExample || (GenericExample = {}));
