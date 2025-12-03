let gameIcons = document.querySelectorAll(".image_setting");
let yourcount = document.querySelector("#yourcount");
let compcount = document.querySelector("#compcount");
let result = document.querySelector("#final_result");
let computerChoice = () => {
  let choices = ["rock", "paper", "scissor"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
};

let showWinner = (userWin) => {
  if (userWin) {
    yourcount.innerText = Number(yourcount.innerText) + 1;
    result.innerText = "User Win";
  } else {
    compcount.innerText = Number(compcount.innerText) + 1;
    result.innerText = "Computer Win";
  }
};

let calculateWinner = (userChoice, comChoice) => {
  if (userChoice === comChoice) {
    result.innerText = "Game is Drawn";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      userWin = comChoice === "rock" ? true : false;
    } else if (userChoice === "scissor") {
      userWin = comChoice === "paper" ? true : false;
    }
    showWinner(userWin);
  }
};
gameIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let userChoice = icon.getAttribute("id");
    let compChoice = computerChoice();
    calculateWinner(userChoice, compChoice);
  });
});

// let computerChoice = Math.floor(Math.random() * 3) + 1;
// rock.addEventListener("click", () => {
//   if (computerChoice === 2) {
//     console.log("winner is computer", computerChoice);
//   } else if (computerChoice === 3) {
//     console.log("Person wins the game", computerChoice);
//   } else {
//     console.log("game is draw", computerChoice);
//   }
//   computerChoice = Math.floor(Math.random() * 3) + 1;
// });

// paper.addEventListener("click", () => {
//   if (computerChoice === 1) {
//     console.log("winner is you", computerChoice);
//   } else if (computerChoice === 3) {
//     console.log("computer wins the game", computerChoice);
//   } else {
//     console.log("game is draw", computerChoice);
//   }
//   computerChoice = Math.floor(Math.random() * 3) + 1;
// });

// scissor.addEventListener("click", () => {
//   if (computerChoice === 1) {
//     console.log("winner is computer", computerChoice);
//   } else if (computerChoice === 2) {
//     console.log("person wins the game", computerChoice);
//   } else {
//     console.log("game is draw", computerChoice);
//   }
//   computerChoice = Math.floor(Math.random() * 3) + 1;
// });
