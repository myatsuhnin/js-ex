/**
 * Have the function alphabetSoup(str) take the str string parameter being
 * passed and return the string with the letters in alphabetical order (ie.
 * hello becomes ehllo). Assume numbers and punctuation symbols will not be
 * included in the string.
 * @param  {string} str
 * @return {string}
 */



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function alphabetSoup(str){
    let letters = str.split("");
    return letters.reverse().join();
}

function alphabetSoup(str) {
    let letters = str.split('');
    return letters.sort().join('');
}

module.exports = alphabetSoup;