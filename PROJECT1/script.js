document.querySelector('.again')
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

check.addEventListener('click', ()=>{
    random = Math.floor(Math.random()*20) + 1
    computer_guess.textContent = random
    my_guess = input.value
    if (random == my_guess){
        guess_status.textContent = '🎈Your guess is correct!'
        body.style.backgroundColor = 'green'
    } else if( random > my_guess){
        guess_status.textContent = '👎 number too low!'
        body.style.backgroundColor = 'black'
        if(guess_score > 1){
            guess_score--
            score.textContent = guess_score
        } else{
            guess_status.textContent = '⌛ game over'
            guess_title.textContent = 'game over!!!'
        }
    } else{
        guess_status.textContent = '👎 number too high!'
        body.style.backgroundColor = 'black'
        if(guess_score > 1){
            guess_score--
            score.textContent = guess_score
        }else{
            guess_status.textContent = '⌛ game over'
            guess_title.textContent = 'game over!!!'
        }
    }
})