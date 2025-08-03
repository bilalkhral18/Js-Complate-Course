// let number = parseInt(prompt("Enter a number"));

// if (number % 5 === 0) {
//   console.log("Yes number is the multiple of 5");
// } else {
//   console.log("No number is not the multiple of 5");
// }
let marks = parseInt(prompt("Enter your marks"));
let grade;

if (marks >= 80 && marks <= 100) {
  grade = "A";
} else if (marks >= 70 && marks < 80) {
  grade = "B";
} else if (marks >= 60 && marks < 70) {
  grade = "C";
} else if (marks >= 50 && marks < 60) {
  grade = "D";
} else if (marks >= 40 && marks < 50) {
  grade = "E";
} else if (marks >= 0 && marks < 40) {
  grade = "F";
} else {
  alert("Invalid marks entered");
}

if (grade !== undefined) {
  console.log("Your grade is: " + grade);
}
