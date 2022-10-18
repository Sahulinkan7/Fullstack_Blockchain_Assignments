// 1. Write a program to find whether a given year is a leap year or not.

let year = 1996;

if (year % 400 == 0) {
  console.log("Leap Year");
} else if (year % 100 == 0 || year % 4 != 0) {
  console.log("Not a leap Year");
} else {
  console.log("Leap Year");
}

// 2. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C

var c = 60;
var f = 45;

let temp_in_c;
let temp_in_f;

temp_in_c = ((f - 32) * 5) / 9;
temp_in_f = (c * 9) / 5 + 32;
console.log(c + "°C is " + temp_in_f + "°F " + f + "°F is", temp_in_c + "°C");

// 3. Write a program to find the factorial of a number.
var num = 7;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log("Factorial of ", num, "is ", fact);
