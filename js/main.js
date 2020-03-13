$(function() {
  // GLOBAL
  let userChoice; // user R, P, S
  let botChoice; // bot R, P, S
  let userScore = 0;
  let botScore = 0;
  let userRound = 0;
  let botRound = 0;
  // ROUND
  $("button").click(e => {
    userChoice = $(e.target).attr("id");
    playGame();
    console.log(userChoice, botChoice);
    // checkRound();
  });

  function playGame() {
    // bot choice
    botChoose();
    compare();
    displayResult();
    incrementScore();
    checkRound();
    addRoundScore();
    console.log(userScore, botScore);
  }

  function botChoose() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      botChoice = "rock";
    } else if (randomNumber === 2) {
      botChoice = "paper";
    } else if (randomNumber === 3) {
      botChoice = "scissors";
    } else {
      console.log("something went wrong");
    }
  }
  function compare() {
    if (userChoice === "rock") {
      if (botChoice === "rock") {
        return "tie.";
      } else if (botChoice === "paper") {
        return "lose -- sorry!";
      } else {
        return "win!!";
      }
    } else if (userChoice === "paper") {
      if (botChoice === "rock") {
        return "win!!";
      } else if (botChoice === "paper") {
        return "tie.";
      } else {
        return "lose -- sorry!";
      }
    } else if (userChoice === "scissors") {
      if (botChoice === "rock") {
        return "lose -- sorry!";
      } else if (botChoice === "paper") {
        return "win!!";
      } else {
        return "tie.";
      }
    } else {
      return "something went wrong";
    }
  }
  function displayResult() {
    $("#status").html(
      `<p> You chose <strong>${userChoice}</strong>. The bot chose <strong>${botChoice}</strong>.</p> <p>You <strong>${compare()}</strong></p>`
    );
  }
  function incrementScore() {
    if (compare() === "win!!") {
      userScore++;
      $("#humanScore").text(userScore);
    } else if (compare() === "lose -- sorry!") {
      botScore++;
      $("#computerScore").text(botScore);
    } else {
    }
  }

  // function setScore(score) {
  //   score++;
  //   $("#computerScore").text(score);
  // }
  //GAME
  function checkRound() {
    if (userScore >= 10) {
      userRound++;
      newRound();
    } else if (botScore >= 10) {
      botRound++;
      newRound();
    }
  }
  function addRoundScore() {
    if (userRound === 1 || botRound === 1) {
      $("#status").append(
        `<h2>Round</h2><p>You: ${userRound}</p><p>Computer: ${botRound}</p>`
      );
    } else if (userRound === 2) {
      $("#humanScore").text("YOU");
      $("#computerScore").text("WIN");
    } else if (botRound === 2) {
      $("#humanScore").text("You");
      $("#computerScore").text("lose");
      $("button").disable();
    } else {
    }
  }

  function newRound() {
    // addRoundScore();
    userScore = 0;
    $("#humanScore").text(userScore);
    botScore = 0;
    $("#computerScore").text(botScore);
  }
  //
});
