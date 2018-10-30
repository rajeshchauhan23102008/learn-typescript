"use strict";
//Typescript 3.0 Compiler Options Flags.
//noEmitOnError
//sourceMap
//target
//noImplicitAny     //This is now not working.
//strictNullChecks  //This is also not working.
//noUnusedParameters
var compMyName = 'rajesh';
var compMyAge = 32;
;
var anythingVariable;
console.log(typeof anythingVariable);
anythingVariable = 23;
console.log(typeof anythingVariable);
anythingVariable = 'a string';
console.log(typeof anythingVariable);
//anythingVariable = 'rajesh';
//compMyName = 36;
function NullnUnsedParameterFlags(myFlag, myUnusedParameter) {
    var result;
    if (myFlag) {
        result = 20;
    }
    return result;
}
