"use strict";
/* Demo: How 3rd Party libraries can be used inside a .ts file using
TS Definition file and definitely typed BIG libraries

This Example will use JQuery JS library.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
console.log('Demo: How 3rd Party libraries can be used inside a .ts file using ' +
    'TS Definition file and definitely typed BIG libraries');
console.log('This Example will use JQuery JS library.');
$('#testdiv').css({ 'background-color': 'blue' });
console.log('test changes to see if GULP is working or not');
