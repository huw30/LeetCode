var findMaxAmazingNumberIndex = function(arr) {
	var max = 0;
  var index = 0;

  for (var i = 0; i < arr.length; i++) {
    var temp = arr.slice();
  	var after = temp.splice(i, temp.length);

    temp = after.concat(temp);

    var count = findNumOfAmazingNumber(temp);
    if (count > max) {
    	max = count;
      index = i;
    }
  }
	return index;
};

var findNumOfAmazingNumber = function(arr) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
  	if (parseInt(arr[i]) <= i) {
    	count++;
    }
  }
  return count;
};

console.log(findMaxAmazingNumberIndex([1,5,2,4,3])); //4
console.log(findMaxAmazingNumberIndex([1,0,0])); //1
