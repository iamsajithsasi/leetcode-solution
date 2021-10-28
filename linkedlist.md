### [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

<!-- 
Given head, the head of a linked list, determine if the linked list has a cycle in it.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list. 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

-->

```
var hasCycle = function(head) {
    if (!head) return false; // empty
    
    let slow = head, fast = head
    while (fast.next && fast.next.next) {
        console.log("key")
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) return true
    }
    return false
};

```