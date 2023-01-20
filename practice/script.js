'use strict';

//element
const text = document.querySelector('#text');
const submit = document.querySelector('#submit');
const charResult = document.querySelector('.characters-result')
const wordResult = document.querySelector('.word-result')

class WordCount{
    #resultArray
    constructor(){
        this._getLocalStorage()
        submit.addEventListener('click', this._calculateWords.bind(this))
        
    }

    _displayResult(word, char){
        wordResult.textContent = word
        charResult.textContent = char
    }

    _calculateWords(e){
        e.preventDefault()
        const wordArray = text.value.split(' ')
        const charArray = text.value.split('')
        this.#resultArray = [wordArray.length, charArray.length]
        const [wordLength, charLength] = this.#resultArray

        this._displayResult(wordLength, charLength)
    }

    _setLocalStorage(){
        localStorage.setItem('result', JSON.stringify(this.#resultArray))
        localStorage.setItem('texts', JSON.stringify(text.value))
    }

    _getLocalStorage(){
        const data = JSON.parse(localStorage.getItem('result'))
        console.log(data)
        // this._displayResult(data[0],data[1])
        // text.value = data[2]
    }

    // reset(){
    //     localStorage.removeItem('result')
    //     location.reload()
    // }

}

const wordApp = new WordCount()