$(function () {

  let playerAChoice
  let botChoice

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

  console.log(generateBotMove())

  $("#rock").click((event) => {
    console.log('selecting rock')
  })

  $("#paper").click((event) => {
    console.log('selecting paper')
  })

  $("#scissors").click((event) => {
    console.log('selecting scissors')
  })

  // function whoWins(playerA, playerB) {
  //
  //   if (playerA === 'rock') {
  //     if (playerB === 'scissors') {
  //       console.log("Player A wins")
  //   } else if (playerB === "paper") {
  //       console.log("Player B wins")
  //   } else {
  //       console.log("It's a tie")
  //   }
  //
  // }
  //
  //   if (playerA === 'paper') {
  //     if (playerB === 'rock') {
  //       console.log("Player A wins")
  //   } else if (playerB === "scissors") {
  //       console.log("Player B wins")
  //   } else {
  //       console.log("It's a tie")
  //   }
  // }
  //
  //   if (playerA === 'scissors') {
  //     if (playerB === 'paper') {
  //       console.log("Player A wins")
  //   } else if (playerB === 'rock') {
  //       console.log("Player B wins")
  //   } else {
  //       console.log("It's a tie")
  //   }
  // }
  //
  // }


})
