
/**
 * Have the function permutationStep(num) take the num parameter being passed
 * and return the next number greater than num using the same digits. For
 * example: if num is 123 return 132, if it's 12453 return 12534. If a number
 * has no greater permutations, return -1 (ie. 999).
 *
 * https://www.coderbyte.com/results/bhanson:Permutation%20Step:JavaScript
 *
 * @param  {number} num
 * @return {number}
 */

function PermutationStep(num) {
  var arr = num.toString().split('');
  var usedChars = [];
  var greaterNumbers = [];
  function permute() {
    var i, ch;
    for (i = 0; i < arr.length; i++) {
      ch = arr.splice(i, 1)[0];
      usedChars.push(ch);
      if (arr.length == 0) {
        var n = parseInt(usedChars.join(''))
        if (n > num) {
          greaterNumbers.push(n);
        }
      }
      permute(arr);
      arr.splice(i, 0, ch);
      usedChars.pop();
    }
  }

  permute();
  var result = greaterNumbers.sort(function (a, b) { return b - a; }).pop();
  if (result)
    return result;
  else
    return -1;
}
