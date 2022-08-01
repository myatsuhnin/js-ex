/**
 * Have the function letterCapitalize(str) take the str parameter being passed
 * and capitalize the first letter of each word. Words will be separated by only
 * one space.
 * @param  {string} str
 * @return {string}
 */
function letterCapitalize(str) {
    let newString = '';
    for (let i = 0, newWord = true; i < str.length; i++) {
        if (newWord) {
            newString += str[i].toUpperCase();
        } else {
            newString += str[i];
        }

        newWord = str[i] === ' ' ? true : false;
    }

    return newString;
}

module.exports = letterCapitalize;



function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }