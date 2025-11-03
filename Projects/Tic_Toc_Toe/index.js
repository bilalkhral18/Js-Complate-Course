let boxes = document.querySelectorAll(".cell");
let resetbtn = document.querySelector("#resetbtn");
let modalmessage = document.querySelector("#modal-message");
let mdlbtn = document.querySelector("#mdlbtn");
let playerName;
do {
  playerName = prompt(
    "Enter Player Name which x or  0 only these two are allowed"
  );
} while (playerName !== "x" && playerName !== "0");
let turn0 = playerName === "0" ? true : false;
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") return; // Prevent overwriting a filled cell

    if (turn0) {
      box.textContent = "0";
    } else {
      box.textContent = "X";
    }
    count++;
    turn0 = !turn0;
    checkwin();
  });
});
let clearBoxes = () => {
  boxes.forEach((box) => {
    box.textContent = "";
  });
};

resetbtn.addEventListener("click", clearBoxes);

mdlbtn.addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
  clearBoxes();
});
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let checkwin = () => {
  let winnerFound = false;
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].textContent;
    let pos2 = boxes[pattern[1]].textContent;
    let pos3 = boxes[pattern[2]].textContent;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        document.getElementById("modal").classList.remove("hidden");
        modalmessage.textContent = `Player ${pos1} wins!`;
        winnerFound = true;
        return;
      }
    }
  }
  if (!winnerFound && count === 9) {
    document.getElementById("modal").classList.remove("hidden");
    modalmessage.textContent = `It's a Draw!`;
    return;
  }
};
