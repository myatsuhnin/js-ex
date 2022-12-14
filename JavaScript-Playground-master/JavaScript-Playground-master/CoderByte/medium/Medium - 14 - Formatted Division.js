/*Using the JavaScript language, have the function FormattedDivision(num1,num2)
take both parameters being passed, divide num1 by num2, and return the result as a 
string with properly formatted commas and 4 significant digits after the decimal place. 
For example: if num1 is 123456789 and num2
is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero. */

function FormattedDivision(num1,num2) { 
  var res = num1 / num2;
  res = res.toFixed(4);
  var arr = res.toString().split('.');
  var str = arr[0], output = '';
  if (str.length < 4) {
    output = str;
  }
  else {
    var commaPos = 4;
    for (var i = str.length - 1, pos = 1; i >= 0; i--, pos++) {
      if (pos == commaPos) {
        output = str[i] + ',' + output;
        commaPos += 3;
      }
      else {
        output = str[i] + output;
      }
    }
  }
  var outputWIthDecimals = output + '.' + arr[1];
  return outputWIthDecimals;
}

//////
function FormattedDivision(num1,num2) { 
  var div = parseFloat(num1/num2);
  var arr = div.toString().split("");
  var len = arr.length-1;  
    var dot =0;
    for(var i=len; i>0; i--){
      if(arr[i]==="."){
        dot++;
      }
    }
    if(dot===0){
      arr.push(".", 0, 0, 0, 0);
    }
   for(var i=len; i>0; i--){
      if(arr[i+3]==="."){
        arr.splice(i, 0, ",");
      }
      if(arr[i+3]===","){
        arr.splice(i, 0, ",");
      }
    }
    return arr.join(""); 
  }
