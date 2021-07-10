// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:
// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:
// Input: nums = [1], target = 0
// Output: 0

var searchInsert = function (nums, target) {
  var result = 0;
  let index = nums.indexOf(target);
  let cmpt = [];
  if (index !== -1) {
    result = index;
  } else {
    let st = nums[0];
    let ed = nums[nums.length - 1];
    if (target < st) {
      result = 0;
    } else if (target > ed) {
      result = nums.length;
    } else if (target > st && target < ed) {
      nums.reverse().forEach((item, index) => {
        if (target > item && cmpt.length == 0) {
          cmpt.push(index);
          result = nums.length - index;
        }
      });
    }
  }
  return result;
};
