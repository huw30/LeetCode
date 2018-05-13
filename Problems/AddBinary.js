/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let res = "";

    while (i >= 0 || j >= 0) {
        let aCurr = (i >= 0) ? parseInt(a[i--]) : 0;
        let bCurr = (j >= 0) ? parseInt(b[j--]) : 0;
        let sum = aCurr + bCurr + carry;
        res += sum % 2;
        carry = parseInt(sum / 2);
    }

    if (carry > 0) {
        res += carry;
    }

    return res.split('').reverse().join('');
};