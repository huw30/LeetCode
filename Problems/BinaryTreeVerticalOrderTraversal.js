/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

let verticalOrder = function(root) {
    let res = [];
    dfs(root, 0);
    for (let i=min; i<=max; i++) {
        res.push([]);
    }
    let queue = [];
    let indexQueue = [];

    queue.push(root);
    indexQueue.push(-min);

    while(queue.length > 0) {
        let curr = queue.shift();
        let currIdx = indexQueue.shift();
        res[currIdx].push(curr.val);
        if (curr.left !== null) {
            queue.push(curr.left);
            indexQueue.push(currIdx-1);
        }
        if (curr.right !== null) {
            queue.push(curr.right);
            indexQueue.push(currIdx+1);
        }
    }
    return res;
};

let dfs = function(root, index) {
    if (root == null) return;
    min = Math.min(min, index);
    max = Math.max(max, index);
    dfs(root.left, index - 1);
    dfs(root.left, index + 1);
}