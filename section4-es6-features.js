"use strict";
/* TypeScript and ES6 (ES2015) */
// let & const
console.log('LET & CONST Keyword!!!');
var letVariable = "let variable has block scope";
console.log(letVariable);
letVariable = "this should contain only string";
console.log(letVariable);
var gameLevels = 100;
console.log(gameLevels);
//gameLevels = 200;
function blockScope() {
    //console.log(letVariable);
    var letVariable = "This let variable scope is only inside this function";
    console.log(letVariable);
}
blockScope();
console.log(letVariable);
// ARROW FUNCTIONS.
console.log('ARROW FUNCTIONS');
var addition = function (number1, number2) { return number1 + number2; };
console.log(addition(4, 8));
var arrowAddition = function (number1, number2) { return number1 + number2; };
console.log(arrowAddition(30, 3));
var hello = function () { return console.log('hello world'); };
//console.log(hello());
hello();
var helloFriend = function (friend) { return console.log('hello ' + friend); };
//console.log(helloFriend('rohit'));
helloFriend('rohit');
console.log('DEFAULT PARAMETERS!!!');
var defaultParamFunc = function (start) {
    if (start === void 0) { start = 15; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!!!', start);
};
defaultParamFunc();
defaultParamFunc(30);
/* SPREAD & REST OPERATOR */
console.log('SPREAD & REST Operators ...');
console.log('SPREAD OPERATOR : Spread or Converts an array values into List of Values');
var marks = [10, 20, 40, 100];
console.log(Math.max(23, 56, 99, 394));
console.log(Math.max.apply(Math, marks)); //SPREAD OPERATOR
console.log('REST OPERATOR: Rest or Converts a List of values into an Array');
function makeAnArray(name) {
    var marks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        marks[_i - 1] = arguments[_i];
    }
    return marks;
}
console.log(makeAnArray('rajesh', 34, 12, 67, 89));
//DESTRUCTURING ARRAY'S AND OBJECT'S
console.log('DESTRUCTURING ARRAYS AND OBJECTS');
var grades = [20, 34];
var math = grades[0], english = grades[1];
console.log(math, english);
var userData = { name: 'rajesh', age: 23 };
var mydName = userData.name, mydAge = userData.age;
console.log(mydName, mydAge);
//TEMPLATE LITERALS.
console.log('TEMPLATE LITERALS');
var tuserName = 'Rajesh';
var templateString = 'Hi i am ' + tuserName + ', my name ' + tuserName + ' is pretty common';
var templateLiteralString = "\n\nHi i am " + tuserName + " \nmy name " + tuserName + " is pretty common";
console.log(templateString, templateLiteralString);
/* ES 6 : Module Exercise */
console.log('MODULE EXERCISE');
// Exercise 1
/*
var double = function(value) {
    return value * 2;
};
console.log(double(10));
*/
// SOLUTION: Exercise 1
console.log('Exercise 1 - Arrow Function');
var double = function (value) { return value * 2; };
console.log(double(10));
//console.log(((value: number) : number => { return value * 2})(30));
// Exercise 2
/*
var greet = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");

*/
// SOLUTION: Exercise 2
console.log('Exercise 2 - Default Parameter');
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log('Hello, ' + name);
};
greet();
greet('rajesh');
// Exercise 3
/*
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
*/
// SOLUTION: Exercise 3
console.log('Exercise 3 - SPREAD Operator');
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4
/*
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

*/
console.log('Exercise 4 - SPREAD OPERATOR');
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5
/*
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

*/
console.log('Exercise 5 - Destructuring Array');
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6
/*
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
*/
console.log('Exercise 6 - Destructuring Object');
var scientist = { firstName: 'Will', experience: 12 };
var fName = scientist.firstName, exp = scientist.experience;
console.log(fName, exp);
