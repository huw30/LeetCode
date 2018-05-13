/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 *
 * Example
 *
 * [[1,4,5],[1,3,4],[2,6]]
 * 1 - low=0, high=2 mid= (2 - 0) / 2 + 0 = 1
 *     left = partition(0, 1) => merge([1,4,5], [1,3,4])
 *          low=0, high=1 mid= (1-0)/2 + 0 = 0
 *             left=partition(0,0) => list(0) = [1,4,5]
 *             right=partition(1,1); => list(1) = [1,3,4]
 *     right = partition(2, 2) => list(2) = [2,6]
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

let mergeKLists = function(lists) {
    if (lists == null || lists.length === 0) {
        return [];
    }
    return partition(lists, 0, lists.length - 1);
};

let partition = function(lists, low, high) {
    if (low >= high) return lists[low];
    const mid = parseInt((high - low) / 2 + low);
    let left = partition(lists, low, mid);
    let right = partition(lists, mid+1, high);
    return merge(left, right);
};
/**
 *
 * @param ListNode n1
 * @param ListNode n2
 */
let merge = function(n1, n2) {
    let dummy = new ListNode(0);
    dummy.next = null;
    let tail = dummy;
    while(true) {
        if (n1 == null) {
            tail.next = n2;
            break;
        }
        if (n2 == null) {
            tail.next = n1;
            break;
        }
        if (n1.val <= n2.val) {
            tail.next = n1;
            n1 = n1.next;
        } else {
            tail.next = n2;
            n2 = n2.next;
        }
        tail = tail.next;
    }
    return dummy.next;
};