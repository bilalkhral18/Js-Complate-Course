const userAnswer = document.querySelector("#userAnswer");
const formValues = document.querySelector("#formValues");
let count = document.querySelector("#count");
let random_question = document.querySelector("#random_question");
let answer;
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateQuestion() {
  let randomNum1 = getRandomArbitrary(0, 10);
  let randomNum2 = getRandomArbitrary(0, 10);
  answer = randomNum1 * randomNum2;
  random_question.innerText = `Q. What is ${randomNum1} multiply by ${randomNum2}`;
}

generateQuestion();
function answerForm(event) {
  event.preventDefault();
  const getobj = new FormData(formValues);
  const getValues = Object.fromEntries(getobj);
  if (answer === parseInt(getValues.userAnswer)) {
    count.innerText++;
  } else {
    count.innerText--;
  }
  generateQuestion();
  userAnswer.value = "";
}
