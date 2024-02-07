/*
Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let counter = 0,
        validArr = [];

   while(counter < nums.length) {
        let val = nums[counter],
        valIndex = validArr.indexOf(val);

        if(valIndex == -1) {
            validArr.push(val)
        }
       counter++;
   }

   nums.splice(0, 1, ...validArr)

   return validArr.length
};

// using pointers
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prt1 = 0, prt2 = 1, len = nums.length;

    while(prt2 < len) {
       // if values are not same, then replace that value to the pointer
        if(nums[prt1] != nums[prt2]) {
            nums[prt1 + 1] = nums[prt2];
            prt1++
        }

       // if values are same then get the next right pointer value
        prt2++;
    }

    return prt1+1
};

/* pointers console
nums =   [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
         [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
         [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
         [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
         [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
         [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
         [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
         [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
         [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
         [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
         [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
*/
