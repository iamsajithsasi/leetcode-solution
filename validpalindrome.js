/* 
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome. 

exceptions:
"  " true
".," true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let output = false;
    if (s.length > 1) {
        let strRev = s.split("").reverse().join("");
        if (s == strRev) {
            output = true
        } else {
            let str = s.match(/[a-zA-Z0-9]+/g);
            if (str?.length > 0) {
                let newstr = str.join("").toLowerCase();
                let strRev = newstr.toLowerCase().split("").reverse()?.join("");
                console.log(newstr, strRev)
                if (newstr == strRev) { output = true }
            } else {
                // handling exceptions (.,)
                output = true
            }
        }
    } else if (s.length == 1) {
        output = true
    }
    return output;
};