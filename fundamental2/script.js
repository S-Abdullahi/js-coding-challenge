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


//CHALLENGE #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

const calcTip = function (bill){
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
    return tip
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log(total.includes(555))
console.log(total)