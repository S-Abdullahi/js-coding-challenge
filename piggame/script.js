const newgame = document.querySelector('.btn--new')
const rollgame = document.querySelector('.btn--roll')
const holdgame = document.querySelector('.btn--hold')

const player0score = document.querySelector('#score--0')
const player1score = document.querySelector('#score--1')
const current1score = document.querySelector('#current--1')
const current2score = document.querySelector('#current--2')
const dice = document.querySelector('.dice')

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

//roll dice : each number rolled will be added to the current score
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


//hold game : player current score is added to the main score
holdgame.addEventListener('click', ()=>{
        score[active] += currentScore
        if(score[active] >= 100){
            document.getElementById(`score--${active}`).textContent = score[active]
            console.log(`player ${active + 1} won`)
        } else{
            playGame()
        }
        dice.classList.add('hidden')
})

//this reset the game
newgame.addEventListener('click',()=>{
    currentScore = 0
    active = 0
    score = [0, 0]
    dice.classList.add('hidden')
    player0score.textContent = 0
    player1score.textContent = 0
    current1score.textContent = 0
    current2score.textContent = 0
})