//Section 2: Using Types for Better Code

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

//Uniontypes: TypeScript can allow you to combine 2 or more types to form a Union Type.

let UniqueID: number | string = "AIMPC9046N";
console.log(UniqueID);
UniqueID = 412578953625;
console.log(UniqueID);

//check type.

let finalValue: any = "is string";
finalValue = 34;

if (typeof finalValue === 'number') {
    console.log("finalValue variable is a NUMBER");
}
else if (typeof finalValue === 'string') {
    console.log("finalValue variable is STRING");
}

//Never Returns.
function thisFunctionNeverReturns(): never {
    throw new Error('Error: Never Return Anything!!!');
}


let anyVariable: any = 27;
let numVariable: number = 27;

if (anyVariable === numVariable) {
    console.log('Matches Triple EqualTo when anyVariable === numVariable ');
}
else if (anyVariable === numVariable) {
    console.log('Matches Double EqualTo when anyVariable == numVariable ');
}

anyVariable = "now contains string value";

//Nullable Types.

// tsconfig option "StrictNullChecks=true" in TS V 2.0 =>
let myNumType = 34;
//myNumType = null;

let myNumNNullType: number | null = 27;
myNumNNullType = null;

let myNullOnlyType: null = null;
// myNullOnlyType = 23; //Won't work.


// Section 2: Module Exercise 

//Exercise Questions:

type bankAccountType = { money: number, deposit: (value: number) => void }

//let bankAccount: { money: number, deposit: (value: number) => void } = {
let bankAccount: bankAccountType = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {
    name: string,
    //myBankAccount: { money: number, deposit: (value: number) => void },
    bankAccount : bankAccountType,
    hobbies: string[]
} = {
    name: 'rajesh',
    //myBankAccount: bankAccount,
    bankAccount: bankAccount,
    hobbies: ["Sports", "Coding"]
}

myself.bankAccount.deposit(3000);

console.log(myself);