
//This works for almost all inputs, working to fix issues
/*Using the JavaScript language, have the function StringScramble(str1,str2)
take both parameters being passed and return the string true if a portion of str1 
characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw"
and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters. */

function StringScramble(str1,str2) { 
  var arr=str1.split('');
  for(var i=0; i<str2.length;i++)
  {
    var index=arr.indexOf(str2[i]);
    if(index==-1)
      return 'false';
    else
      arr.splice(index,1);
  } 
  return 'true';        
}