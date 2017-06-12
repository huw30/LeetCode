var insertion = function(arr) {
	var n = arr.length;
	if (n === 0 || n === 1) {
		return arr;
	}

	var minIndex = 0;
	var min = arr[0];
	for (var i = 1; i < n; i++) {
		var key = arr[i];
		var j = i - 1;

		while (j>=0 && arr[j] > key) {
			arr[j+1] = arr[j];
			j = j-1;
		}

		arr[j+1] = key;
	}

	return arr;
};
var test = [4, 1, 3, 9, 7];
console.log(insertion(test));
// 1,3,4,7,9