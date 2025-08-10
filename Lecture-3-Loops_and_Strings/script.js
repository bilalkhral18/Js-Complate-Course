// For Loop

// for (let i = 0; i <= 5; i++) {
//   console.log("apna college");
// }
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// while loop
// let i = 0;
// while (i <+ 5) {
//   console.log("apna college");
//   i++;
// }

// do while loop
// let i = 1;
// do {
//   console.log("apna college");
//   i++;
// } while (i <= 10);

// for of loop
// let newobj = {
//   name: "Rai Bilal",
//   age: 20,
//   city: "Karachi",
// };
// for (let key in newobj) {
//   console.log("key :", key, "value :", newobj[key]);
// }

// let str = "My name is john cena";
// for (let char of str) {
//   if (char == " ") {
//   } else {
//     console.log(char);
//   }
// }

//Practice Questions

//Q1: prints all even numbers from 0 to 100

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Q2: create a game where user with any random game number.
//Ask the user to keep guessing the game number until the user enter correct value.

// let gamenumber = 25;
// let usernumber;
// do {
//   usernumber = prompt("Guess the number");
// } while (Number(usernumber) !== gamenumber);
// console.log("congratulation you have guess the correct number:", usernumber);

// Stings in Javascript

// let str = "ApnaCollege";
// let str3 = "chenga college";
// let str2 = "bilalAhmad ko le jao";
// let newstr2 = str2.replaceAll("l", "p");
// console.log(newstr2);

// Template Literals

// let obj = {
//   name: "bilal",
//   age: 23,
//   greet: () => {
//     return console.log("Hello this the method");
//   },
// };
// const details = `My name is ${obj.name}. My age is ${
//   obj.age
// }. Method is ${obj.greet()}`;
// console.log(details);

// Practice Question

let FullName = prompt("Enter Your Full Name");
let username = "@" + FullName + FullName.length;
console.log(username);
