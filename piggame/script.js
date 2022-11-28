const newgame = document.querySelector('.btn--new')
const rollgame = document.querySelector('.btn--roll')
const holdgame = document.querySelector('.btn--hold')

const player0score = document.querySelector('#score--0')
const player1score = document.querySelector('#score--1')
const dice = document.querySelector('.dice')

dice.classList.add('hidden')

let currentScore = 0
let active = 0
let score = [0,0]
player0score.textContent = 0
player1score.textContent = 0

function playGame(){
    document.getElementById(`score--${active}`).textContent = score[active]
    document.getElementById(`current--${active}`).textContent = 0
    active = active === 0 ? 1 : 0
    currentScore = 0
}

//roll dice
rollgame.addEventListener('click', ()=>{
    diceRoll = Math.floor(Math.random()*6) + 1
    dice.classList.remove('hidden')
    dice.src = `dice-${diceRoll}.png`
    if (diceRoll !== 1){
        currentScore += diceRoll
        document.getElementById(`current--${active}`).textContent = currentScore
    } else{
        playGame()
    }
})

holdgame.addEventListener('click', ()=>{
    if(score[active] >=100){
        console.log(`player ${active} won`)
    } else{
        score[active] += currentScore
        playGame()
    }
})