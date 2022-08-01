
/*Using the JavaScript language, have the function SwapII(str) 
take the str parameter and swap the case of each character.
Then, if a letter is between two numbers (without separation),
switch the places of the two numbers. For example: if str is "6Hello4 -8World, 7 yes3" 
the output should be 4hELLO6 -8wORLD, 7 YES3. */

function SwapII(inputStr) { 
  var parts = inputStr.split(' ');
  var result = [];

  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    var str = '';
    for (var j = 0; j < part.length; j++) {
      var c = part[j];
      if (c >= 'a' && c <= 'z')
        str += c.toUpperCase();
      else if (c >= 'A' && c <= 'Z')
        str += c.toLowerCase();
      else
        str += c;
    }
    var replacedStr=str.replace(/(\d)(\D+)(\d)/i, '$3$2$1');
    result.push(replacedStr);
  }
  return result.join(' '); 
}



function SwapII(str){
  var re= /[a-z]/;
  var re2= /[A-Z]/;
  var re3= /[0-9]/;
  var re4= /[a-z]/i;
  var arr=[];
  for(var i=0; i<str.length; i++){
      if(str.charAt(i).match(re)){
          arr.push(str[i].toUpperCase());
      }
      else if(str[i].match(re2)){
          arr.push(str[i].toLowerCase());
      }
      else{
          arr.push(str[i]);
      }
  }
for(var i=0; i<arr.length; i++){
  if(arr[i].match(re3)){
      for(var j=i+1; j<arr.length; j++){
          if(arr[j] == " "){
              break;
          }
          else if(arr[j].match(re3)){
              var hold = arr[i];
              arr[i]=arr[j];
              arr[j]=hold;
          }
      }
  }
}
return arr.join("");
}  
