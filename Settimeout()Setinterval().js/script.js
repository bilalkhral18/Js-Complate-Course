setTimeout(() => {
  clearInterval(intervalId);
  console.log("stopped!");
}, 10000);

console.log("Hello World");

const intervalId = setInterval(() => {
  console.log("Rai bilal");
}, 2000);
