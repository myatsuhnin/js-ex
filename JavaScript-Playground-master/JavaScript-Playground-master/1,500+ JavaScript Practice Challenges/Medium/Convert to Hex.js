/*

Convert to Hex

Create a function that takes a strings characters as ASCII and returns each characters
 hexadecimal value as a string.

Examples
toHex("hello world") ➞ "68 65 6c 6c 6f 20 77 6f 72 6c 64"

toHex("Big Boi") ➞ "42 69 67 20 42 6f 69"

toHex("Marty Poppinson") ➞ "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"

Notes
Each byte must be seperated by a space.
All alpha hex characters must be lowercase.

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function toHex(str) {
    return str.split('').map(a => a.charCodeAt(0).toString(16)).join(' ');
}



//#############################################################
//#  SOLUTION 2  
//#############################################################

const toHex = str =>
    str
    .split('')
    .map(char => char.charCodeAt(0).toString(16))
    .join(' ');





//#############################################################
//#  SOLUTION 3
//#############################################################


function toHex(str) {
    return [...str].map(e => e.charCodeAt(0).toString(16)).join(' ')
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function toHex(str) {
    return str.replace(/.| /g, (m, i) => (i ? " " : '') + (m.charCodeAt() >>> 0).toString(16))
}