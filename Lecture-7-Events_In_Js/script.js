const btn1 = document.getElementById("btn1");
let color = "white";
btn1.addEventListener("click", (event) => {
  console.log("Button Clicked");
  if (color === "white") {
    document.body.style.backgroundColor = "black";
    color = "black";
  } else {
    document.body.style.backgroundColor = "white";
    color = "white";
  }
});
