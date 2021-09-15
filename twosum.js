//     Two Sum

//     Example 1:
//     Input: nums = [2,7,11,15], target = 9
//     Output: [0,1]

//     Example 2:
//     Input: nums = [3,2,4], target = 6
//     Output: [1,2]

//     Example 3:
//     Input: nums = [3,3], target = 6
//     Output: [0,1]

var twoSum = function (nums, target) {
  let st = null;
  let ed = null;
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i]; // starting with first in array
    // add other and check if same as target
    let cpy = Array.from(nums);
    cpy.splice(i, 1);
    for (let j = 0; j < cpy.length; j++) {
      let sum = cpy[j] + start;
      if (sum == target) {
        st = cpy[j];
        ed = start;
      }
    }
  }
  let stIdx = nums.indexOf(st);
  let edIdx = nums.lastIndexOf(ed);
  return [stIdx, edIdx];
};

// method 2 Note: Array must be sorted or this will not work
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum == target) {
      return [left + 1, right + 1]
    } else if (sum < target) {
      left += 1;
    } else if (sum > target) {
      right -= 1;
    }
  }
  return []
};