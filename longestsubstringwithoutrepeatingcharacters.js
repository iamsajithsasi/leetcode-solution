/* 
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let subStr = ""
    let left = 0;

    while (left < s.length) {
        let op = "";
        for (let i = left; i < s.length; i++) {
            if (!op.includes(s[i])) {
                op += s[i]
            } else {
                break;
            }
        }

        if (op.length > subStr.length) {
            subStr = op;
            op = "";
        }

        left++;
    }

    return subStr.length;
};