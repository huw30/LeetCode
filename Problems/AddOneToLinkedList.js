// Non negative integer represented by a singly linked list
// input: 9 -> 9 -> 9
// output: 1 -> 0 -> 0 -> 0

// input: 9 -> 8
// output: 9 -> 9

function ListNode(value) {
  this.value = value;
  this.next = null;
}

function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  } 
  let pre = null;
  let next = null;
  let curr = head;
  
  while (curr !== null) {
    next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  head = pre;
  return pre;
}

function addToLinkedList(node) {
  let head = reverse(node);
  let carry = 1;
  let sum = 0;
  let temp = null;
  let res = head;
  
  while (head != null) {
    sum = carry + head.value;
    carry = sum >= 10 ? 1 : 0;
    sum = sum % 10;
    head.value = sum;
    temp = head;
    head = head.next;
  }

  if (carry == 1) {
    temp.next = new ListNode(carry);
  }
  
  return reverse(res);
}

let node = new ListNode(9)
node.next = new ListNode(9);
node.next.next = new ListNode(9);
console.log(addToLinkedList(node));