/**
 *
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number could represent.

 A mapping of digit to letters (just like on the telephone buttons) is given below.
 Note that 1 does not map to any letters.

 Example:

 Input: "23"
 Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].



 helper('', 0)
 index = 0
 temp = ''
 curr = abc
 i = 0 res = ['ad', 'ae', 'af']
   helper('a', 1)
     index = 1
     temp = 'a'
     curr = def
     i=0 res = ['ad']
     i=1 res = ['ad', 'ae']
     i=2 res = ['ad', 'ae', 'af']
 i = 1 res += ['bd', 'be', 'bf']
    helper('b', 1)
 i = 2 res += ['cd', 'ce', 'cf']
    helper('c', 1)
    ...


 *
 * @param {string} digits
 * @return {string[]}
 */
const digitMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

let letterCombinations = function(digits) {
    if (digits == null || digits.length === 0) {
        return [];
    }
    let res = [];
    helper(digits, res, '', 0);
    return res;
};

let helper = function(digits, res, temp, index) {
    if (temp.length === digits.length) {
        res.push(temp);
        return;
    }

    const curr = digitMap[parseInt(digits[index])];
    for (let i=0; i<curr.length; i++) {
         helper(digits, res, temp + curr[i], index+1);
    }
};

