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