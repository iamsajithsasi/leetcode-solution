/* 
Divide Two Integers

Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.

Example 2:
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.

Example 3:
Input: dividend = 0, divisor = 1
Output: 0

Example 4:
Input: dividend = 1, divisor = 1
Output: 1
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let max = 2 ** 31 - 1;
    let conv = Math.floor(parseInt(dividend / divisor)); // math.floor convert to min decimal value ex: 5.8 => 5
    /* conv = parseInt(dividend / divisor); // this is also right */
    return conv > max ? max : conv
};