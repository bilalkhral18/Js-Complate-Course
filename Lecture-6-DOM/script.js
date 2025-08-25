//                 Lecture 6 : Document Object Model

// window.alert("hello!");
// const button = document.getElementById("bgcolor");
// console.log(button);
// console.dir(button);
// const myclass = document.getElementsByClassName("myclass");
// console.log(myclass);
// console.dir(myclass);
// const parahs = document.getElementsByTagName("p");
// console.log(parahs);
// console.dir(parahs);
// const button = document.querySelector("#bgcolor");
// console.log(button);
// console.dir(button);
// const myclass = document.querySelectorAll(".myclass");
// console.log(myclass);
// console.dir(myclass);
// const body = document.querySelector("body");
// console.log(body);
// console.log(body.firstChild);

// const parahs = document.querySelector("p");
// console.log(parahs.tagName);
// console.dir(parahs);

// const mydiv = document.querySelector("#mydiv");
// console.log(mydiv.innerHTML);
// console.log(mydiv.children[0]);
// console.log(mydiv.lastChild);
// console.log(mydiv.children[5]);
// const p01 = document.getElementById("para-01");
// console.log(p01.firstChild.nodeName);
// const heading2 = document.querySelector("h2");
// heading2.innerText = heading2.innerText + " From Apna College students";
// const divs = document.querySelectorAll(".box");
// console.log(divs);
// divs.forEach((element, index) => {
//   element.innerText = "this is box number " + (index + 1);
// });
// divs.innerText = "this divs creatd by my own js file";
// const div = document.querySelector("div");
// div.style.backgroundColor = "red";
// div.style.color = "white";
// const button = document.createElement("button");
// button.innerText = "Click Me";
// const elements = document.querySelector("div");
// const uolist = elements.childNodes[1];
// uolist.after(button);

const button = document.createElement("button");
button.innerText = "Click Me";
button.style.backgroundColor = "red";
button.style.color = "white";

const body = document.querySelector("body");
body.prepend(button);
const para = document.querySelector("p");
para.classList.add("newparah");
