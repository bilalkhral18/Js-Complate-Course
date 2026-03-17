// // start with classes
// const student = {
//   fullName: "sharadha Khapra",
//   marks: "345",
//   printMarks: function () {
//     console.log(this.marks);
//   },
// };

// const employee = {
//   caltax() {
//     console.log("tax rate is 10 ");
//   },
// };
// const karanArjun = {
//   salary: 50000,
// };
// const karanArjun2 = {
//   salary: 50000,
// };
// const karanArjun3 = {
//   salary: 50000,
// };
// const karanArjun4 = {
//   salary: 50000,
// };

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

//                           : classes in js
//             Inheritance
// class ToyotaCar {
//   constructor(brand) {
//     this.brandName = brand;
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
// }
// class Fortuner extends ToyotaCar {}
// let fortuner1 = new Fortuner("fortuner1");
//          Example
// class Person {
//   constructor(name) {
//     this.species = "Homo Sapiens";
//     this.name = name;
//   }
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }

// class Engineer extends Person {
//   constructor(name) {
//     super(name);
//     this.branch = "Lahore";
//   }
//   work() {
//     super.eat();
//     console.log("solve Intensive problems");
//   }
// }
// class Doctor extends Person {
//   work() {
//     super.eat();
//     console.log("check patient");
//   }
// }

// let bilalEng = new Engineer("bilal Engineer");
// let bilalDoc = new Doctor();

//                                Practice Set
// class User {
//   userInfo(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log(this.name, this.email);
//   }
// }
// class Admin extends User {
//   editData(updateName, updateEmail) {
//     console.log(this.name, this.email);
//     this.name = updateName;
//     this.email = updateEmail;
//     console.log(this.name, this.email);
//   }
// }
// let user1 = new User();
// user1.userInfo("bilal", "dweb88905@gmail.com");
// let admin = new Admin();
// admin.editData("sobia", "sobia@gmail.com");
// admin.viewData();
//                     Error Handling

let a = 10;
let b = 20;
let c = 40;
console.log("a+b", a + b);
console.log("a-b", a - b);
console.log("a+b+c", a + b + c);
try {
  console.log("a+b-d", a + b - d);
} catch (error) {
  console.log(error);
}
console.log("a=b", a + b);
console.log("a=b", a + b);
console.log("a=b", a + b);
console.log("a=b", a + b);
console.log("a=b", a + b);
console.log("a=b", a + b);
