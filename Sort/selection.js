var selection = function(arr) {
	var temp;
	for (var i = 0; i < arr.length; i++) {
		var minIndex = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}

	return arr;
}

var test = [4, 1, 3, 9, 7];
console.log(selection(test));
//[1, 3, 4, 7, 9]