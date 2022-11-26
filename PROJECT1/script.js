const again = document.querySelector('.again')
const guess_status = document.querySelector('.guess_status')
const computer_guess = document.querySelector('.computer_guess')
const check = document.querySelector('.check_guess')
const input = document.querySelector('.guess_input')
const score = document.querySelector('.guess_score')
let highscore = document.querySelector('.highscore')
const body = document.querySelector('body')
let guess_title = document.querySelector('.guess_instruction')

score.textContent = 20
let guess_score = 20
//generate random number
let random = Math.floor(Math.random()*20) + 1
console.log(random)

check.addEventListener('click', ()=>{
    my_guess = input.value

    //when there is no input
    if (!random){
        guess_status = 'no number!'

    }//when user enter the correct number
    else if (random == my_guess){
        guess_status.textContent = '🎈Your guess is correct!'
        body.style.backgroundColor = 'green'
        computer_guess.textContent = random
        computer_guess.style.width = '18rem'
    } //when user guess is higher than the secret number 
    else if (random !== my_guess){
        if(guess_score > 1){
            guess_score--
            score.textContent = guess_score
            guess_status.textContent = random > my_guess ? '👎 number too low!' : '👎 number too high!'
            body.style.backgroundColor = 'black'
        } else{
            score.textContent = 0
            guess_status.textContent = '⌛ game over'
            guess_title.textContent = 'game over!!!'
        }
    }
})


//RESERT GAME
again.addEventListener('click', ()=>{
    score.textContent = 20
    computer_guess.textContent = '?'
    guess_status.textContent = 'start guessing...'
    random = Math.floor(Math.random()*20) + 1
    body.style.backgroundColor = 'black'
    computer_guess.style.width = '15rem'
    input.value = ''
    console.log(random)
})