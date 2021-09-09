/* 
ZigZag Conversion

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s.length <= 1 || numRows == 1) return s;

    /*
        IP:         P A Y P A L I S H I R  I  N  G
        charpos:    0 1 2 3 4 5 6 7 8 9 10 11 12 13
      
        P     I    N
        A   L S  I G
        Y A   H R
        P     I

        s[0][0]                 s[0][6]                       s[0][12]
        s[1][1]         s[1][5] s[1][7]             s[1][11]  s[1][13]
        s[2][2] s[2][4]         s[2][8]   s[2][10]
        s[3][3]                 s[3][9]
       
        *s[array-index][charpos]

        OP: P I N  A L S I G Y A H R P I

        s[array-index][charpos]: create a multi-dimensional array like below
        array-index pattern: 0 1 2 3 2 1 0 ....
        charpos: 0 - 13
    */

    let count = 0;
    let inverse = false;
    let arrStr = [];
    let opStr = ""


    for (let i = 0; i < s.length; i++) {

        if (!arrStr[count]) {
            arrStr.push([])
        }

        arrStr[count][i] = s[i] || null;

        if (count == numRows - 1) {
            inverse = true;
        } else if (count == 0) {
            inverse = false;
        }

        count = inverse ? count - 1 : count + 1;
    }

    arrStr.forEach(arr => {
        let x = arr.filter(el => el != null);
        x.forEach(el => opStr += el)
    });

    return opStr

};