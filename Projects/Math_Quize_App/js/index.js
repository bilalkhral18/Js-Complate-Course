const userAnswer = document.querySelector("#userAnswer");
const formValues = document.querySelector("#formValues");
let count = document.querySelector("#count");
let random_question = document.querySelector("#random_question");
const feedback = document.querySelector("#feedback");
let answer;
count.innerText = localStorage.getItem("counter") || 0;
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateQuestion() {
  let randomNum1 = getRandomArbitrary(0, 10);
  let randomNum2 = getRandomArbitrary(0, 10);
  let Question = getRandomArbitrary(1, 5);
  if (Question > 3 && randomNum2 > randomNum1) {
    let temp = randomNum1;
    randomNum1 = randomNum2;
    randomNum2 = temp;
  }
  switch (Question) {
    case 1:
      random_question.innerText = `Q. What is ${randomNum1} Add to ${randomNum2}?`;
      answer = randomNum1 + randomNum2;
      break;

    case 2:
      random_question.innerText = `Q. What is ${randomNum1} Subtract from ${randomNum2}?`;
      answer = randomNum1 - randomNum2;
      break;

    case 3:
      random_question.innerText = `Q. What is ${randomNum1} Multiply By ${randomNum2}?`;
      answer = randomNum1 * randomNum2;
      break;

    case 4:
      random_question.innerText = `Q. What is ${randomNum1} Divided By ${randomNum2}?`;
      answer = randomNum1 / randomNum2;
      break;
    default:
      random_question.innerText = `Q. What is ${randomNum1} Subtract from ${randomNum2}?`;
      answer = randomNum1 - randomNum2;
      break;
  }
}

generateQuestion();
function answerForm(event) {
  event.preventDefault();
  const getobj = new FormData(formValues);
  const getValues = Object.fromEntries(getobj);
  let counter;
  if (answer === parseInt(getValues.userAnswer)) {
    counter = Number(count.innerText) + 1;
    feedback.innerText = `Your correct and your answer is ${answer}`;
    feedback.classList.add("feedbackCorrect");
    feedback.classList.remove("feedbackWrong");
  } else {
    counter = Number(count.innerText) - 1;
    feedback.innerText = `Your wrong and correct answer is ${answer}`;
    feedback.classList.add("feedbackWrong");
    feedback.classList.remove("feedbackCorrect");
  }
  count.innerText = counter;
  localStorage.setItem("counter", counter);
  generateQuestion();
  userAnswer.value = "";
}
