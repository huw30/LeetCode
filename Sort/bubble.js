// Iteratively
var bubbleSort = function(arr) {
	if (arr.length === 0 || arr.length === 1) {
	return arr;
  }

	var temp;
	for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length - i - 1; j++) {
		if (arr[j] > arr[j+1]) {
		temp = arr[j];
		arr[j] = arr[j+1];
		arr[j+1] = temp;
		} 	
	}
  }
  return arr;
};

console.log(bubbleSort([5,4,3,2,1]));

// Recusively

var recusiveBubbleSort = function(arr, n) {
	if (n === 1) {
		return;
	}

	for (var i = 0; i < n-1; i++) {
		if (arr[i] > arr[i+1]) {
			var temp = arr[i+1];
			arr[i+1] = arr[i];
			arr[i] = temp;
		}
	}

	recusiveBubbleSort(arr, n-1);
};


var testArr = [5,4,3,2,1];
recusiveBubbleSort(testArr, 5);
console.log(testArr);
// 1,2,3,4,5