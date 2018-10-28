"use strict";
//Section 2: Using Types for Better Code
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
console.log(user1);
//Uniontypes: TypeScript can allow you to combine 2 or more types to form a Union Type.
var UniqueID = "AIMPC9046N";
console.log(UniqueID);
UniqueID = 412578953625;
console.log(UniqueID);
//check type.
var finalValue = "is string";
finalValue = 34;
if (typeof finalValue === 'number') {
    console.log("finalValue variable is a NUMBER");
}
else if (typeof finalValue === 'string') {
    console.log("finalValue variable is STRING");
}
//Never Returns.
function thisFunctionNeverReturns() {
    throw new Error('Error: Never Return Anything!!!');
}
var anyVariable = 27;
var numVariable = 27;
if (anyVariable === numVariable) {
    console.log('Matches Triple EqualTo when anyVariable === numVariable ');
}
else if (anyVariable === numVariable) {
    console.log('Matches Double EqualTo when anyVariable == numVariable ');
}
anyVariable = "now contains string value";
//Nullable Types.
// tsconfig option "StrictNullChecks=true" in TS V 2.0 =>
var myNumType = 34;
//myNumType = null;
var myNumNNullType = 27;
myNumNNullType = null;
var myNullOnlyType = null;
//let bankAccount: { money: number, deposit: (value: number) => void } = {
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'rajesh',
    //myBankAccount: bankAccount,
    bankAccount: bankAccount,
    hobbies: ["Sports", "Coding"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
