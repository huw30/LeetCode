/**

You have an array of integers, and for each index you want to find the product 
of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() 
that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.

Time Complexity: O(n)
Space complexity: O(1)
*/
function getProductsOfAllIntsExceptAtIndex(intArray) {

    let result = [];
    let running = 1;
    
    for (let i = 0; i < intArray.length; i++) {
        result[i] = running;

        running *= intArray[i];
    }
    running = 1;

    for (let i = intArray.length - 1; i >= 0; i--) {
        result[i] *= running;

        running *= intArray[i];
    }

    return result;
}

const intArray = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(intArray));

