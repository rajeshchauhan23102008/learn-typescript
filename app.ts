//console.log('hello from typescript!!!');

//Types Examples

let myAge: number = 20;
//myAge='rajesh';

let myName: string = 'rajesh';
//myName = 36;

let hasHobbies: boolean = true;
//hasHobbies = 2;

let user: any;
user = 36;
user = 'rajesh';

let hobbies = ["sports", "food"];
//hobbies=["100"];
console.log(hobbies);

console.log(typeof hobbies);

let userHobbies: any[] = ["sporst", 786, "food", 9211];
console.log(userHobbies);
console.log(typeof userHobbies);

//Tuples
let myAddress: [string, number] = ["Palam Colony", 53];
console.log(myAddress);

enum Color {
    Red,
    Green = 200,
    Blue = 200
}

let myColor: Color = Color.Green;

console.log(Color.Red);
console.log(myColor);
console.log(Color.Blue);

function getName(): string {
    return myName;
}

console.log(getName());

function returnMyName(): void {
    return console.log(myName);
}

// Arguments/Input Types.
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

console.log(multiply(4, 5));

// Function Types.
let myFunction;

myFunction = getName;
console.log(myFunction());

myFunction = multiply;
console.log(myFunction(3, 8));

let myTypeFunction: (num1: number, num2: number) => number;
myTypeFunction = multiply;
console.log(myTypeFunction(6, 6));

// Object Type.
let simpleObjectType: { name: string, age: number } = {
    name: "rajesh",
    age: 34
};


console.log(simpleObjectType);

// Complex Object Type.

let complexObjectType: { data: number[], output: (all: boolean) => number[] } = {
    data: [10, 20, 30, 40],
    output: function (isThisOk: boolean) {
        return this.data;
    }
};

console.log(complexObjectType);

// Create your own Custom Type.
type myCustomType = { data: number[], output: (all: boolean) => number[] };

let user1: myCustomType = {
    data: [100, 200, 300],
    output: function (isRequired: boolean) {
        return this.data;
    }
};

console.log(user1);