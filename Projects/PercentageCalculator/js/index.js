// const urdusub = document.querySelector("#subject-1");
// const englishsub = document.querySelector("#subject-2");
// const Physicssub = document.querySelector("#subject-3");
// const chemistrysub = document.querySelector("#subject-4");
const result = document.querySelector("#result");
const formElements = document.querySelector("#form-container");
// const calbtn = document.querySelector("#calbtn");
const percentageCalculator = (event) => {
  event.preventDefault();
  const formdata = new FormData(formElements);
  const data = {};
  formdata.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
  const totalmarks = 400;
  const marksget =
    Number(data.Urdu) +
    Number(data.English) +
    Number(data.Physics) +
    Number(data.Chemistry);
  const totalpercent = (marksget / totalmarks) * 100;
  result.style.visibility = "visible";
  result.innerText = `You have got ${marksget} marks out of ${totalmarks} marks and your Percentage is : ${totalpercent}%`;
};
// calbtn.addEventListener("click", (event) => {
//   percentageCalculator(event);
// });
