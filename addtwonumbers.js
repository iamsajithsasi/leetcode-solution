// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode(0);
  let node = result;

  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = 0;
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    }

    node.next = new ListNode(sum);
    node = node.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    node.next = new ListNode(carry);
  }

  return result.next;
};

// Inputs
// [2,4,3]
// [5,6,4]

// [0]
// [0]

// [9,9,9,9,9,9,9]
// [9,9,9,9]


/*
head = {
  "val": 1,
  "next": {
      "val": 2,
      "next": {
        "val": 3,
        "next": null
      }
  }
}

* Loop a linked list:
  while (head) {
      console.log(head.val);
      head = head.next;
  }

* Convert an array to linked list
  let arr = [1,2,3];
  let result = new ListNode();
  let node = result;
  arr.forEach(item => {
      node.next = new ListNode(item);
      node = node.next;
  });
*/
