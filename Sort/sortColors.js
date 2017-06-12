/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors2 = function(nums) {
	//2-pass
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        var temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
    }
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors1 = function(nums) {
	// 1-pass
    var p1 = 0, p2 = nums.length - 1, index = 0;
    
    while (index <= p2) {
        if (nums[index] === 0) {
            nums[index] = nums [p1];
            nums[p1] = 0;
            p1++;
        }
        if (nums[index] === 2) {
            nums[index] = nums[p2];
            nums[p2] = 2;
            p2--;
            index--;
        }
        index++;
    }
};