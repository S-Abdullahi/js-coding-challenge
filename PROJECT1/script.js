document.querySelector('.again')
const guess_status = document.querySelector('.guess_status')
const computer_guess = document.querySelector('.computer_guess')
const check = document.querySelector('.check_guess')
const input = document.querySelector('.guess_input')
const score = document.querySelector('.guess_score')
let highscore = document.querySelector('.highscore')
const body = document.querySelector('body')

highscore.textContent = 20


check.addEventListener('click', ()=>{
    random = Math.floor(Math.random()*20) + 1
    computer_guess.textContent = random
    my_guess = input.value
    if (random == my_guess){
        guess_status.textContent = '🎈Your guess is correct!'
        body.style.backgroundColor = 'green'
    } else if( random > my_guess){
        guess_status.textContent = '👎 number too low!'
        highscore.textContent = (highscore.textContent) -1
    } else{
        guess_status.textContent = '👎 number too high!'
        highscore.textContent = (highscore.textContent) -1
    }
})