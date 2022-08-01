



/*

Retrieve the Last N Elements
Write a function that retrieves the last n elements from an array.

Examples
last([1, 2, 3, 4, 5], 1) ➞ [5]

last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]

last([1, 2, 3, 4, 5], 7) ➞ "invalid"

last([1, 2, 3, 4, 5], 0) ➞ []
Notes
Return "invalid" if n exceeds the length of the array.
Return an empty array if n == 0.



*/






/*  Solution 1   */

function last(a, n) {
	return n <= a.length ?  a.slice( a.length-n, a.length) : "invalid";
}


/*  Solution 2   */

const last = (a, n) => 	a.length >= n ? a.slice(a.length-n, a.length) : "invalid";



/*  Solution 3   */


function last(a, n) {
	return n>a.length?'invalid':n===0?[]:a.slice(-n);
}