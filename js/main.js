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



// console.log("FOR MORE WORK------------>")
//
// $(document).ready(function (){
//
//   let userScore = 0
//   let botScore = 0
//
//   const choices = ["rock", "paper", "scissors"]
//
//
//   $("#rock").click(()=>{
//     if (userChoice=== "Scissors"){
//       botWins()
//     } else {
//       youWin()
//     }
//   })
//
//   $("#paper").click(()=>{
//     if (userChoice=== "Rock"){
//       botWins()
//     } else {
//       youWin()
//     }
//   })
//
//   $("#scissors").click(()=>{
//     if (userChoice=== "Paper"){
//       botWins()
//     } else {
//       youWin()
//     }
//   })
//
//   function youWin (){
//     $("#humanScore").text(()=>{
//       userScore += 1
//     })
//     `<p>You picked ${userChoice}. Bot picked ${botChoice}.</p>`
//   }
//
//   function botWins (){
//     return  $("#computerScore").text(()=>{
//       botScore += 1
//     })
//     console.log("Bot wins. It's random, don't worry.");
//   }
//
//   function generate() {
//       return choices[Math.floor(Math.random() * 3)]
//
//   // function compare(userChoice, botChoice){
//   //   if (userChoice === botChoice) {
//   //     console.log("It's a tie!")
//   //   } else {
//   //     switch(userChoice) {
//   //       case "rock":
//   //         if (botChoice==="paper"){
//   //           //
//   //           botWins()
//   //         } else {
//   //           youWin()
//   //         }
//   //         //
//   //       break;
//   //       case "paper":
//   //         if (botChoice==="scissors"){
//   //           botWins()
//   //         }else{
//   //           youWin()
//   //         }
//   //       break;
//   //       case "scissors":
//   //         if (botChoice==="rock"){
//   //           botWins()
//   //         } else {
//   //           youWin()
//   //         }
//   //       break;
//   //     }
//   // }
//   //
//   // // function printMessage(user, bot, result){
//   // //   let message = `
//   // //   <p>You picked ${userChoice}. Bot picked ${botChoice}.</p>
//   //   `
//   //
//   //   // if (result === youWin()){
//   //   //   message = message + `<p>You win! Woo!</p>`
//   //   } else if (result === 'botWin'){
//   //     message = message + `<p>Bot wins! Woo!</p>`
//   //   } else {
//   //     message = message + `<p>Tie You Woo Laces!</p>`
//   //   }
//   //
//   //   $("#status").html(message)
//   // }
//
//
//   // $("#humanScore").text(()=>{
//   //   +=1
//   // // })
//   //
//   // $("computerScore").text()
//   //}
//
//     .done((response)=>{
//       //execution successful
//       console.log(response);
//
//       //pass array of gifs as a parameter from API to displayResults() function
//       //displayResults(response)
//     })
//     .fail(()=>{
//       //execution failed
//       alert('error occured')
//     })
// })
