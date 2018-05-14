/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function(root) {
    if (root == null) return "";
    let res = "";
    let queue = [];
    queue.push(root);
    while(queue.length > 0) {
        let curr = queue.shift();
        if (curr != null) {
            res += curr.val + ' ';
            queue.push(curr.left);
            queue.push(curr.right);
        } else {
            res += 'null '
        }
    }
    return res.trim();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data == null || data.length == 0) return null;

    let arr = data.split(' ');

    let root = new TreeNode(parseInt(arr[0]));
    let queue = [];
    queue.push(root);

    for (let i=1; i<arr.length; i++) {
        let curr = queue.shift();
        console.log(curr);
        if (arr[i] !== 'null') {
            curr.left = new TreeNode(parseInt(arr[i]));
            queue.push(curr.left);
        }
        if (arr[++i] !== 'null') {
            curr.right = new TreeNode(parseInt(arr[i]));
            queue.push(curr.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */