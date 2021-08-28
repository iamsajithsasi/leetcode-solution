// Plus One
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:
// Input: digits = [0]
// Output: [1]


// @param {number[]} digits
// @return {number[]}

var plusOne = function (digits) {
    let result = [];
    let numStr = digits.join("");
    let strNum = Number(numStr);
    if (strNum < Number.MAX_SAFE_INTEGER) {
        let op = strNum + 1;
        result = op.toString().split("");
    } else {
        let rvDtArr = digits;
        let plusValue = 1;
        let len = rvDtArr.length - 1;
        let carry = 0;
        while (len >= 0) {
            let sm = rvDtArr[len] + plusValue + carry;
            carry = sm > 10 ? sm % 10 : sm == 10 ? 1 : 0;
            let mod = sm > 10 ? 1 : sm == 10 ? 0 : sm;
            plusValue = 0;
            rvDtArr[len] = mod;
            len--;
        }
        if (carry) {
            rvDtArr.unshift(carry)
        }
        result = rvDtArr;
    }
    return result;
};

// limitation: if digits exceed safe value (Number.max_safe_integer) then it will be rounded off
// ip: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// var plusOne = function(digits) {
//     let numStr = digits.join("");
//     let strNum = Number(numStr);
//     let result = strNum + 1;
//     return result.toString().split("");
// };