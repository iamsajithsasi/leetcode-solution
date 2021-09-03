/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3

Example 2:
Input: s = "IV"
Output: 4

Example 3:
Input: s = "IX"
Output: 9

Example 4:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    /* 
        case I: check next letter (V/X)
        case X: check next letter (L/C)
        case C: check next letter (D/M)
        plan: Get next letter and subtract the value beforehand for summing up at end
        IV = [1, 3];
        IX = [1, 8];
        XL = [10, 40];
        XC = [10, 80];
        CD = [100, 300];
        CM = [100, 800];
    */

    let ops = Array(s.length);
    s.split("").forEach((curLtr, index) => {
        if(!ops[index]) {
            let curLtrVal = ltrVal(curLtr);
            let nxtLtr = s[index + 1];
            let nxtLtrVal = ltrVal(nxtLtr) > 0 ? ltrVal(nxtLtr) : 0;
            if(curLtr == "I" && (nxtLtr == "V" || nxtLtr == "X")) {
                ops[index + 1] = nxtLtrVal - (1 * 2);
            } else if (curLtr == "X" && (nxtLtr == "L" || nxtLtr == "C")) {
               ops[index + 1] = nxtLtrVal - (10 * 2);
            } else if(curLtr == "C" && (nxtLtr == "D" || nxtLtr == "M")) {
               ops[index + 1] = nxtLtrVal - (100 * 2);          
            }
            ops[index] = curLtrVal;   
        }        
    });
    
    let sum = 0;
    ops.forEach(el => {
        sum += el;
    })
    
    return sum;
};

function ltrVal(letter) {
    switch (letter){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}