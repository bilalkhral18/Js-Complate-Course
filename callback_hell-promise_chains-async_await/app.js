// Promises in js
// function getdata(dataid, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data not received");
//       resolve("Success");
//     }, 5000);
//   });
// }
// let promise = getdata(123);
// promise.then((res) => {
//   console.log("promise resolved", res);
// });
// promise.catch((err) => {
//   console.log("promise rejected", err);
// });

// console.log("One");
// console.log("Two");
// console.log("Three");

// function sumsub(a, b, value) {
//   if (value === "sum") {
//     console.log(a + b);
//   } else if (value === "sub") {
//     console.log(a - b);
//   } else {
//     console.log("You have ENtererd a wrong choice");
//   }
// }
// function calculator(a, b, operation, value) {
//   operation(a, b, value);
// }

// // calculator(2, 3, sumsub, "sub");
// // calculator(2, 3, sumsub, "sum");
function getdata(dataid, getnextdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataid);
      resolve("success");
      if (getnextdata) {
        getnextdata();
      }
    }, 2000);
  });
}
console.log("data1 loads...");
getdata(1).then((res) => {
  console.log("data2 loads...");
  getdata(2).then((res) => {
    console.log("data3 loads...");
    getdata(3).then((res) => {
      console.log("finally sucessfully retreval of data");
    });
  });
});
// console.log("data1 loads...");
// getdata(1)
//   .then((res) => {
//     console.log("data2 loads...");
//     return getdata(2);
//   })
//   .then((res) => {
//     console.log("data3 loads...");
//     return getdata(3);
//   })
//   .then((res) => {
//     console.log("finally sucessfully retreval of data");
//   });

// getdata(1, () => {
//   console.log("data2 loads...");
//   getdata(2, () => {
//     console.log("data3 loads");
//     getdata(3);
//   });
// });

// // getdata(3);
// function username(displayname) {
//   let name = prompt("Enter Your Name...");
//   displayname(name);
// }
// function display(name) {
//   console.log("wellcome ", name, " to javascript programming");
// }
// username(display);

// const checkUser = (userName, callback) => {
//   setTimeout(() => {
//     if (userName === "admin") {
//       console.log("Welcome Admin");
//       return callback();
//     } else {
//       callback();
//     }
//   }, 2000);
// };

// const registerUser = (userName, callback) => {
//   setTimeout(() => {
//     let userid = Math.floor(Math.random() * 1000);
//     callback(userid);
//   }, 2000);
// };

// const userProfile = (userid, callback) => {
//   setTimeout(() => {
//     const profileId = "PRO" + userid;
//     callback(profileId);
//   }, 2000);
// };

// const wellcomeEmail = (profileId, callback) => {
//   setTimeout(() => {
//     console.log("Wellcome email sent to profile:", profileId);
//     callback();
//   }, 2000);
// };

// const finalcallback = () => {
//   console.log("All operations completed successfully.");
// };
// console.log("1");
// checkUser("myname", () => {
//   console.log("2");
//   registerUser("myname", (userid) => {
//     console.log("3");
//     userProfile(userid, (profileId) => {
//       console.log("4");
//       wellcomeEmail(profileId, () => {
//         console.log("5");
//         finalcallback();
//       });
//     });
//   });
// });
