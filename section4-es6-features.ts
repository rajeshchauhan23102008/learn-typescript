/* TypeScript and ES6 (ES2015) */

// let & const

console.log('LET & CONST Keyword!!!')
let letVariable = "let variable has block scope";
console.log(letVariable);
letVariable = "this should contain only string"; 
console.log(letVariable);

const gameLevels = 100;
console.log(gameLevels);
//gameLevels = 200;

function blockScope() {
    //console.log(letVariable);
    let letVariable = "This let variable scope is only inside this function";
    console.log(letVariable);
}

blockScope();
console.log(letVariable);

// ARROW FUNCTIONS.
console.log('ARROW FUNCTIONS');

const addition = function(number1: number, number2: number): number { return number1 + number2};
console.log(addition(4,8));

const arrowAddition = (number1: number, number2: number) : number => number1 + number2;
console.log(arrowAddition(30,3));

const hello = () => console.log('hello world');
//console.log(hello());
hello();

const helloFriend = (friend: string) : void => console.log('hello ' + friend);
//console.log(helloFriend('rohit'));
helloFriend('rohit');

console.log('DEFAULT PARAMETERS!!!');

const defaultParamFunc = (start: number = 15): void => {
    console.log(start);
    while(start > 0){
        start--;
    }
    console.log('Done!!!',start);
}

defaultParamFunc();
defaultParamFunc(30);