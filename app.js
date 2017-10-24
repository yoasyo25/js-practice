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
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]
*/

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

/* Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case. */

function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1));
  }
  return newArr.join(" ");
}

/* Return an array consisting of the largest number from each provided
sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

 function largestOfFour(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(Math.max.apply(null, arr[i]));
    }
   return newArr;
 }

/* Check if a string (first argument, str) ends with the given target string
(second argument, target).
*/

function confirmEnding(str, target) {
  var formattedString = str.replace(/\s/g,'');
  var slicedString = formattedString.slice(formattedString.length - target.length);

  if (slicedString === target) {
    return true;
  } else {
    return false;
  }
}

/* Repeat a given string (first argument) num times (second argument). Return
an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  var repeatedString = "";
  if (num < 0) {
    return repeatedString;
  } else {
    for (var i = 0; i < num; i++) {
      repeatedString += str;
    }
  }

  return repeatedString;
}

/* Truncate a string (first argument) if it is longer than the given maximum
string length (second argument). Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3,
then the addition of the three dots does not add to the string length in
determining the truncated string.
*/

function truncateString(str, num) {
  var result = "";
  if (num <= 3) {
     result = str.slice(0, num).trim().concat("...");
  } else if (str.length === num) {
     return str;
  } else if (str.length > num) {
   result = str.slice(0, num - 2).trim().concat("...");
 } else if (str.length < num) {
   result = str.slice(0, num - 2).trim();
 }
  return result;
}

/* Write a function that splits an array (first argument) into groups the length
of size (second argument) and returns them as a two-dimensional array.
chunkArrayInGroups(["a", "b", "c", "d"], 2)
should return [["a", "b"], ["c", "d"]]. */

function chunkArrayInGroups(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i+= size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}


/* Return the remaining elements of an array after chopping off n elements
from the head. slasher([1, 2, 3], 2) */

function slasher(arr, howMany) {
  if (howMany > 0) {
    return arr.slice(howMany);
  } else {
    return arr;
  }
}
/* Return true if the string in the first element of the array contains all of
the letters of the string in the second element of the array. */

function mutation(arr) {
  var result = [];
  var filtered = arr.map(function(value) {
    return value.toLowerCase();
  });

  for (var i = 0; i < filtered[1].length; i++) {
    if (filtered[0].indexOf(filtered[1][i]) !== -1) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  if (result.indexOf(false) !== -1)  {
    return false;
  } else {
    return true;
  }
}

function mutationTwo(arr) {
  var filtered = arr.map(function(value) {
    return value.toLowerCase();
  });
  for (var i = 0; i < filtered[1].length; i++) {
    var result = filtered[0].indexOf(filtered[1][i]);
      if (result === -1) {
        return false;
      }
  }
  return true;
}

/* Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
  var newArr = [];
  newArr = arr.filter(formattedArr);
  function formattedArr(value) {
    return Boolean(value);
  }
  return newArr;
}

function bouncerTwo(arr) {
  var results = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      results.push(arr[i]);
    }
  }
  return results;
}

function boucerThree(arr) {
  return arr.filter(function(value) {
    return value;
  });
}


/* You will be provided with an initial array (the first argument in the
destroyer function), followed by one or more arguments. Remove all elements
from the initial array that are of the same value as these arguments. */


function destroyer(arr) {
  var newArr = [];
  var argumentsArr = Array.prototype.slice.call(arguments);
  var targets = argumentsArr.slice(1);

  for (var i = 0; i < arr.length; i++) {
    if (targets.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


function destroyerTwo(arr) {
  var argumentsArr = Array.prototype.slice.call(arguments);

  var newArr = arr.filter(function(value) {
    return argumentsArr.indexOf(value) === -1;
  })
  return newArr;
}
