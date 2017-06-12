var mergeSort = function(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var l = 0, r = arr.length;

	var mid = Math.floor((l+r)/2);
	var left = mergeSort(arr.slice(0, mid));
	var right = mergeSort(arr.slice(mid, r));

	return merge(left, right);
};

var merge = function(left, right) {
	var result = [];  
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	while (left.length) {
		result.push(left.shift());
	}

	while (right.length) {
		result.push(right.shift());
	}

	return result;
}

var test = [2,5,1,7,0];

console.log(mergeSort(test));

//0,1,2,5,7