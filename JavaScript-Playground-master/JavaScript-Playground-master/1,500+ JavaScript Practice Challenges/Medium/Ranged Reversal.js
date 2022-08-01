/*

Ranged Reversal

Write a function that reverses the subarray between the start and end index (inclusive). The rest of the array should be kept the same.

Examples
rangedReversal([1, 2, 3, 4, 5, 6], 1, 3) ➞ [1, 4, 3, 2, 5, 6]

rangedReversal([1, 2, 3, 4, 5, 6], 0, 4) ➞ [5, 4, 3, 2, 1, 6]

rangedReversal([9, 8, 7, 4], 0, 0) ➞ [9, 8, 7, 4]


Notes
Arrays will be zero-indexed.
The start and end indices will always be valid in context of the array.
The end index will always be greater than or equal to the starting index.
Return the array itself if the starting and ending index are the same.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const rangedReversal = (arr, start, end) =>
    arr
    .slice(0, start)
    .concat(arr.slice(start, end + 1).reverse())
    .concat(arr.slice(end + 1));



//#############################################################
//#  SOLUTION 2  
//#############################################################


function rangedReversal(arr, start, end) {
    if (end === 0) return arr;
    const a = arr.slice(start, end + 1).reverse();
    let b;
    start === 0 ? arr.splice(start, end + 1) :
        arr.splice(start, end);
    arr.splice(start, 0, a);
    return arr.flat();
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const rangedReversal = (a, s, e) =>
    a.slice(0, s).concat(a.slice(s, e + 1).reverse()).concat(a.slice(e + 1));



//#############################################################
//#  SOLUTION 4
//#############################################################


const rangedReversal = (arr, start, end) => {
    const left = arr.slice(0, start),
        right = arr.slice(end + 1),
        middle = arr.splice(start, start === 0 ? end + 1 : end).reverse();
    return [...left, ...middle, ...right];
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function rangedReversal(arr, start, end) {
    let arRev = arr.splice(start, end - start + 1).reverse();
    arr.splice(start, 0, ...arRev);
    return arr;
}