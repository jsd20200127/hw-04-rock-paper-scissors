$(function () {
  // click on button to Choose
  // compare user choice with random choice by computer
  // whoever wins, update score board
  //global variables
  const choices = ["rock", "paper", "scissors"];
  let userScore = 0
  let userRound = 0
  let computerScore = 0
  let computerRound = 0
  let bonusCounter = []
  $("#rock").click(() => {
    console.log("clicked rock")
    let randomChoice = generateRandomChoice()
    compare("rock", randomChoice)
  })
  $("#paper").click(() => {
    console.log("clicked paper")
    let randomChoice = generateRandomChoice()
    compare("paper", randomChoice)
  })
  $("#scissors").click(() => {
    console.log("clicked scissors")
    let randomChoice = generateRandomChoice()
    compare("scissors", randomChoice)
  })
  function compare(userChoice, randomChoice){
    let roundWinner;

    if (userChoice === randomChoice) {
      let result = "tie"
      console.log("tie")
      updateStatus(userChoice, randomChoice, result)
      roundWinner = null;
      checkRound()
    } else if (userChoice === 'rock' && randomChoice === 'scissors') {
      let result = "win"
      userScore += 1
      roundWinner= "user"
      printScore ()
      updateStatus(userChoice, randomChoice, result)

      checkRound()
    } else if (userChoice === 'rock' && randomChoice === 'paper') {
      let result = "lose"
      computerScore +=1
      roundWinner= "computer"
      printScore ()
      updateStatus(userChoice, randomChoice, result)

      checkRound()
    } else if (userChoice === 'scissors' && randomChoice === 'rock') {
      let result = "lose"
      computerScore +=1
      roundWinner= "computer"
      printScore ()
      updateStatus(userChoice, randomChoice, result)

      checkRound()
    } else if (userChoice === 'scissors' && randomChoice === 'paper') {
      let result = "win"
      userScore += 1
      roundWinner= "user"
      printScore ()
      updateStatus(userChoice, randomChoice, result)
      checkRound()
    } else if (userChoice === 'paper' && randomChoice === 'scissors') {
      let result = "lose"
      computerScore +=1
      roundWinner= "computer"
      printScore ()
      updateStatus(userChoice, randomChoice, result)
      checkRound()
    } else if (userChoice === 'paper' && randomChoice === 'rock') {
      let result = "win"
      userScore += 1
      roundWinner= "user"
      printScore ()
      updateStatus(userChoice, randomChoice, result)
      checkRound()
    } else {
      console.log("Something went wrong!")
    }

    bonusPoint(roundWinner);
  }
  function printScore () {
    $("#humanScore").text(userScore)
    $("#computerScore").text(computerScore)
  }
  function printRound () {
    $("#humanRound").text(userRound)
    $("#computerRound").text(computerRound)
  }
  function updateStatus (userChoice, randomChoice, result) {
    let message = `<p>You played <strong>${userChoice}</strong>. The bot played <strong>${randomChoice}.</strong></p>`
    if (result === "tie") {
      message = message + "<p>You tied</p>"
    } else if (result === "win"){
      message = message + "<p>YOU WIN!! :)</p>"
    } else {
      message = message + "<p>you lose T___T</p>"
    }
    $("#status").html(message)
  }
  function generateRandomChoice() {
    $("#bonus").text("")
    console.log("generating choice")
    return choices[Math.floor(Math.random()*choices.length)];
  }
  
  function checkRound() {
      if (userScore >= 10) {
          userRound += 1
          printRound()
          endRound("user")
        } else if (computerScore >= 10){
          computerRound += 1
          printRound()
          endRound("computer")
        } else {
          console.log("keep going with the round")
        }
      }
      
  function endRound (winner) {
      userScore = 0
      computerScore = 0
      printScore()
      printRound()
      if (winner === "user") {
        $("#status").text("Round over! You win!")
        checkGame()
        console.log("You win the round...")
      } else if (winner === "computer"){
        $("#status").text("Round over! Bot wins the round")
        checkGame()
        console.log("bot wins the round...")
      } 
    }
    function checkGame (){
      if (userRound === 2) {
        $("#status").text("Game over! You win the game!")
        userScore = 0
        userRound = 0
        computerScore = 0
        computerRound = 0
        printScore()
        printRound()
        console.log("You win")
      } else if (computerRound === 2){
        $("#status").text("Game over! Bot wins the game!")
        userScore = 0
        userRound = 0
        computerScore = 0
        computerRound = 0
        printScore()
        printRound()
        console.log("bot win")
      } else {
        console.log("keep going")
      }
    }
    
    function bonusPoint (winner) {
      if (winner === "user") {
        bonusCounter.push("user")
      } else if (winner === "computer") {
        bonusCounter.push("computer")
      } else {
        bonusCounter.push(null)
      }

      if(bonusCounter.length === 3){
        if(!bonusCounter.includes("computer") && !bonusCounter.includes(null)){
          userScore = userScore + 2
          $("#bonus").text("User gets a bonus!")
        }
        if(!bonusCounter.includes("user") && !bonusCounter.includes(null)){
          computerScore = computerScore + 2
        $("#bonus").text("Computer gets a bonus!")

    
        }
        bonusCounter.shift()
      }
    }
})

