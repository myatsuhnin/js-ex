// objective:
// Have function TimeConvert(num) take the num
// parameter being passed and return the number of hours
// and minutes the parameter converts to

// solution:
const assert = require("assert");

function timeConvert(num) {
  let hours = 0;
  let minutes = 0;

  for (let i = 0; i <= num; i += 60) {
    // loop through number every 60
    if (num >= 60) {
      // for every 60 add 1 hour
      hours += 1;
    } else if (num < 60) {
      minutes = num;
    }
  }

  let newMinutes = 0;
  if (minutes < 10) {
    newMinutes = `0${minutes}`;
  } else if (minutes > 10) {
    newMinutes = minutes;
  }

  return `${hours}:${newMinutes}`;
}

// console.log(timeConvert(141));

const a1 = "63"; // input
const r1 = "1:3"; // output
const t1 = timeConvert(a1);

assert(r1, t1);


/**
 * Have the function timeConvert(num) take the num parameter being passed and
 * return the number of hours and minutes the parameter converts to (ie. if num
 * = 63 then the output should be 1:3). Separate the number of hours and minutes
 * with a colon.
 * @param  {number} num
 * @return {string} number of hours and minutes.  hours:minutes
 */



function timeConvert(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;

  return hours + ':' + minutes;
}
