/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". 

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
        let len = strs.length;
        let str = [];
        for (let j = 0; j < len; j++) {
            str.push(strs[j][i]);
        }
        let frstStr = str[0];
        const comStr = str.every(str => str && str == frstStr);
        if (comStr) {
            result += frstStr
        } else {
            break;
        };
    }
    return result
};