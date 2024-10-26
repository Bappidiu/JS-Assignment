// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }

//Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("The sum of numbers from 1 to 10 is:", sum);

//Calculate the sum of odd numbers greater than 10 and less than 30
let sum1 = 0;
for (let i = 11; i < 30; i += 2) {
  sum1 += i;
}

console.log("The sum of odd numbers between 10 and 30 is:", sum1);

//Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const celsius = 48;
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log("The given celsius converted to Fahrenheit is:",fahrenheit);

//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositiveNumbers(numbers) {
    const positiveNumbers = numbers.filter(numbers => numbers > 0);
    return positiveNumbers;
  }
  

  const numbers = [-2, 5, 0, 3, -1, 8];
  const positiveNumbers = getPositiveNumbers(numbers);
  console.log(positiveNumbers);

// Find the lowest number in the array below.
//Input = [167, 190, 120, 165, 137];

const input = [167, 190, 120, 165, 137];

let lowestNumber = input[0]; 

for (let i = 1; i < input.length; i++) {
  if (input[i] < lowestNumber) {
    lowestNumber = input[i];
  }
}

console.log("The lowest number is:", lowestNumber);

//Find the friend with the smallest name.
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallestName = friends[0];
let smallestLength = friends[0].length;

for (let i = 1; i < friends.length; i++) {
  if (friends[i].length < smallestLength) {
    smallestName = friends[i];
    smallestLength = friends[i].length;
  }
}

console.log("The friend with the smallest name is:", smallestName);

//Implement a countdown timer that counts down from 81 to 65.
let countdown = 81;

const intervalId = setInterval(() => {
  console.log(countdown);
  countdown--;

  if (countdown < 65) {
    clearInterval(intervalId);
  }
}, 1000);

//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function processNumber(number) {
    if (number % 2 === 1) {
      // Odd number
      return number * 2;
    } else {
      // Even number
      return number / 2;
    }
  }
  
  const num1 = 7;
  const result1 = processNumber(num1);
  console.log(result1);

  //  Write two functions, findMax and findMin, that take an array of numbers and return the largest and smallest numbers, respectively. Use the spread operator with Math.max and Math.min.  


findMax([1, 2, 3, 4, 5]);  
findMin([1, 2, 3, 4, 5]);   

function findMax(numbers) {
    return Math.max(...numbers);
  }
  
  function findMin(numbers) {
    return Math.min(...numbers);
  }
  
  const numbers1 = [1, 2, 3, 4, 5];
  
  console.log(findMax(numbers));
  console.log(findMin(numbers));


//  Write a function getPersonDetails that takes an object with properties name, age, and location and returns a string in the format "Name: [name], Age: [age], Location: [location]". Use destructuring.  

function getPersonDetails({ name, age, location }) {
    return `Name: ${name}, Age: ${age}, Location: ${location}`;
  }
  
  const person = { name: "Hasib", age: 23, location: "Mirpur" };
  const details = getPersonDetails(person);
  console.log(details);

//  Given an array of integers, write a function using the map method to return an array where each number is replaced with its square if it’s even, or its cube if it’s odd.

function squareOrCube(numbers) {
    return numbers.map(number => {
      if (number % 2 === 0) {
        return number * number;
      } else {
        return number * number * number;
      }
    });
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const outputArray = squareOrCube(inputArray);
  console.log(outputArray);

