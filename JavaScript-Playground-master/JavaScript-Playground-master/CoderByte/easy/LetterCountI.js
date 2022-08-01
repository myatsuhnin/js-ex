const assert = require("assert");
/**
 * Have the function letterCountI(str) take the str parameter being passed and
 * return the first word with the greatest number of repeated letters. For
 * example: "Today, is the greatest day ever!" should return greatest because it
 * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
 * are no words with repeating letters return -1. Words will be separated by
 * spaces.
 *
 * https://www.coderbyte.com/results/bhanson:Letter%20Count%20I:JavaScript
 *
 * @param  {string} str
 * @return {string} or -1
 */


function letterCount(str) {
  let letters = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ar = alphabet.split("");
  for (let i = 0; i < str.length; i += 1) {
    if (ar.indexOf(str[i]) > -1) {
      letters += 1;
    }
  }
  return letters;
}
// console.log(letterCount('Howdy World!!'));

const a1 = "hello";
const r1 = "5";
const t1 = letterCount(a1);
assert(r1, t1);
