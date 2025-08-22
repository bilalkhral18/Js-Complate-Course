function myFunc(msg, number) {
  console.log(msg, number);
}

function sum(a, b) {
  const result = a + b;
  return result;
}
const sumResult = sum(5, 10);
// console.log(sumResult);

const multiplication = (a, b) => {
  console.log(a * b);
};
// multiplication(5, 10);

//             Practice Q.1
//
// let mysum = 0;
// const retVowels = (str) => {
//   if (typeof str !== "string") {
//     console.log("Please enter a valid string");
//   } else {
//     for (const char of str) {
//       if (
//         char === "a" ||
//         char === "A" ||
//         char === "e" ||
//         char === "E" ||
//         char === "i" ||
//         char === "I" ||
//         char === "o" ||
//         char === "O" ||
//         char === "u" ||
//         char === "U"
//       ) {
//         mysum += 1;
//       }
//     }
//   }
//   return mysum;
// };
// console.log(retVowels("Hello World"));

// newarr.forEach((num, idx, arr) => {
//   console.log(num ** 3);
// });
// let filteredArr = newarr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(filteredArr);
// let newarr = [12, 34, 67, 23, 89, 2, 5, 90, 45];
// const redval = newarr.reduce((accumulator, currval) => {
//   let max;
//   return accumulator > currval ? (max = accumulator) : (max = currval);
// });
// console.log(redval);

//                         Practice Q.1
// let marks = [45, 56, 89, 90, 23, 56, 98, 99];

// const NityPLusMarks = marks.filter((mark) => {
//   return mark >= 90;
// });
// console.log(NityPLusMarks);

//                         Practice Q.2
let usernumber = 20;
let arr = [];

for (let i = 1; i <= usernumber; i++) {
  arr.push(i);
}
console.log(arr);

const arrsum = arr.reduce((acc, curr) => {
  return acc + curr;
});
console.log(arrsum);
const arrprod = arr.reduce((acc, curr) => {
  return acc * curr;
});
console.log(arrprod);
