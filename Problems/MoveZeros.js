/**
 *
 Given an array nums, write a function to move all 0's
 to the end of it while maintaining the relative order
 of the non-zero elements.

 Example:

 Input: [0,1,0,3,12]
 Output: [1,3,12,0,0]
 Note:

 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.
 */

/**
 *
 * # of operations = nums.length
 *
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
    if (nums == null || nums.length === 0) return;
    let start = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            if (start !== i) {
                nums[start++] = nums[i];
            } else {
                start++;
            }
        }
    }
    while (start<nums.length) {
        nums[start++] = 0;
    }
};

/**
   # of operations = 2 * (# of non-zero)
 * @param nums
 */
let moveZeroes2 = function(nums) {
    if (nums == null || nums.length === 0) return;
    let start = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, start++);
        }
    }
};

let swap = function(nums, i, j) {
    if (i === j) return;
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};