/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let pAnces = findAncestors(root, p);
    let qAnces = findAncestors(root, q);

    let i = 0, j = 0;
    
    let lowestCommonAncestor = null;
    
    while (i < pAnces.length && j < qAnces.length) {
        if (pAnces[i] === qAnces[j]) {
            lowestCommonAncestor = pAnces[i];
        }
        i++;
        j++;
    }

    return lowestCommonAncestor;
};

var findAncestors = function(root, node) {
    let res = [];

    if (root === null) {
        return res;
    }

    res.push(root);

    if (root == node) {
        return res;
    }

    let left = findAncestors(root.left, node);
    let right = findAncestors(root.right, node);

    if (left.includes(node)) {
        res = res.concat(left);
    } else {
        res = res.concat(right);
    }

    return res;
}