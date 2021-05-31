//     Median of Two Sorted Arrays
//     Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//     The overall run time complexity should be O(log (m+n)).

//     Example 1:
//     Input: nums1 = [1,3], nums2 = [2]
//     Output: 2.00000
//     Explanation: merged array = [1,2,3] and median is 2.

//     Example 2:
//     Input: nums1 = [1,2], nums2 = [3,4]
//     Output: 2.50000
//     Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

//     Example 3:
//     Input: nums1 = [0,0], nums2 = [0,0]
//     Output: 0.00000

//     Example 4:
//     Input: nums1 = [], nums2 = [1]
//     Output: 1.00000

//     Example 5:
//     Input: nums1 = [2], nums2 = []
//     Output: 2.00000

var findMedianSortedArrays = function (nums1, nums2) {
  let output = null;
  let mergedArr = nums1.concat(nums2);
  let len = mergedArr.length;
  if (len > 1) {
    mergedArr.sort(function (a, b) {
      return a - b;
    });
    let cpyArr = Array.from(mergedArr);
    let stats = cpyArr.length % 2;
    if (stats == 0) {
      // even 1, 2, 3, 4 => 2 + 3 / 2
      let nxt = mergedArr[parseInt(len / 2)];
      let prv = mergedArr[parseInt(len / 2) - 1];
      if (nxt == 0 && prv == 0) {
        output = 0;
      } else {
        output = (nxt + prv) / 2;
      }
    } else {
      // odd 1, 2, [3], 4, 5
      let middle = parseInt(len / 2);
      output = mergedArr[middle];
    }
  } else if (len == 1) {
    output = mergedArr[0];
  } else {
    output = 0;
  }
  return output;
};