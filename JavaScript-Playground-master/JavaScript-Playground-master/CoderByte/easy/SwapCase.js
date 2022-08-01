/**
 * Have the function swapCase(str) take the str parameter and swap the case of
 * each character. For example: if str is "Hello World" the output should be
 * hELLO wORLD. Let numbers and symbols stay the way they are.
 *
 * https://www.coderbyte.com/results/bhanson:Swap%20Case:JavaScript
 *
 * @param  {string} str
 * @return {string}
 */

const assert = require("assert");

function swapCase(str) {
  const chars = str.split("");

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === chars[i].toUpperCase()) {
      chars[i] = chars[i].toLowerCase();
    } else if (chars[i] === chars[i].toLowerCase()) {
      chars[i] = chars[i].toUpperCase();
    }
  }

  const caseStr = chars.join("");
  // console.log(caseStr);
  return caseStr;
}

const in1 = "Hello-World"; // input
const expect1 = "hELLO-wORLD"; // output
const test1 = swapCase(in1);
assert.strictEqual(test1, expect1, `should be ${expect1}`);
// console.log('swapCase');

const t2 = swapCase("LengThforC");
assert(t2);
// console.log(t2);
