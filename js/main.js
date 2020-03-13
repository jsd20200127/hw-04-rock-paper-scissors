$(function () {

let userPick = ''
let botPick = ''
let result = ''
let userScore = 0
let botScore = 0
let userRoundScore = 0
let botRoundScore = 0
let winnerOfRound = ''
let bonusCounter = []

// btn functionality
$('#paper').click(() => {
  userPick = 'paper'
  botPicker()
  compare()
  updateScore()
  updateMessage()
  updateRoundScore()
  gameOver()
  bonusPoint(winnerOfRound)
})

$('#rock').click(() => {
  userPick = 'rock'
  botPicker()
  compare()
  updateScore()
  updateMessage()
  updateRoundScore()
  gameOver()
  bonusPoint(winnerOfRound)
})

$('#scissors').click(() => {
  userPick = 'scissors'
  botPicker()
  compare()
  updateScore()
  updateMessage()
  updateRoundScore()
  gameOver()
  bonusPoint(winnerOfRound)
})

//compare function basically plays the game, if statement
function compare(){
  if (userPick === botPick){
    //console.log to see if it works
    console.log('tie!')
    //declare winer
    result = 'tie!'
  } else if(userPick === 'rock' && botPick === 'paper'){
    //console.log to see if it works
    console.log('bot wins')
    //declare result
    result = 'lose :('
  } else if(userPick === 'rock' && botPick === 'scissors'){
    //console.log to see if it works
    console.log('user wins')
    //declare result
    result = 'win! :)'
  } else if(userPick === 'scissors' && botPick === 'paper'){
    //console.log to see if it works
    console.log('user wins')
    //declare result
    result = 'win! :)'
  } else if(userPick === 'scissors' && botPick === 'rock'){
    //console.log to see if it works
    console.log('bot wins')
    //declare result
    result = 'lose :('
  } else if(userPick === 'paper' && botPick === 'scissors'){
    //console.log to see if it works
    console.log('bot wins')
    //declare result
    result = 'lose :('
  } else if(userPick === 'paper' && botPick === 'rock'){
    //console.log to see if it works
    console.log('user wins')
    //declare result
    result = 'win! :)'
  } else{
    //console.log to see if it works
    console.log('something went wrong')
  }
}
//scoreKeeper function
function updateScore(){
  if (result === 'win! :)'){
    // console.log('user wins')
    userScore += 1
    $('#humanScore').text(`${userScore}`)
  } else if (result === 'lose :('){
    // console.log('bot wins')
    botScore+= 1
    $('#computerScore').text(`${botScore}`)
  } else if (result === 'tie!'){
    // console.log('tie!')
  } else {
    // console.log('something went wrong')
  }
}

// messages if won, lost
function updateMessage(){
  //You played ... the bot played... you lose!, win :), tie
  $('#status').html(`You played <strong>${userPick}</strong>. The bot played <strong>${botPick}</strong>. You <strong>${result}</strong>`)
  //figure out how to bold this text
  // $('userPick', 'botPick', 'result').addClass('boldText')
}

//generate botPick using random number generator and assigning them to a botPick
function botPicker(){
  let randomNumber = Math.floor(Math.random() * 3) + 1
  console.log(randomNumber)
  if(randomNumber === 1){
    botPick = 'rock'
  } else if(randomNumber === 2){
    botPick = 'paper'
  } else if (randomNumber === 3){
    botPick = 'scissors'
  } else {
    console.log('something went wrong')
  }
}
//BONUS 1

//end of round message function
function endOfRoundMessage(){
  $('#status').text(`The winner of this round is ${winnerOfRound} :)!`)
}
function updateRoundScore(){
  if (userScore === 5){
    // console.log('user wins round')
    userRoundScore += 1
    $('#humanRound').text(`${userRoundScore}`)
    //reset Scoreboard
    userScore = 0
    botScore = 0
    $('#humanScore').text(`${userScore}`)
    $('#computerScore').text(`${botScore}`)
    winnerOfRound = 'user'
    endOfRoundMessage()
  } else if (botScore === 5){
    // console.log('bot wins')
    botRoundScore+= 1
    $('#computerRound').text(`${botRoundScore}`)
    userScore = 0
    botScore = 0
    $('#humanScore').text(`${userScore}`)
    $('#computerScore').text(`${botScore}`)
    winnerOfRound = 'bot'
    endOfRoundMessage()
  } else{
    // console.log('tie!')
    // console.log('something went wrong')
  }
}


//BONUS 2
function gameOver(){
  if(userRoundScore === 2 || botRoundScore === 2){
    console.log('end of game')
    resetScoreboard()
    $('#status').text(`The winner of the game is ${winnerOfRound} :)!`)
  }else{
    console.log('keep playing')
  }
}

// reset the gamescore
function resetScoreboard(){
  userScore = 0
  botScore = 0
  $('#humanScore').text(`${userScore}`)
  $('#computerScore').text(`${botScore}`)
  userRoundScore = 0
  botRoundScore = 0
  $('#humanRound').text(`${userRoundScore}`)
  $('#computerRound').text(`${botRoundScore}`)

}
//BONUS 3
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
