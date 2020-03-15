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
        updateSummary("You win.")
        playerScore += 1
    } else if (bot === "paper") {
        updateSummary("You lose.")
        botScore += 1
    } else {
        updateSummary("You tied.")
    }

  }

    if (player === 'paper') {
      if (bot === 'rock') {
        updateSummary("You win.")
        playerScore += 1

    } else if (bot === "scissors") {
        updateSummary("You lose.")
        botScore += 1
    } else {
        updateSummary("You tied.")
    }
  }

    if (player === 'scissors') {
      if (bot === 'paper') {
        updateSummary("You win.")
        playerScore += 1
    } else if (bot === 'rock') {
        cupdateSummary("You lose.")
        botScore += 1
    } else {
        updateSummary("You tied.")
    }
  }

    updateScore()
    updateStatus()

  }

  function updateScore(){
    $('#humanScore').text(playerScore)
    $('#computerScore').text(botScore)
  }

  function updateStatus(){
    $('#status').html(`You played ${playerMove.bold()}. The bot played ${botMove.bold()}.`)
  }

  function updateSummary(result){
    $('#summary').text(result)
  }



})
