// Arrays in js

let heros = ["hulk", "thor", "banner", "loki", "antman"];

//                          Using For-Of loop
// for (const hero of heros) {
//   console.log("Hero is:", hero);
// }

//                         Using For loop
// for (let index = 0; index < heros.length; index++) {
//   console.log(heros[index]);
// }

//                       Using For-In loop
// console.log("Here is the list of heroes: \n");
// for (const hero in heros) {
//   console.log(heros[hero].toUpperCase());
// }

//                   Practice Setion :1
// let marks = [85, 97, 44, 37, 76, 60];
// let totalMarks = 0;
// for (const mark of marks) {
//   totalMarks = totalMarks + mark;
// }
// console.log("Average of This Class : ", totalMarks / marks.length);

//                   Practice Setion :2
// let itemsPrices = [250, 645, 300, 900, 50];

// let offerPric = itemsPrices.map((item) => {
//   return item - item * 0.1;
// });
// console.log("Values after applying offer : ", offerPric);

// for (let index = 0; index < itemsPrices.length; index++) {
//   let Offer = itemsPrices[index] / 10;
//   itemsPrices[index] = itemsPrices[index] - Offer;
// }

// console.log("Values after applying offer : ", itemsPrices);

//                     Array Methods
// let itemsChar = ["john", "wick", "marvel", "studios"];
// let itemsPakChar = ["shan", "momamRana", "newRana"];
// let myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];
// itemsPrices.push(456, 678);
// myArray.pop();
// itemsPrices.pop(2);
// console.log(itemsPrices);
// let itemsString = itemsPrices.toString();
// console.log(itemsString);
// let newchars = itemsChar.concat(itemsPakChar, itemsPrices);
// console.log(newchars);
// itemsPrices.unshift(4567, 456789);
// itemsPrices.shift(4567, 456789);
// let itemsPrices = [250, 645, 300, 900, 50, 670, 120, 23456];
// // let sliceItemsPrice = itemsPrices.slice(0, 3);
// itemsPrices.splice(1, 1, 100);
// console.log(itemsPrices);
let itemsPrices = [
  "bloomberg",
  "microsoft",
  "uber",
  "google",
  "IBM",
  "Netflix",
];
itemsPrices.shift();
itemsPrices.splice(1, 1, "ola");
itemsPrices.push("amazon");
console.log(itemsPrices);
