//     Longest Palindromic Substring
//     Given a string s, return the longest palindromic substring in s.

//     Example 1:
//     Input: s = "babad"
//     Output: "bab"
//     Note: "aba" is also a valid answer.

//     Example 2:    
//     Input: s = "cbbd"
//     Output: "bb"

//     Example 3:    
//     Input: s = "a"
//     Output: "a"

//     Example 4:    
//     Input: s = "ac"
//     Output: "a"


/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {

    // check for single characters
    if (s.length == 1) return s;

    // check for two characters
    if (s.length == 2) {
        if (s[0] == s[1]) {
            return s
        } else {
            return s[0]
        }
    }

    // check if whole string is a palindrome
    if (s == s.split("").reverse().join("")) {
        return s;
    }

    // check for substring palindrome
    /**
        logic: 
        A palindrome must start and end with same character
        Hence, finding all possible words beginning and ending with same character
        Next if any computed word is a palindrome then that's the result
        ex:- xaabacxcabaaxcabaax
        char: x
            xaabacx
            xaabacxcabaax
            xaabacxcabaaxcabaax
        char a
            acxca
            acxcaba
            acxcabaa
            acxcabaaxca
            acxcabaaxcaba
            ....
        char a
        char b
        char a
        char c
        ....
    */
    let subStr = "";
    let left = 0;

    while (left < s.length) {
        let char = s[left];
        let idxs = [];

        s.split("").filter((chr, index) => {
            if (chr == char && index > left) {
                idxs.push(index);
                let matchChar = s.slice(left, index + 1);
                if (matchChar.length > subStr.length) {
                    let inv = matchChar.split("").reverse().join("")
                    if (matchChar == inv) {
                        subStr = matchChar;
                    }
                }
            }
        });

        left++;
    }

    return subStr.length > 1 ? subStr : s[0]
};