

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    console.log(s)
    let subStr = ""
    let left = 0;

    while (left < s.length) {
        let op = "";
        for (let i = left; i < s.length; i++) {
            // console.log("op-"+left+" ", s[i]);
            if (!op.includes(s[i])) {
                op += s[i]
            } else {
                break;
            }
        }

        if (op.length > subStr.length) {
            subStr = op;
            op = "";
        }

        left++;
    }

    return subStr.length;
};