/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2 
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let maxRpt = 0;
    let maxChar = "";
    let obj = {};
    nums.forEach(nm => obj[nm] = (obj[nm] || 0) + 1);

    for (key in obj) {
        let v = obj[key];
        if (v > maxRpt) {
            maxRpt = v;
            maxChar = key;
        }
    }

    return maxChar
};