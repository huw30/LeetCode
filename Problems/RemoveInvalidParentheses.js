/**
 Remove the minimum number of invalid parentheses in order to make the input string valid.
 Return all possible results.

 Note: The input string may contain letters other than the parentheses ( and ).

 Examples:
 "()())()" -> ["()()()", "(())()"]
 "(a)())()" -> ["(a)()()", "(a())()"]
 ")(" -> [""]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
let removeInvalidParentheses = function(s) {
    if (s == null || s.length === 0) return [""];
    let res = [];
    helper(res, s, 0, 0, ['(', ')']);
    return res;
};

let helper = function(res, s, last_i, last_j, pair) {
    for (let count = 0, i = last_i; i < s.length; i++) {
        if (s[i] === pair[0]) count++;
        if (s[i] === pair[1]) count--;
        if (count >= 0) continue;
        for (let j=last_j; j<=i; j++) {
            if ((s[j] === pair[1]) && (j === last_j || s[j-1] !== pair[1])) {
                helper(res, s.substring(0, j) + s.substring(j+1), i, j, pair);
            }
        }
        return;
    }
    let reversed = s.split('').reverse().join('');
    if (pair[0] === '(') {
        helper(res, reversed, 0, 0, [')', '(']);
    } else {
        res.push(reversed);
    }
};