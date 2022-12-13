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