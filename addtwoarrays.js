<<<<<<< HEAD
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let node = result;
    
    while(l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = 0;
        if(sum > 9) {
            sum = sum % 10;
            carry = 1;
        }

        node.next = new ListNode(sum);
        node = node.next;

        if(l1) {
            l1 = l1.next
        }
        if(l2) {
            l2 = l2.next
        }
    }
    
    if(carry) {
        node.next = new ListNode(carry);
    }
    
    return result.next;
};
=======
//     Input: l1 = [2,4,3], l2 = [5,6,4]
//     Output: [7,0,8]
//     Explanation: 342 + 465 = 807.



>>>>>>> 22b62ba921ebe6c76f468a43d78d66d17594023b
