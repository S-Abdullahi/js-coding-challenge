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

//coding challaneg 2
const calcAverageHumanAge = function(dogArray){
    const dogHumanAge = dogArray.map((dogAge)=>dogAge <=2 ? 2 * dogAge : 16 + dogAge * 4)
    //exclude all dogs less than 18 human years old
    const adultDogs = dogHumanAge.filter((humanAge)=>humanAge >=18)

    //calculate the human age of all adult age
    const averageAdultDog = adultDogs.reduce((acc, age)=>acc+age,0)/adultDogs.length
    console.log(dogHumanAge)
    console.log(adultDogs)
    
    return averageAdultDog
}

console.log(calcAverageHumanAge([5,2,4,1,15,8,3]))
calcAverageHumanAge([16,6,10,5,6,1,4])

//coding challange 3
const calcAverageHumanAgeCH = function(dogArray){
    const average = dogArray.map((age)=> age <= 2 ? 2*age : 16 +age*4).filter((adult)=>adult>=18)
    return average.reduce((acc,cur)=>acc+cur,0)/average.length
    
}

const calVHCH = calcAverageHumanAgeCH([5,2,4,1,15,8,3])
console.log(calVHCH)


const diceRole = Array.from({length:100}, ()=>Math.floor(Math.random()*6) +1)
console.log(diceRole)


//coding challenge 4
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

//task 1

dogs.forEach((item)=>{
    item.foodPortion = item.weight**0.75*28
})

//task 2: Find Sarah's dog and log to the console whether it's eating too much or too little.
const sarah = dogs.find((item)=>item['owners'].includes('Sarah'))
console.log(`the dog is eating ${sarah.curFood > sarah.foodPortion ? 'too much' : 'too little'}`)
console.log(sarah)
console.log(dogs)

//task 3: Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too littl ('ownersEatTooLittle').
const ownersEatTooMuch = dogs.slice().filter((item)=> item.curFood > item.foodPortion).map((item)=>item.owners).flat()

const ownersEatTooLittle = dogs.slice().filter((item)=>item.curFood < item.foodPortion).map((item)=>item.owners).flat()
console.log(ownersEatTooMuch)
console.log(ownersEatTooLittle)

//task 4: Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`)
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`)

//task 5 : Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
dogs.some((item)=>item.curFood === item.foodPortion)

//task 6 : Log to the console whether there is any dog eating an okay amount of food (just true or false)
dogs.some((item)=> item.curFood > item.foodPortion * 0.9 && item.curFood < item.foodPortion * 1.10)

//task 7 : Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
const okayDogs = dogs.slice().filter((item)=> item.curFood > item.foodPortion * 0.9 && item.curFood < item.foodPortion * 1.10)

console.log(okayDogs)

//task 8 : Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order(keep in mind that the portions are inside the array's objects 😉)
const dogSort = dogs.slice().sort((a,b)=> a.foodPortion-b.foodPortion)
console.log(dogSort)

const datePractice = new Date(2023, 10, 5)
console.log(datePractice)
console.log(datePractice.getFullYear())
console.log(datePractice.getMonth())
console.log(datePractice.getDate())
console.log(datePractice.getDay())
console.log(datePractice.toISOString())
console.log(datePractice.getTime())

console.log('waiting...')
setTimeout(()=>console.log('learning JavaScript'),2000)
setInterval(()=>{
    const date = new Date()
    const option = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    const clock = new Intl.DateTimeFormat(navigator.language,option).format(date)
    // console.log(clock)
},1000)