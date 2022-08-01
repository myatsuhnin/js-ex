/*

Coloured Triangles

A coloured triangle is created from different rows of colours (Red, Green or Blue). Successive rows,
 each containing one fewer colour than the last, are generated by considering the two touching
  colours in the previous row. If these colours are identical, the same colour is used in the new row.
   If colours are different, the missing colour is used in the new row.
    This process continues untill a single colour is generated in the final row.

Different possibilities of colours are:

Colours Touching:        G G        B G        R G        B R
New colour:               G          R          B          G
With a bigger example:

R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G
Goal
Create a function which takes first row of the triangle as an input and returns the final colour which would appear at the bottom row. In above example, given input "RRGBRGBB" will return "G".
If you are only given one colour as the input, return that colour.
There will be no exception handling case.
Examples
colouredTriangle("B") ➞ "B"

colouredTriangle("GB") ➞ "R"

colouredTriangle("RBRGBRB") ➞ "G"

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


let c = (a, b) => a == b ? a : [a, b].includes('R') ?
    ([a, b].includes('G') ? 'B' : 'G') : 'R';
let colouredTriangle = r => r.length < 2 ? r :
    colouredTriangle(
        [...r].map(
            (v, i) => r.length > 1 + i ? c(v, r[1 + i]) : 0
        ).filter(Boolean)
        .join('')
    );



//#############################################################
//#  SOLUTION 2  
//#############################################################


function colouredTriangle(row) {
    let reduced = row.length > 1 ? '' : row;
    for (let i = 0; i < row.length - 1; i += 1) {
        reduced += row[i] == row[i + 1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i + 1], '');
    }
    return reduced.length > 1 ? colouredTriangle(reduced) : reduced;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function colouredTriangle(row) {
    if (row.length == 1) { return row }
    var hold = ""
    for (let i = 0; i < row.length - 1; i++) {
        row[i] == row[i + 1] ? hold += row[i] : hold += obj[row[i] + row[i + 1]]
    }
    return colouredTriangle(hold)
}

var obj = {
    "GR": "B",
    "RG": "B",
    "BR": "G",
    "RB": "G",
    "GB": "R",
    "BG": "R"
}




//#############################################################
//#  SOLUTION 4
//#############################################################


colouredTriangle = (row) => {
    let nxtRow = row;
    if (row.length == 1) return row;
    for (let i = row.length - 1; i > 0; i--) {
        nxtRow = getNewRow(nxtRow);
    }
    return nxtRow;
}

function getNewRow(row) {
    let newRow = ''
    for (let j = 0; j < row.length - 1; j++) {
        if (row[j] == row[j + 1]) {
            newRow += row[j]
        } else {
            newRow += ['R', 'G', 'B'].filter(x => x != row[j] && x != row[j + 1])[0];
        }
    }
    return newRow;
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function colouredTriangle(s) {
    x = /RG|GR/
    y = /BG|GB/
    z = /RB|BR/
    while (s.length > 1)
        s = [...s].map((e, i) => (a = s[i + 1], a ? x.test(e + a) ? 'B' : y.test(e + a) ? 'R' : z.test(e + a) ? 'G' : e : '')).join ``
    return s
}