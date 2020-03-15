$(function () {

  let playerMove
  let botMove
  let playerScore = 0
  let botScore = 0

  function generateBotMove (){
    const number = Math.floor(Math.random() * 3 + 1)
    let move

    console.log(number)

    if (number === 1){
      move = "rock"
    } else if (number === 2){
      move = "paper"
    } else move = "scissors"

    return move
  }


  $("#rock").click((event) => {
    console.log('selecting rock')
    playerMove = 'rock'
    botMove = generateBotMove()
    console.log(botMove)
    console.log(playerMove)
    determineWinner(playerMove, botMove)
  })

  $("#paper").click((event) => {
    console.log('selecting paper')
    playerMove = 'paper'
    botMove = generateBotMove()
    console.log(botMove)
    console.log(playerMove)
    determineWinner(playerMove, botMove)
  })

  $("#scissors").click((event) => {
    console.log('selecting scissors')
    playerMove = 'scissors'
    botMove = generateBotMove()
    console.log(botMove)
    determineWinner(playerMove, botMove)
  })

  function determineWinner(player, bot) {

    if (player === 'rock') {
      if (bot === 'scissors') {
        console.log("Player wins")
        playerScore += 1
    } else if (bot === "paper") {
        console.log("Bot wins")
        botScore += 1
    } else {
        console.log("It's a tie")
    }

  }

    if (player === 'paper') {
      if (bot === 'rock') {
        console.log("Player wins")
        playerScore += 1
    } else if (bot === "scissors") {
        console.log("Bot wins")
        botScore += 1
    } else {
        console.log("It's a tie")
    }
  }

    if (player === 'scissors') {
      if (bot === 'paper') {
        console.log("Player wins")
        playerScore += 1
    } else if (bot === 'rock') {
        console.log("Bot wins")
        botScore += 1
    } else {
        console.log("It's a tie")
    }
  }

    updateScore()

  }

  function updateScore(){
    $('#humanScore').text(playerScore)
    $('#computerScore').text(botScore)
  }

})
