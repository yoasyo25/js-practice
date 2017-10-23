/* Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and
all numbers between them.
*/

function sumAll(arr) {
  var start = Math.min.apply(null, arr);
  var end = Math.max.apply(null, arr);
  var increment = 0;
  var sum = 0;

  for (var i = start; i <= end; i++) {
    sum += (start + increment)
    increment++;
  }

  return sum;
}

/* Compare two arrays and return a new array with any items only found in one
of the two given arrays, but not both.
*/

// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]

function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }

  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr1[j]);
    }
  }
  return newArr;
}

function diffOfArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  function checkElement(ele) {
    if (arr1.indexOf(ele) === -1 || arr2.indexOf(ele) === -1) {
      return ele;
    }
  }
  return newArr.filter(checkElement);
}
