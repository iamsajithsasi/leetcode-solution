/* 
Find All Duplicates in an Array 

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:
Input: nums = [1,1,2]
Output: [1]

Example 3:
Input: nums = [1]
Output: []
*/

var findDuplicates = function(nums) {
    let op = []
    if (nums.length > 1) {
        let output = {}
        for(let i = 0; i < nums.length; i++) {
            output[nums[i]] = output[nums[i]] ? output[nums[i]] + 1 : 1; 
        }
        
        for (let [key, value] of Object.entries(output)) {
          if(value > 1) { op.push(parseInt(key)) }
        }

        // for (let i in output) {
        //     if(output[i] > 1) { op.push(parseInt(i)) }
        // }
    }
    return op;
};