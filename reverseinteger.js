// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Example 5:
// Input: x = 1534236469
// Output: 0

var reverse = function (x) {
  let result = 0;
  let posH = 2 ** 31 - 1;
  let negH = 2 ** 31;
  if (x !== 0) {
    let num = x > 0 ? x : x * -1; // conv neg to pos num
    result = num.toString().split("").reverse().map(Number).join(""); // reverse number

    result = x > 0 ? result : result * -1; // conv neg/pos

    // checking if result outside 32bit integer range
    if (result > 0) {
      result = result < posH ? result : 0;
    } else {
      result = result * -1 < negH ? result : 0;
    }
  }

  return result;
};
