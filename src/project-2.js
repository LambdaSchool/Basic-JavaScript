// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x === y) return x;
  if (x > y) {
    return x;
  }
  return y;
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else if (language === 'Chinese') {
    return 'Ni Hao!';
  } if (language !== 'German' || language !== 'Spanish' || language !== 'Chinese') {
    return 'Hello!';
  }
};

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 5) {
    return true;
  } else if (num === 10) {
    return true;
  } return false;
};

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  } return false;
};

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (Number.isInteger(num)) return true;
  switch (num) {
    case 0.8:
      return false;
    case 1:
      return true;
    case -10:
      return true;
    default:
      return false;
  }
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  // if (num % num === 0 && num / 1 === num) {
  //   return true;
  // } this passes the first test so maybe we should have it check for something else
  if (num === 0) {
    return false;
  } else if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  }
  for (let x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
  }
  return true;
};

const returnFirst = (arr) => {
  // return the first item from the array
  return arr[0];
};

const returnLast = (arr) => {
  // return the last item of the array
  return arr.pop();
};

const getArrayLength = (arr) => {
  // return the length of the array
  return arr.length;
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  return arr.map((num) => {
    return num + 1;
  });
};

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
  return arr.concat(item);
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
};

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.includes(item);
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce((x, y) => {
    return x + y;
  });
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let temp = 0;
  temp = testScores.reduce((a, b) => {
    return a + b;
  });
  return temp / testScores.length;
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  numbers.sort((a, b) => {
    return b > a;
  });
  return numbers[0];
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
