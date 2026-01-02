let arr1 = ["new1", "new2", "new3"];
// let arr2 = [...arr1, new2];
console.log(...arr1);
let student = {
  name: "bilal",
  rollno: 18,
  performance: "A+",
  message: "How you feel in the class",
};
let student1 = {
  name: "usama",
  rollno: 20,
  performance: "A",
  message: "Not feel will in the class",
};
let student3 = { ...student, ...student1 };
console.log(student3);
