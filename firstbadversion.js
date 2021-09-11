/* 
Example 1:
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:
Input: n = 1, bad = 1
Output: 1
*/


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        left = 1
        right = n;

        /* 
            ex: n = 5, bad = 4
            hard way is valuate from 1......5, which is o(n) complex 
            problem: 
                bad 4: 1, 2, 3  => good;    4, 5 => false
                bad 3: 1, 2     => good;    3, 4, 5 => false
            logic: reduce the o(n)
                1. find the mid until isBadVersion is true
                2. from there find the left value
        */

        while (left < right) {
            let mid = parseInt(left + (right - left) / 2); // reduce complexion
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;

    };
};