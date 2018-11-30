/* Demo: How 3rd Party libraries can be used inside a .ts file using 
TS Definition file and definitely typed BIG libraries  

This Example will use JQuery JS library.

*/

import $ = require('jquery');

console.log('Demo: How 3rd Party libraries can be used inside a .ts file using ' +
'TS Definition file and definitely typed BIG libraries');

console.log('This Example will use JQuery JS library.');

$('#testdiv').css({ 'background-color': 'green'});

console.log('test changes to see if GULP is working or not');