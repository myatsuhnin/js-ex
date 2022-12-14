/*
Objective
Today we're expanding our knowledge of Strings and combining it with what we've already learned about loops. Check out the Tutorial tab for learning materials and an instructional video!
Task
Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  
space-separated strings on a single line (see the Sample below for more detail).
Note:  is considered to be an even index.
Input Format
The first line contains an integer,  (the number of test cases).
Each line  of the  subsequent lines contain a String, .
Constraints
Output Format
For each String  (where ), print 's even-indexed characters, followed by a space, followed by 's odd-indexed characters.
Sample Input
2
Hacker
Rank
Sample Output
Hce akr
Rn ak
Explanation
Test Case 0: 
The even indices are , , and , and the odd indices are , , and . We then print a single line of  
space-separated strings; the first string contains the ordered characters from 's even indices (), 
and the second string contains the ordered characters from 's odd indices ().
Test Case 1: 
The even indices are  and , and the odd indices are  and . We then print a single line of  
space-separated strings; the first string contains the ordered characters from 's even indices (), 
and the second string contains the ordered characters from 's odd indices ().
*/
function processData(input) {
    let even = (arr) => arr.filter((v, i) => i % 2 === 0)
    let odd = (arr) => arr.filter((v, i) => i % 2 !== 0)
    input = input.split `\n`.slice(1)
    input.map(v => console.log(even([...v]).join ``, odd([...v]).join ``))
}













function processData(input) {
    //Enter your code here
    input = input.split('\n');

    for (i = 1; i < input.length; i++) {
        var splitWord = input[i].split('');

        var even = '';
        var odd = '';

        for (x = 0; x < splitWord.length; x++) {
            if (x % 2 === 0) {
                even = even + splitWord[x];
            } else {
                odd = odd + splitWord[x];
            }
        }
        console.log(even + ' ' + odd);
    }
}