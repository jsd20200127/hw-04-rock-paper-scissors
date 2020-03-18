$(function () {

  const botChoices = ["rock", "paper", "scissors"]
  let botScore = 0
  let userScore = 0

  $("#rock").click(() => {
    console.log("Rock clicked")
    let botChoice = generate()
    compare("rock", botChoice)
  })

  $("#paper").click(() => {
    console.log("Paper clicked")
    let botChoice = generate()
    compare("paper", botChoice)
  })

  $("#scissors").click(() => {
    console.log("scissors clicked")
    let botChoice = generate()
    compare("scissors", botChoice)
  })

  function generate (){
    return botChoices[Math.floor(Math.random() * botChoices.length)]
  }

  function displayScore () {
      $('#humanScore').text(botScore)

      $('#computerScore').text(userScore)
    }

    function displayMessage (message) {
      $('#status').text(message)
    }



  function compare(playerChoice, botChoice) {
    if (playerChoice === botChoice) {

      //console.log('tie')
       displayMessage('You tied')

    } else if (playerChoice === 'rock' && botChoice === 'scissors') {
      // console.log('playerA wins')
      userScore = userScore + 1
      displayScore()
      displayMessage('You chose rock. You win.')
      //increase playerscore by 1; userScore += 1
      //call displayScore
    } else if (playerChoice === 'rock' && botChoice === 'paper') {
      // console.log('playerB wins')
      botScore = botScore + 1
      displayScore()
      displayMessage('Bot chose paper. You lose.')


    } else if (playerChoice === 'scissors' && botChoice === 'rock') {
      // console.log('playerB wins')
      botScore = botScore + 1
      displayScore ()
      displayMessage('Bot chose rock. You lose.')


    } else if (playerChoice === 'scissors' && botChoice === 'paper') {
      // console.log('playerA wins')
      userScore = userScore + 1
      displayScore ()
      displayMessage('You chose scissors. You win')


    } else if (playerChoice === 'paper' && botChoice === 'scissors') {
      // console.log('playerB wins')
      botScore = botScore + 1
      displayScore ()
      displayMessage('Bot chose scissors. You lose')
      printMessage (userScore, botChoice)


    } else if (playerChoice === 'paper' && botChoice === 'rock') {
      // console.log('playerA wins')
      userScore = userScore + 1
      displayScore ()
      displayMessage('You chose paper. You win')
    } else {
      // console.log('oops an error occurred')
    }
  }


})
