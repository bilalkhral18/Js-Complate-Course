// In primitive datatypes normally we pass the value but if we are talking about the non primitive it sometimes pass by reference, pass by value
let a = 10;
let b = a;
let c = b;
let d = [1, 2, 3, 4, 5];
let f = [1, 2, 3, 4, 5];
console.log(`a : ${a}`);
console.log(`b : ${b}`);
console.log(`c : ${c}`);
console.log(`d : ${d === f}`);
console.log(`f : ${f == d}`);


// jump into main use of call by value or call by reference in functions