$(function () {
  let choice = 'none'
  let compHand = ''
  let winner = ''
  let score = 0

  $('#rock').click(() => {
    compHand = generateHand()
    winner = evalMatch('rock',compHand)
    updateScore(winner)
  })

  $('#paper').click(() => {
    compHand = generateHand()
    winner = evalMatch('paper',compHand)
    updateScore(winner)
  })

  $('#scissors').click(() => {
    compHand = generateHand()
    winner = evalMatch('scissors',compHand)
    updateScore(winner)
  })
  $('#restart').click(() => {
    clearScore()
    clearRounds()
    location.reload()
  })

  function generateHand() {
    let num = Math.floor(Math.random()*3)+1
    if (num === 1){
      return 'rock'
    }
    else if (num === 2){
      return 'paper'
    }
    else if (num === 3){
      return 'scissors'
    }
    else {
      return 'error'
    }
  }

  function evalMatch(playerH,computerH) {
    if(playerH === computerH){
      handStatus(playerH,computerH,'tie')
      return 'tie'
    }
    else if(playerH === 'rock' && computerH === 'scissors'){
      handStatus(playerH,computerH,'you')
      return 'you'
    }
    else if(playerH === 'rock' && computerH === 'paper'){
      handStatus(playerH,computerH,'bot')
      return 'bot'
    }
    else if(playerH === 'paper' && computerH === 'rock'){
      handStatus(playerH,computerH,'you')
      return 'you'
    }
    else if(playerH === 'paper' && computerH === 'scissors'){
      handStatus(playerH,computerH,'bot')
      return 'bot'
    }
    else if(playerH === 'scissors' && computerH === 'rock'){
      handStatus(playerH,computerH,'bot')
      return 'bot'
    }
    else if(playerH === 'scissors' && computerH === 'paper'){
      handStatus(playerH,computerH,'you')
      return 'you'
    }
    else {
      handStatus(playerH,computerH,'error')
      return 'error'
    }
  }

  function updateScore(win) {
    if(win === 'you'){
      score = parseInt($('#humanScore').text())
      score += 1
      $('#humanScore').text(score)
      if(score === 10){
        round(win)
      }
    }
    else if(win === 'bot'){
      score = parseInt($('#computerScore').text())
      score += 1
      $('#computerScore').text(score)
      if (score === 10){
        round(win)
      }
    }
  }

  function handStatus(playerH,computerH,status){
    $('#status').empty()
    $('#status').append(`<p id="results-string">You played <span class="bold">${playerH}</span>. The bot played <span class="bold">${computerH}</span>.</p>`)
    if(status === 'you'){
      $('#status').append(`<p>You win</p>`)
    }
    else if(status === 'bot'){
      $('#status').append(`<p>Bot wins</p>`)
    }
    else if(status === 'tie'){
      $('#status').append(`<p>You tied</p>`)
    }
    else if(status === 'error'){
      $('#status').append(`<p>Error</p>`)
    }
  }

  function round(winner){
    if(winner === 'you'){
      $('#status').empty()
      $('#status').append('<p>You win round</p>')
      updateRound(winner)
      clearScore()
    }
    else if(winner === 'bot'){
      $('#status').empty()
      $('#status').append('<p>Bot wins round</p>')
      updateRound(winner)
      clearScore()
    }
  }

  function updateRound(win){
    if(win === 'you'){
      score = parseInt($('#humanRound').text())
      score += 1
      $('#humanRound').text(score)
      if(score === 2){
        game(win)
      }
    }
    else if(win === 'bot'){
      score = parseInt($('#computerRound').text())
      score += 1
      $('#computerRound').text(score)
      if (score === 2){
        game(win)
      }
    }
  }

  function clearScore(){
    $('#humanScore').text(0)
    $('#computerScore').text(0)
  }

  function clearRounds(){
    $('#humanRound').text(0)
    $('#computerRound').text(0)
  }

  function game(win){
    if(winner === 'you'){
      $('#status').empty()
      $('#status').append('<p>You win game</p>')
      disableClick()
    }
    else if(winner === 'bot'){
      $('#status').empty()
      $('#status').append('<p>Bot wins game</p>')
      disableClick()
    }
  }

  function disableClick(){
    $('#rock').off('click')
    $('#paper').off('click')
    $('#scissors').off('click');
  }
})
