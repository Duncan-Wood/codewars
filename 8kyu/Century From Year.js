// DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

//My Solution:
function century(year) {
    // Finish this :)
    
    //each century is 100 years
    // if there is a remainder, round up to the next number
    
    // What function rounds a number up?
    
    let centuries = Math.ceil(year / 100)
    
    return centuries;
  }