"use strict";
//console.log('hello from typescript!!!');
//Types Examples
var myAge = 20;
//myAge='rajesh';
var myName = 'rajesh';
//myName = 36;
var hasHobbies = true;
//hasHobbies = 2;
var user;
user = 36;
user = 'rajesh';
var hobbies = ["sports", "food"];
//hobbies=["100"];
console.log(hobbies);
console.log(typeof hobbies);
var userHobbies = ["sporst", 786, "food", 9211];
console.log(userHobbies);
console.log(typeof userHobbies);
//Tuples
var myAddress = ["Palam Colony", 53];
console.log(myAddress);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 200] = "Green";
    Color[Color["Blue"] = 200] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(Color.Red);
console.log(myColor);
console.log(Color.Blue);
function getName() {
    return myName;
}
console.log(getName());
function returnMyName() {
    return console.log(myName);
}
// Arguments/Input Types.
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(4, 5));
// Function Types.
var myFunction;
myFunction = getName;
console.log(myFunction());
myFunction = multiply;
console.log(myFunction(3, 8));
var myTypeFunction;
myTypeFunction = multiply;
console.log(myTypeFunction(6, 6));
// Object Type.
var simpleObjectType = {
    name: "rajesh",
    age: 34
};
console.log(simpleObjectType);
// Complex Object Type.
var complexObjectType = {
    data: [10, 20, 30, 40],
    output: function (isThisOk) {
        return this.data;
    }
};
console.log(complexObjectType);
var user1 = {
    data: [100, 200, 300],
    output: function (isRequired) {
        return this.data;
    }
};
