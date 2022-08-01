/**
 * Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.
 * @param  {string} str
 * @return {string}
 */

// solution:
const assert = require("assert");

function LetterChanges(str) {
  const converted = str.replace(/[a-z]/gi, char =>
    char === "z" || char === "Z"
      ? "a"
      : String.fromCharCode(char.charCodeAt() + 1)
  );

  // after converting each letter to the letter following it
  // in the alphabet, next capitalize the vowels
  const capitalized = converted.replace(/a|e|i|o|u/gi, vowel =>
    vowel.toUpperCase()
  );

  // return the final string
  return capitalized;
}

const a1 = "challenge"; // input
const r1 = "dibmmfohf"; // first output
const t1 = LetterChanges(a1);
// console.log(r1);
assert(t1, r1);

const r2 = "dIbmmfOhf"; // final output
assert(r2);
// console.log(r2);
