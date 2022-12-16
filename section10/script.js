'use strict'
const bookings = []
function creatBooking(flightNum, numPassanger, price=0){
    const booking={
        flightNum,
        numPassanger,
        price
    }
    bookings.push(booking)
    console.log(bookings)
}

creatBooking('booing101',21)

//higher order function
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase()
}

const uppperFirstWord = function(str){
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function(str, fn){
    console.log(`Transformed String: ${fn(str)}`)
}

transformer('Abdullahi is my name', uppperFirstWord)

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}
const greetArrow = greeting => name => console.log(`${greeting} ${name}`)
const prac = (food)=>{
    return (items)=>{
        console.log(`${food} ${items}`)
    }
}
// const greeter = greet('hello')
greet('as-salam aleikum')('Abdullahi')
prac('yam')('egg')
greetArrow('you!')('Olalekan')

const luthanza = {
    airline: 'Luthanza',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push(
            {
                flight: `${this.iataCode}${flightNum}`, name
            }
        )
    }
}


const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
}
luthanza.book(245, 'Salawu Abdullahi')
console.log(luthanza)

//call method
const book = luthanza.book
book.call(swiss, 444, 'Bankole Hameedah')

//bind method
const bookSW = book.bind(swiss)
const bookLH = book.bind(luthanza)
bookSW(34, 'olalekan')
bookLH(89, 'ABDULLAHI')

luthanza.planes = 200
luthanza.buyplanes = function (){
    console.log(this)

    this.planes++
    console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click',luthanza.buyplanes.bind(luthanza))

const addTax = (rate,value) => value + value * rate
console.log(addTax(0.2,200))

const addVAT = addTax.bind(null,0.2)
console.log(addVAT(200))

//higher order function example
function addTaxHO(rate){
    return function(value){
        const amount = value + value * rate
        console.log(amount)
    }
}

addTaxHO(0.5)(500)


//coding challenge #1
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        let answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n (enter a number)`))
        
        typeof answer === 'number' && answer < this.options.length && this.answers[answer]++
        
        this.displayResults()
        this.displayResults('string')
    },
    displayResults(type='array'){
        type === 'array' ? console.log(this.answers): console.log(`Poll results are ${this.answers.join(', ')}`)
    }
};


document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

//array method
const arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arr.slice(2))
console.log(arr)
// console.log(arr.splice(2,3))
console.log(arr.reverse())

arr.forEach(function(value, key, array){
    console.log(value)
})

//Working with Arrays
//coding challenge #1

const checkDogs = function(dogsJulia, dogsKate){
    const dogJuliaCP = [...dogsJulia]
    dogJuliaCP.splice(0,1)
    dogJuliaCP.splice(-2,2)
    const correctData = [...dogJuliaCP, ...dogsKate]
    correctData.forEach((value, index)=>{
        value >= 3 ? console.log(`Dog number ${index +1} is an adult, and is ${value} years old`) : console.log(`Dog number ${index +1} is still a puppy 🐶`)
    })
    console.log(dogJuliaCP)
    console.log(correctData)
}

const juliaData =[3,5,2,12,7]
const kateData = [4,1,15,8,3]

checkDogs(juliaData,kateData)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const eurToUSD = 1.1

const convertMovements = movements.map((mov)=>mov*eurToUSD)
console.log(convertMovements)

const deposit = movements.filter((mov)=>mov>0)
const withdraw = movements.filter(mov=>mov<0)
console.log(deposit)
console.log(withdraw)

//reducer
const balance = movements.reduce((acc,cur)=>acc+cur,0)
console.log(balance)
const max = movements.reduce((acc,cur)=>{
    if(acc > cur){
        return acc
    }else{
        return cur
    }
},movements[0])
console.log(max)