'use strict';

function calcAge(birthyear){
    return 2022 - birthyear
}

const calcAge2 = function(birthyear){
    return 2022 -birthyear
}

const age = calcAge(1995)
const age2 = calcAge2(2000)
console.log(age)
console.log(age2)

//ARROW FUNCTION
const retirement = (birthyear, firstname) =>{
    const age = 2022 - birthyear
    const retireYear = 65 - age
    return `${firstname} has ${retireYear} years to retire`
}

console.log(retirement(1995, 'Abdullahi'))


function cutFruit(fruit){
    return fruit*4
}

function juiceMachine(apple, banana){
    const applePieces = cutFruit(apple)
    const bananaPieces = cutFruit(banana)

    return `it takes ${applePieces} pieces of apple and ${bananaPieces} pieces of banana to prepare the juice`
}

console.log(juiceMachine(3,4))

//FUNDAMENTAL 2: CODING CHALLENGE ONE
const calcAverage = (score1, score2,score3)=>{
    const average = (score1+score2+score3)/3
    return average
}

const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= (2*avgKoalas)){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else{
        console.log(`Kaola win (${avgKoalas} vs ${avgDolphins})`)
    }
}

const dolphinData1 = calcAverage(44,23,71)
const koalasData1 = calcAverage(65,54, 49)
const winnerData1 = checkWinner(dolphinData1, koalasData1)


const dolphinData2 = calcAverage(85,54,41)
const koalaData2 = calcAverage(23,34,27)
const winnerData2 = checkWinner(dolphinData2, koalaData2)


//ARRAYS
const friends = new Array('lekan', 'qudus', 'dabiri')
friends.push('olaitan')
friends.unshift('olaoniye')
friends.pop()
friends.shift()
console.log(friends[1])
console.log(friends.length)
