$(document).ready(function () {
  let userScore = 0
  let botScore = 0
  const choices = ["rock", "paper", "scissors"]


  $("#rock").click(() => {
    compare("rock", generate())
  })
  $("#paper").click(() => {
    const bot = generate();
    compare("paper", bot)
  })
  $("#scissors").click(() => {
    const user = "scissors"
    const bot = generate()
    compare(user, bot)
  })

  function compare(userChoice, botChoice) {
    if (userChoice === botChoice) {
      let userResult = 'tie'
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'rock' && botChoice === 'scissors') {
      let userResult = 'win'
      userScore += 1
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'rock' && botChoice === 'paper') {
      let userResult = 'lose'
      botScore += 1
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'paper' && botChoice === 'rock') {
      const userResult = 'win'
      userScore += 1
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'paper' && botChoice === 'scissors') {
      const userResult = 'lose'
      botScore += 1
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'scissors' && botChoice === 'paper') {
      const userResult = 'win'
      userScore += 1
      printScore()
      printMessage(userChoice, botChoice, userResult)
    } else if (userChoice === 'scissors' && botChoice === 'rock') {
      botScore += 1
      printScore()
      printMessage(userChoice, botChoice, "lose")
    } else {
      console.log('something wrong happened!')
    }
  }

  function generate() {
    return choices[Math.floor(Math.random() * 3)]
  }

  function printScore() {
   $("#humanScore").text(userScore)
   $("#computerScore").text(botScore)
  }

  function printMessage(user, bot, result) {
    let message = `
    <p>
    You picked ${user}. Computer picked ${bot}.
    </p>
    `
    if (result === 'win') {
      message = message + `<p>You win!</p>`
    } else if (result === 'lose') {
      message = message + `<p>You lose!</p>`
    } else {
      message = message + `<p>You tie!</p>`
    }
    $("#status").html(message)
  }
})
