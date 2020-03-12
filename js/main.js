$(document).ready(function (){

//set userscore to 0
//set botscore to 0

//put these 3 choices in array (random number generator)
  let userScore = 0
  let botScore = 0

  function youWin (){
    $("#humanScore").text(()=>{
      userScore += 1
    })
    console.log("You win. Not based on merit though.");
  }

  function botWins (){
    return  $("#computerScore").text(()=>{
      botScore += 1
    })
    console.log("Bot wins. It's random, don't worry.");
  }

  if (userScore === botScore) {
    console.log("It's a tie!")
  } else {
    switch(userScore) {
      case "rock":
        if (botScore==="paper"){
          //
          botWins()
        } else {
          youWin()
        }
        //
      break;
      case "paper":
        if (botScore==="scissors"){
          botWins()
        }else{
          youWin()
        }
      break;
      case "scissors":
        if (botScore==="rock"){
          botWins()
        } else {
          youWin()
        }
      break;
    }

$("#rock").click(()=>{
  if (userScore=== "scissors"){
    botWins()
  } else {
    youWin()
  }
})

$("paper").click(()=>{
  youWin(){
    return userScore +=1
  } else {
    return botScore +=1
  }
})

$("#scissors").click(()=>{
  if youWin{
    return userScore +=1
  } else {
    return botScore +=1
  }
})

  // $("#humanScore").text(()=>{
  //   +=1
  // // })
  //
  // $("computerScore").text()

    const headerText = $(".header").text()
    console.log(headerText)

    $(.header).text('Rock, Paper, or Scissors?')

    .done((response)=>{
      //execution successful
      console.log(response);

      //pass array of gifs as a parameter from API to displayResults() function
      //displayResults(response)
    })
    .fail(()=>{
      //execution failed
      alert('error occured')
    })
  }


})
