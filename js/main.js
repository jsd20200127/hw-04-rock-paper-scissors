$(() => {

  let currentHumanScore = 0
  let currentBotScore = 0
  let currentHumanRoundScore = 0
  let currentBotRoundScore = 0
  let userChoiceTally = 0
  let botChoiceTally = 0
  let botWord
  let userChoice
 
  $('button').click(() => {

      $('#paper').click(() => {
        userChoice = 1
        return userChoice
      })
      $('#rock').click(() => {
        userChoice = 2
        return userChoice
      })
      $('#scissors').click(() => {
        userChoice = 3
        return userChoice
      })

    let botChoice = Math.floor(Math.random()* 3) + 1

    function sayBotChoice() {
      if(botChoice === 1) {
        botWord = 'Paper'
      } else if(botChoice === 2) {
        botWord = 'Rock'
      } else {
        botWord = 'Scissors'
      }
    }

  function compare() {
    if(userChoice === botChoice) {
      tieHand()
    } else if((userChoice === 1 && botChoice === 2) || (userChoice === 2 && botChoice === 3) || (userChoice === 3 && botChoice === 1)){
      sayBotChoice()
      userWinsHand()
      userChoiceTally = userChoiceTally += 1
    } else {
      sayBotChoice()
      botWinsHand()
      botChoiceTally = botChoiceTally += 1
    }
  }
  compare()

  })

  function userWinsHand() {
    messageUpdate(`you won, bot chose ${botWord}`)
    $('#humanScore').text(currentHumanScore = currentHumanScore + 1)
    checkForBonus()
    if(currentHumanScore >= 10) {
      messageUpdate('You won this round, keep going!')
      $('#humanRoundScore').text(currentHumanRoundScore = currentHumanRoundScore + 1)
      resetHandScore()
    }
    if(currentHumanRoundScore === 2) {
      messageUpdate('You won this game!')
      // enableWinnerFace()
      resetGame()
    }

  }

  function botWinsHand() {
    messageUpdate(`you lost, bot won and chose ${botWord}`)
    $('#computerScore').text(currentBotScore = currentBotScore + 1)
    checkForBonus()
    if(currentBotScore >= 10) {
      messageUpdate('Bot won this round, keep going to catch up!')
        $('#botRoundScore').text(currentBotRoundScore = currentBotRoundScore + 1)
        resetHandScore()
    }
    if(currentBotRoundScore === 2) {
      messageUpdate('Bot won this game, better guessing next time')
      // enableLoserFace()
      resetGame()
    }
  }

  function tieHand() {
    messageUpdate('Tie hand, go again')
  }

  function messageUpdate(message) {
    $('#status').text(message)
  }

  function resetHandScore() {
    $('#humanScore').text(currentHumanScore = 0)
    $('#computerScore').text(currentBotScore = 0)
  }

  function resetRoundScore() {
    $('#humanRoundScore').text(currentHumanRoundScore = 0)
    $('#botRoundScore').text(currentBotRoundScore = 0)
  }

  function resetGame() {
    resetHandScore()
    resetRoundScore()
  }

function checkForBonus() {
  if(userChoiceTally === 3) {
    $('#humanScore').text(currentHumanScore = currentHumanScore + 2)
    messageUpdate('You won 3 hands in a row! + 2 points')
    resetChoiceTally()
  } else if (botChoiceTally === 3) {
    $('#computerScore').text(currentBotScore = currentBotScore + 2)
    messageUpdate('bot won 3 hands in a row and got + 2 points')
    resetChoiceTally()
  }
}

function resetChoiceTally() {
  if((userChoiceTally === 3) || (botChoiceTally === 3)) {
    userChoiceTally = 0
    botChoiceTally = 0
  }
}

})
