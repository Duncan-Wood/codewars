// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//My Solution:
var countSheep = function (num) {
  let result = ''; // Initialize an empty string to store the result

  for (let i = 1; i <= num; i++) {
    result += i + ' sheep...'; // Append the current count and 'sheep...' to the result
  }

  return result; // Return the final result
}