// СТРОКИ

const capitalizeFirstLetter = (str) => {
  if (str.length === 0) return str;
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i += 1) {
    result = `${result}${str[i]}`;
  }
  return result;
};

const reverseString = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }
  return result;
};

const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  const lower = str.toLowerCase();
  for (let i = 0; i < lower.length; i += 1) {
    if (vowels.includes(lower[i])) {
      count += 1;
    }
  }
  return count;
};

const truncateText = (str, maxLength) => {
  if (str.length <= maxLength) return str;
  let result = "";
  for (let i = 0; i < maxLength; i += 1) {
    result = `${result}${str[i]}`;
  }
  return `${result}...`;
};

const removeSpaces = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== " ") {
      result = `${result}${str[i]}`;
    }
  }
  return result;
};

console.log("1. capitalizeFirstLetter('привет'):", capitalizeFirstLetter("привет"));
console.log("2. reverseString('abc'):", reverseString("abc"));
console.log("3. countVowels('Hello'):", countVowels("Hello"));
console.log("4. truncateText('Очень длинная строка', 10):", truncateText("Очень длинная строка", 10));
console.log("5. removeSpaces('a b c'):", removeSpaces("a b c"));

// МАССИВЫ 

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
};

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const flattenArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j += 1) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

const uniqueValues = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log("1. sumArray([1, 2, 3]):", sumArray([1, 2, 3]));
console.log("2. filterEvenNumbers([1, 2, 3, 4]):", filterEvenNumbers([1, 2, 3, 4]));
console.log("3. findMax([5, 1, 9, 3]):", findMax([5, 1, 9, 3]));
console.log("4. flattenArray([[1, 2], [3, [4]]]):", flattenArray([[1, 2], [3, [4]]]));
console.log("5. uniqueValues([1, 2, 2, 3, 1]):", uniqueValues([1, 2, 2, 3, 1]));

// ЦИКЛЫ

const printNumbers = (n) => {
  for (let i = 1; i <= n; i += 1) {
    console.log(i);
  }
};

const calculateFactorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
};

const generateMultiplicationTable = (n) => {
  for (let i = 1; i <= 10; i += 1) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};

const sumOfDigits = (num) => {
  const digits = `${num}`;
  let sum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    sum += Number(digits[i]);
  }
  return sum;
};

const repeatString = (str, count) => {
  let result = "";
  for (let i = 0; i < count; i += 1) {
    result = `${result}${str}`;
  }
  return result;
};

console.log("1. printNumbers(5):");
printNumbers(5);

console.log("2. calculateFactorial(5):", calculateFactorial(5));

console.log("3. generateMultiplicationTable(3):");
generateMultiplicationTable(3);

console.log("4. sumOfDigits(123):", sumOfDigits(123));
console.log("5. repeatString('ab', 3):", repeatString("ab", 3));