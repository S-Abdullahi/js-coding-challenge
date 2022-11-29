const newgame = document.querySelector('.btn--new')
const rollgame = document.querySelector('.btn--roll')
const holdgame = document.querySelector('.btn--hold')
const startGame = document.querySelector('.continue')

const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const player0score = document.querySelector('#score--0')
const player1score = document.querySelector('#score--1')
const current1score = document.querySelector('#current--0')
const current2score = document.querySelector('#current--1')
const winnerText = document.querySelector('.winner--text')
const dice = document.querySelector('.dice')

//initial conditions
let currentScore = 0
let active = 0
let score = [0,0]
let playing = true
player0score.textContent = 0
player1score.textContent = 0

function playGame(){
    document.getElementById(`score--${active}`).textContent = score[active]
    document.getElementById(`current--${active}`).textContent = 0
    active = active === 0 ? 1 : 0
    currentScore = 0
}

//for switching the background color of the active player
function swtichBg(){
    player1.classList.toggle("player--active")
    player2.classList.toggle("player--active")     
}

//start game
startGame.addEventListener('click', ()=>{
    document.querySelector('.instruction').classList.add('hidden')
})

//roll dice : each number rolled will be added to the current score
rollgame.addEventListener('click', ()=>{
    if(playing){
    diceRoll = Math.floor(Math.random()*6) + 1 //generate a random number
    dice.classList.remove('hidden') //show dice on screen
    dice.src = `dice-${diceRoll}.png` //change dice with random number
    if (diceRoll !== 1){
        currentScore += diceRoll
        document.getElementById(`current--${active}`).textContent = currentScore
    } else{
        playGame()
        swtichBg()
    }
    }
})


//hold game : player current score is added to the main score
holdgame.addEventListener('click', ()=>{
    if(playing){
        score[active] += currentScore
        //winning condition
        if(score[active] >= 100){
            playing = false
            document.getElementById(`score--${active}`).textContent = score[active]
            winnerText.textContent = `player ${active + 1} won 🏆🥇🍾`
        } else{
            playGame()
            player1.classList.toggle("player--active")
            player2.classList.toggle("player--active")
        }
        dice.classList.add('hidden')
    }
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
    winnerText.textContent = ''
})