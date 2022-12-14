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
