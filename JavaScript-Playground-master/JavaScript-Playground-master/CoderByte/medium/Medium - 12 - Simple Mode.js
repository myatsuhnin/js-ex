/*Using the JavaScript language, have the function SimpleMode(arr) 
take the array of numbers stored in arr and return the number that 
appears most frequently (the mode). For example: if arr contains 
[10, 4, 5, 2, 4] the output should be 4. If there is more than one 
mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5]
should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. */

function SimpleMode(arr) {
  arr.sort(function (a, b) { return a - b; });
  var runChar = arr[0], runCount = 1;
  var longRunChar = arr[0], longRunCount = 1;
  for (var i = 1; i < arr.length; i++) {
    var v = arr[i];
    if (runChar == v)
      runCount++;
    else {
      if (runCount > longRunCount) {
        longRunCount = runCount;
        longRunChar = runChar;
      }
      runChar = v;
      runCount = 1;
    }
  }

  if (longRunCount > 1)
    return longRunChar;
  else
    return -1;
}


function SimpleMode(arr){
  var mode=0;
  var count2=0;
  for(var i=0; i<arr.length; i++){
      var count=0;
      for(var j=0; j<arr.length; j++){
          if(arr[i] == arr[j] && j!==i){
              count++;
          }
          if(count>count2){
              mode = arr[i];
              count2 = count;
              count =0;
          }
      }
  }
  if(count2==0){
      return -1;
      }
  return mode;
  }
