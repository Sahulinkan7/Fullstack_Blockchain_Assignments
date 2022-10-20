// Javascript Assignment 2

// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

function checkTriangle(x, y, z) {
  // Check for equilateral triangle
  if (x == y && y == z) console.log("Equilateral Triangle");
  // Check for isosceles triangle
  else if (x == y || y == z || z == x) console.log("Isosceles Triangle");
  // Otherwise scalene triangle
  else console.log("Scalene Triangle");
}

checkTriangle(4, 4, 5);

// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

function studentmarks(score) {
  let marks = score;
  let grade;
  switch (true) {
    case marks >= 90 && marks <= 100:
      grade = "S grade";
      break;
    case marks >= 80 && marks < 90:
      grade = "A grade";
      break;
    case marks >= 70 && marks < 80:
      grade = "B grade";
      break;
    case marks >= 60 && marks < 70:
      grade = "C grade";
      break;
    case marks >= 50 && marks < 60:
      grade = "D grade";
      break;
    case marks >= 40 && marks < 50:
      grade = "E grade";
      break;
    case marks >= 0 && marks < 40:
      grade = "Student has failed";
      break;
    default:
      console.log("Invalid marks");
  }
  return grade;
}
op = studentmarks(77);
console.log(op);

// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000

function multiples3and5() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 3 == 0) {
      sum += i;
    }
    if (i % 5 == 0) {
      sum += i;
    }
  }
  //   for (let j = 0; j <= arr.length - 1; j++) {
  //     sum = sum + arr[j];
  //   }
  return sum;
}
op = multiples3and5();
console.log(op);

// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

function prime(start, end) {
  let arr = [];
  let primen = true;
  for (let i = start; i <= end; i++) {
    primen = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        primen = false;
      }
    }
    if (primen) {
      arr.push(i);
    }
  }
  return arr;
}

op = prime(1, 100);
console.log(op);
