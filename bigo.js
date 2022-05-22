// Write an Algorithm that takes an array of numbers as input and
// calculate the sum of those numbers
// Define the Time Complexcity of that algorithm and determine
// what the lowest possible time complexcity is for this problem.

// ==========================================================================================

function sumNumbers(numbers){
    return numbers[0] + numbers[1] + numbers[2] // O(1) == Constant Time Complexcity
}

console.log(sumNumbers([1,3,10]))

// ==========================================================================================

// numbers = [1,3,10]
function sumNumbers2(numbers) {
  let result = 0; // Executes 1
  for (const number of numbers) { // Execute 1
    result += number; // Executes 3
    console.log("...."); // if we put any code in the iteration Executes 3
  }
  return result; // Execute 1
}

console.log(sumNumbers2([1, 3, 10])); // O(n) Linear Time Complexcity

// ==========================================================================================

function sumNumbers3(numbers) {
    return numbers.reduce((sum, curNum) => sum + curNum, 0) // Reduce also gives Linear Time Complexcity
  }

  console.log(sumNumbers3([1, 3, 10]))