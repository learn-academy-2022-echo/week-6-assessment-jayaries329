// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// a) Create a test with an expect statement using the variable provided.
describe("workingFolks", () => {
  test ("returns an array with a sentence about each person with their name capitalized", () => {
      expect (workingFolks(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
      
      
  })
})
// Good Failure.
// FAIL  ./code-challenges.test.js
// workingFolks
//   ✕ returns an array with a sentence about each person with their name capitalized (1 ms)

// ● workingFolks › returns an array with a sentence about each person with their name capitalized

//   ReferenceError: workingFolks is not defined




// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function named workingFolks that takes in an array and returns an array
// Use a .map method with a .split method in the argument as a higher order function to separate the name element into 2 words.
// Attach a .map method with a charAt method, to UpperCase method, and a .slice method in the argument as a higher order function to capitalize the first letters in the name element and put the remaining characters back in the string.
// Use a .join with concatenation to put the capitalized name element string with the occupation element string to form a complete sentence.
// This code was created from a collaborative pair-programming session with my cohort mates where we walked through step by step to solve the challenge. Sarah's break down of the .map method along with high-order functions was quite the inspiration behind this.

const workingFolks = (array) => {
  return array.map(input =>
          input.name
          .split(" ")
          .map(input =>
              input.charAt(0).toUpperCase() + input.slice(1)
              ).join(" ") + " is " + input.occupation
  )
}
console.log(workingFolks(people));
// I've tried this test several times while refactoring the inputs and I keep getting failed test results. The code works just fine and I'm willing to bet that the issue is probably something very simple that I'm over looking.
// FAIL  ./code-challenges.test.js
// workingFolks
//   ✕ returns an array with a sentence about each person with their name capitalized (5 ms)

// ● workingFolks › returns an array with a sentence about each person with their name capitalized

//   expect(received).toEqual(expected) // deep equality

//   - Expected  - 3
//   + Received  + 3

//     Array [
//   -   "Ford Prefect is a hitchhiker.",
//   -   "Zaphod Beeblebrox is president of the galaxy.",
//   -   "Arthur Dent is a radio employee.",
//   +   "Ford Prefect is a hitchhiker",
//   +   "Zaphod Beeblebrox is president of the galaxy",
//   +   "Arthur Dent is a radio employee",
//     ]

//     23 | describe("workingFolks", () => {
//     24 |   test ("returns an array with a sentence about each person with their name capitalized", () => {
//   > 25 |       expect (workingFolks(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//        |                                     ^
//     26 |       
//     27 |       
//     28 |   })

//     at Object.toEqual (code-challenges.test.js:25:37)




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// a) Create a test with an expect statement using the variables provided.
describe("numbers", () => {
  test ("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      expect (numbers(hodgepodge1)).toEqual([2, 0, -1, 0])
      expect (numbers(hodgepodge2)).toEqual([2, 1, -1])
      
      
  })
})
// Good fail.
// FAIL  ./code-challenges.test.js
// numbers
//   ✕ returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// ● numbers › returns an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: numbers is not defined




// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function called numbers that takes in an array.
// Use built-in method .filter to extract only the number values from the array.
// Use built-in method .map to iterate the number values and divide them by 3 with the modulo operator to obtain remainders from the division.
// Return those remainders in an array.

const numbers = (array) => {
  return array.filter(value => typeof value === "number")
  .map(num => num % 3)
}
// Test Passed!!!
// PASS  ./code-challenges.test.js
// numbers
//   ✓ returns an array of only the REMAINDERS of the numbers when divided by 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.345 s, estimate


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// a) Create a test with an expect statement using the variables provided.
describe("sumOfCubes", () => {
  test ("returns the sum of all the numbers cubed", () => {
      expect (sumOfCubes(cubeAndSum1)).toEqual(99)
      expect (sumOfCubes(cubeAndSum2)).toEqual(1125)
      
      
  })
})
//  Good Fail
// FAIL  ./code-challenges.test.js
// sumOfCubes
//   ✕ returns the sum of all the numbers cubed (1 ms)

// ● sumOfCubes › returns the sum of all the numbers cubed

//   ReferenceError: sumOfCubes is not defined



// b) Create the function that makes the test pass.
// Pseudo code:
// Create a function called sumOfCubes that takes in an array.
// Create an empty array called cubes that will hold the final value.
// Use a .map method to iterate through the array and cube the numbers contained, then push the final value to the empty array.
// Return that array

const sumOfCubes = (array) => {
  let cubes = 0
  array.map(value => {cubes += (value ** 3)})
  return cubes
}

console.log(sumOfCubes(cubeAndSum2))
// Test Passed!!!
// PASS  ./code-challenges.test.js
// sumOfCubes
//   ✓ returns the sum of all the numbers cubed (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.359 s, estimated 1 s
// Ran all test suites.

