/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    /*
    // complex o(n). fails in big array 
    for (let i = 0; i < k; i++) {
        let el = nums.pop();
        nums.unshift(el)
    }
    return nums 
    */

    if (nums.length >= k) {
        nums.reverse();
        let x = nums.splice(0, k);
        nums.reverse();
        x.reverse();
        nums.unshift(...x)
        return nums
    } else if (k > nums.length) {
        let nk = k % nums.length; // for case where k is greater than array ex: [1, 2, 3] k=5
        nums.reverse();
        let x = nums.splice(0, nk);
        nums.reverse();
        x.reverse();
        nums.unshift(...x)
        return nums
    }

    // repeated codes can be modulised
};