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

function sumArr(arr) {
    total = 0;
    while(arr.length > 0) {
      total += arr.pop();
    }
    return total;
}

/* Write a range function that takes two arguments, start and end,
and returns an array containing all the numbers from start up to
(and including) end. */

function range(start, end) {
    var result = [start];

    for (var i = start; i < end; i++) {
        result.push(start + 1);
        start = result[result.length - 1];
    }
    return result;
};



/* reverseArray, takes an array as argument and produces a
new array that has the same elements in the inverse order. */


function reverseArray(arr) {
    newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};

/* modifies the array given as argument in order to reverse
its elements */

function reverseArrayInPlace(arr) {
    var lent = arr.length;
    for (var i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    arr = arr.slice(lent);
    return arr;
};

// counts how many Bs are in the given string
function countBs(str, letter) {
    let count = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count.push(letter);
        }
    }
    console.log(count.length);
}

// return the length ofthe longes word inthe provided sentence

function findLongestWord(str) {

    var arr = str.split(" ");
    var lengths = [];
    for (var i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    sortedLength = lengths.sort();
    return sortedLength[sortedLength.length - 1];
}

// return true if a string is a palindrome

function palindrome(str) {
    var formattedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    if (formattedStr === formattedStr.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
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
  });
  return newArr;
}


/* Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The returned
value should be a number. getIndexToIns([40, 60], 50) returns 1*/



function getIndexToIns(arr, num) {
  var newArr = arr.concat(num);
  var sorted = newArr.sort(function(a,b) {
    return a - b;
  });
  return sorted.indexOf(num);
}

/* Write a function which takes a ROT13 encoded string as input and returns a
decoded string. */

function rot13(str) {
  var arr = [];
  var result = "";

  for (var i = 0; i < str.length; i++) {
    arr = arr.concat(str.charCodeAt(i));
  }

  for (var i = 0; i < str.length; i++) {
    if (arr[i] <= 64 || arr[i] >= 91) {
      arr[i];
    } else if (arr[i] >= 78) {
      arr[i] -= 13;
    } else {
      var subtract = (90 - arr[i]) - 13;
      arr[i] = 90 - subtract;
    }
  }
  return result.concat(String.fromCharCode.apply(null, arr));
}

// Convert the given number into a roman numeral.
// 2 should return "II"
function convertToRomanOneToHundred(num) {
  var result = "";
  var romanNumbers = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DD",
    700: "DDD",
    800: "DCCC",
    900: "CM"
  };

    if (num <= 10) {
      result = romanNumbers[num];
    } else if (num > 10 && num <= 20) {
      result = romanNumbers[10] + romanNumbers[num - 10];
    } else if (num > 20 && num <= 30) {
      result = romanNumbers[20] + romanNumbers[num - 20];
    } else if (num > 30 && num <= 40) {
      result = romanNumbers[30] + romanNumbers[num - 30];
    } else if (num > 40 && num <= 50) {
      result = romanNumbers[40] + romanNumbers[num - 40];
    } else if (num > 50 && num <= 60) {
      result = romanNumbers[50] + romanNumbers[num - 50];
    } else if (num > 60 && num <= 70) {
      result = romanNumbers[60] + romanNumbers[num - 60];
    } else if (num > 70 && num <= 80) {
      result = romanNumbers[70] + romanNumbers[num - 70];
    } else if (num > 80 && num <= 90) {
      result = romanNumbers[80] + romanNumbers[num - 80];
    } else if (num > 90 && num <= 100) {
      result = romanNumbers[90] + romanNumbers[num - 90];
    }
    return result;
}

function convertToRoman(num) {
  var romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var roman = "";

  for (var key in romanNum) {
    while(num >= romanNum[key]) {
      roman += key;
      num -= romanNum[key];
    }
  }
    return roman;
}
/* Check if the predicate (second argument) is truthy on all elements of a
collection (first argument). */

function truthCheck(collection, pre) {
  return collection.every(function(eachObj) {
    return eachObj[pre];
  })
}

/* Pig Latin takes the first consonant (or consonant cluster) of an English
word, moves it to the end of the word and suffixes an "ay"
If a word begins with a vowel you just add "way" to the end.
*/

function translatePigLatin(str) {

  var result = "";
  var counter = 0;

  if (['a', 'e', 'i', 'o', 'u'].indexOf(str[0].toLowerCase()) !== -1) {
    result = str.toLowerCase().concat("way");
  } else {
    while(['a', 'e', 'i', 'o', 'u'].indexOf(str.toLowerCase()) === -1 && counter < str.length) {
      result += str[counter];
      counter++;
    }
  }
  return result;
}

/* Perform a search and replace on the sentence using the arguments provided and
return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
*/


function myReplace(str, before, after) {
  var isCapital = before[0] === before[0].toUpperCase();
  var arr = str.split(" ");

 for(var i = 0; i < arr.length; i++) {
   if (arr[i] === before && isCapital) {
     arr[i] = after[0].toUpperCase() + after.slice(1);
   } else if (arr[i] === before && isCapital !== true) {
     arr[i] = after;
   }
 }
  return arr.join(" ");
}

function myReplaceTwo(str, before, after) {

  if(before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase + after.slice(1);
  }

  return str.replace(before, after);
}


/* Given a positive integer num, return the sum of all odd Fibonacci numbers
that are less than or equal to num.*/

function sumFibs(num) {
  var findFib = [1,1];

  for (var i = 0; i < num; i++) {
    findFib.push(findFib[i] + findFib[i + 1]);
  }

  var notBiggerThanNum = findFib.filter(function(value) {
    return value <= num && value % 2 !== 0;
  });

 return notBiggerThanNum.reduce(function(sum, value) {
  return sum + value;}, 0);
}


/* Sum all the prime numbers up to and including the provided number. */



function sumPrimes(num) {
  var primes = [];
  for (var i = 2; i < num; i++) {
    if (isPrimeNumber(i)) {
      primes.push(i)
    }
  }


  function isPrimeNumber(num) {
    for (var j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }


  return primes;
}

/* Make a function that looks through an array of objects (first argument) and
returns an array of all objects that have matching property and value pairs
(second argument). Each property and value pair of the source object has to be
present in the object from the collection if it is to be included in the
returned array.
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }] */


function whatIsInAName(collection, source) {
  debugger
  var arr = collection.filter(function(value) {
    for (var i in source) {
      if (source[i] !== value[i]) {
        return false;
      }
    }
    return true;
  });

  return arr;
}


/* Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two
divisors, one and itself. For example, 2 is a prime number because it's only
divisible by one and two. sumPrimes(10) should return 17. */

// function sumPrimes(num) {
//
// var primes = 0;
//
// for (var i = 2; i < num; i++) {
//   if (num % i === 0) {
//     primes;
//   } else {
//     primes += num;
//   }
// }
//   return primes;
// }



/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
("abce") should return "d"*/


function fearNotLetter(str) {
  var stringChars = [];
  for (var j = 0; j < str.length; j++) {
    stringChars.push(str.charCodeAt((j)));
  }

  for (var i = 0; i < stringChars.length; i++) {
    if (stringChars[i + 1] - stringChars[i] > 1) {
      return String.fromCharCode(stringChars[i] + 1);
    }
  }
  return undefined;
}
