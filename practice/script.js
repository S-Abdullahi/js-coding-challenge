'use strict';

//element
const text = document.querySelector('#text');
const submit = document.querySelector('#submit');
const charResult = document.querySelector('.characters-result')
const wordResult = document.querySelector('.word-result')



let resultArray
submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const wordArray = text.value.split(' ')
    const charArray = text.value.split('')
    resultArray = [wordArray.length, charArray.length]
    const [wordLength, charLength] = resultArray

    wordResult.textContent = wordLength
    charResult.textContent = charLength

    localStorage.setItem('result', JSON.stringify(resultArray))
})

const data = JSON.parse(localStorage.getItem('result'))
wordResult.textContent = data[0]
charResult.textContent = data[1]