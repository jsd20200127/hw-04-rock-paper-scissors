$(() => {

  // variables to keep track of the scores of
  // the user and the computer
  let userScore = 0
  let botScore = 0

  // defining other variables to
  let message
  const options = ["rock", "paper", "scissors"]

  // listener for the click on one of the options
  $("button").click(compare)

  // compare user throw vs bot throw
  function compare() {
    const botThrow = randomizeBotOption()
    // console.log(`the bot tossed ${botThrow}`)

    // get userThrow
    const userThrow = $(this).attr('id')
    // console.log(`the bot tossed ${userThrow}`)

    // then compare userThrow to botThrow
    if (userThrow === 'rock' & botThrow === 'rock') {
      // tie  scenarios
      message = "You played rock. The bot played rock. You tied. :|"

    } else if (userThrow === 'paper' & botThrow === 'paper') {
      message = "You played paper. The bot played paper. You tied. :|"

    } else if (userThrow === 'scissors' & botThrow === 'scissors') {
      message = "You played scissors. The bot played scissors. You tied. :|"

    } else if (userThrow === 'rock' & botThrow === 'scissors') {
      // user win scenarios
      message = "You played rock. The bot played scissors. You win. >)"
      userScore += 1

    } else if (userThrow === 'scissors' & botThrow === 'paper') {
      message = "You played scissors. The bot played papers. You win. >|"
      userScore += 1

    } else if (userThrow === 'paper' & botThrow === 'rock') {
      message = "You played paper. The bot played rock. You win. >|"
      userScore += 1

    } else if (userThrow === 'paper' & botThrow === 'scissors') {
      // user lose scenarios
      message = "You played paper. The bot played scissors. You lose. :("
      botScore += 1

    } else if (userThrow === 'scissors' & botThrow === 'rock') {
      message = "You played scissors. The bot played rock. You lose. :("
      botScore += 1

    } else if (userThrow === 'rock' & botThrow === 'paper') {
      message = "You played rock. The bot played paper. You lose. :("
      botScore += 1

    } else {
      message = "Something seemed to have broke. Try again later."
    }

    // print scores
    // console.log(userScore)
    // console.log(botScore)

    // add results to page
    $("#humanScore").text(userScore)
    $("#computerScore").text(botScore)
    $("#status").text(message)
  }

  function randomizeBotOption () {
    // hard-coding bot choice
    // return "rock"

    // randomize the bot's choice
    // changed function name to represent randomBotOption
    return options[Math.floor(Math.random() * options.length)]
  }

})
