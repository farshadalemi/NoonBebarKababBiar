const scoreBoard = {
  Kabab: 0,
  Noon: 0,
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "Right Hand") {
    if (computerMove === "Right Hand") {
      result = "🍢 Kabab 😀";
    } else if (computerMove === "Left Hand") {
      result = "🫓 Noon 😭";
    }
  } else if (playerMove === "Left Hand") {
    if (computerMove === "Left Hand") {
      result = "🍢 Kabab 😀";
    } else if (computerMove === "Right Hand") {
      result = "🫓 Noon 😭";
    }
  }

  if (result === "🍢 Kabab 😀") {
    scoreBoard.Kabab += 1;
  } else {
    scoreBoard.Noon += 1;
  }

  alert(
    ` >> U picked ${playerMove} \n >> Computer picked ${computerMove} \n${result} \n\n 🍢 Kabab: ${scoreBoard.Kabab}\n 🫓 Noon: ${scoreBoard.Noon}`
  );
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 2) {
    computerMove = "Right Hand";
  } else {
    computerMove = "Left Hand";
  }
  return computerMove;
}
