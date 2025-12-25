// console.log("One");
// console.log("Two");
// console.log("Three");

function sumsub(a, b, value) {
  if (value === "sum") {
    console.log(a + b);
  } else if (value === "sub") {
    console.log(a - b);
  } else {
    console.log("You have ENtererd a wrong choice");
  }
}
function calculator(a, b, operation, value) {
  operation(a, b, value);
}

// calculator(2, 3, sumsub, "sub");
// calculator(2, 3, sumsub, "sum");
function getdata(dataid, getnextdata) {
  setTimeout(() => {
    console.log(dataid);
    if (getnextdata) {
      getnextdata();
    }
  }, 2000);
}
console.log("data1 loads...");
getdata(1, () => {
  console.log("data2 loads...");
  getdata(2, () => {
    console.log("data3 loads");
    getdata(3);
  });
});

// getdata(3);
function username(displayname) {
  let name = prompt("Enter Your Name...");
  displayname(name);
}
function display(name) {
  console.log("wellcome ", name, " to javascript programming");
}
username(display);
