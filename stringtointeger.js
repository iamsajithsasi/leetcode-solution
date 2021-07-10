// Example 1:
// Input: s = "42"
// Output: 42

// Example 2:
// Input: s = "   -42"
// Output: -42


// Example 3:
// Input: s = "4193 with words"
// Output: 4193

// Example 4:
// Input: s = "words and 987"
// Output: 0

// Example 5:
// Input: s = "-91283472332"
// Output: -2147483648

// If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.

var myAtoi = function(s) {
    var val = parseInt(s);
    var result = val ? val : 0;
    var lowerLimit = 2**31 * -1;
    var upperLimit = 2**31 - 1;
    
    if(result < 0) {
        result = result <= lowerLimit ? lowerLimit : result;
    } else {
        result = result >= upperLimit ? upperLimit : result;
    }
    // console.log("result ", result)
    return result
};