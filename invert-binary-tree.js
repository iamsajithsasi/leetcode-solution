/* 
Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]


Input: root = [2,1,3]
Output: [2,3,1]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function (root) {
    console.log("jey", root)
    if (!root) return null;
    const t3 = new TreeNode();

    //recursive case
    t3.val = root.val;
    t3.left = invertTree(root.right);
    t3.right = invertTree(root.left);
    return t3;
};