/**
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

 An input string is valid if:

 Open brackets must be closed by the same type of brackets.
 Open brackets must be closed in the correct order.
 Note that an empty string is also considered valid.

 Example 1:

 Input: "()"
 Output: true
 Example 2:

 Input: "()[]{}"
 Output: true
 Example 3:

 Input: "(]"
 Output: false
 Example 4:

 Input: "([)]"
 Output: false
 Example 5:

 Input: "{[]}"
 Output: true



 input: ( ( )
            i
 stack = )

 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s === null || s.length === 0) return true;

    let stack = [];

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (s[i] === '{') {
            stack.push('}');
        } else {
            if (stack.length === 0 || stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};