// let arr = [12, 13, 14];
// let [x, y, z] = arr;
// console.log(x, y, z); // 12 13 14
// let obj = {
//   name: "John",
//   age: 30,
//   place: "New York",
//   hobbies: ["reading", "gaming"],
//   reading: true,
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };
// let { name, age, place, ...rest } = obj;
// console.log(name, age, place, rest); // John 30 New York { hobbies: [ 'reading', 'gaming' ], reading: true, greet: [Function: greet] }
// Spread Operator

const sum = (...numbers) => {
  return console.log(numbers.reduce((acc, curr) => acc + curr, 0));
};

let arr = [1, 2, 3];
sum(...arr); // 6
