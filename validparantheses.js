/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const chars = [];
    if (s.length == 1) { return false; }

    /* 
    *push all open to array and if close come in then check prev open is appropriate.  
    *logic: {[]}
        { -> pushed to array
        [ -> pushed to array
        ] -> it's before must be [ => if [ then we are poping from array; else returning as false
        } -> it's before must be { => if { then we are poping from array; else returning as false

    *logic: ()[]
        ( -> pushed to array
        ) -> before is ( so we popped
        [ -> pushed to array
        ] -> before is [ so we popped

    *logic: ([)]
        ( -> pushed to array
        [ -> pushed to array
        ) -> it's before must be ( => it's not so returning as false
        finally if array is empty then it's valid.
    */

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            chars.push(s[i])
        } else if (s[i] == ")" && chars.length > 0 && chars[chars.length - 1] == "(") {
            chars.pop();
        } else if (s[i] == "}" && chars.length > 0 && chars[chars.length - 1] == "{") {
            chars.pop();
        } else if (s[i] == "]" && chars.length > 0 && chars[chars.length - 1] == "[") {
            chars.pop();
        } else {
            return false;
        }
    }

    return chars.length == 0 ? true : false;
};