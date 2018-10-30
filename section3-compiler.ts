//Typescript 3.0 Compiler Options Flags.

//noEmitOnError
//sourceMap
//target
//noImplicitAny     //This is now not working.
//strictNullChecks  //This is also not working.
//noUnusedParameters

let compMyName: string = 'rajesh';
let compMyAge: number = 32;;

let anythingVariable;

console.log(typeof anythingVariable);

anythingVariable = 23;

console.log(typeof anythingVariable);

anythingVariable = 'a string';
console.log(typeof anythingVariable);


//anythingVariable = 'rajesh';

//compMyName = 36;

function NullnUnsedParameterFlags(myFlag: boolean, myUnusedParameter: boolean) {

    let result;
    if (myFlag) {
        result = 20;
    }
    return result;
}
