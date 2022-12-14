/*
CODING CHALLENGE 1 
Mark and John are trying to compare their BMI, which is calculated using the formula
BMI = mass/ height^2 = mass / (height * height) (mass in kg and height in meter)
*/

var markMass, johnMass, markHeight, johnHeight
markMass = 50
johnMass = 60
markHeight = 1.6
johnHeight = 1.4

var markBMI = markMass / (markHeight**2)
var johnBMI = johnMass / (johnHeight**2)

var isBool = markBMI > johnBMI

console.log("Is Mark's BMI higher than John's?" + ' ' + isBool)


/*CODING CHALLENGE TWO*/
if (isBool){
    console.log("Mark's BMI is higher than John's")
    console.log(`Mark's BMI (${markBMI}) is hiigher than John's (${johnBMI})`)
} else{
    console.log("John's BMI is higher than Mark's")
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}


//TRUTHY AND FALSY

const money = 0
if (money){
    console.log('keep spending')
} else{
    console.log('go and find a job')
}

//CODING CHALLENGE #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/
const dolphinsAverage = (96+108+89)/3
const koalasAverage = (88+91+110)/3

if (dolphinsAverage > koalasAverage){
    console.log('Dolphins is the winner')
} else if(dolphinsAverage === koalasAverage){
    console.log('it is a draw')
} else{
    console.log('koaola is the winner')
}
const bonusOneDolphinAverage = (97+112+101)/3
const bonusOneKoalasAverage = (109+95+123)/3

if (bonusOneDolphinAverage >= 100 || bonusOneKoalasAverage >= 100){
    if (bonusOneDolphinAverage > bonusOneKoalasAverage){
        console.log('dolphins is the winner')
    } else if (bonusOneDolphinAverage < bonusOneKoalasAverage){
        console.log('Kaola is the winner')
    } else{
        console.log('it is a draw')
    }
} else{
    console.log('no team wins')
}

//SWITCH STATEMENT
const day = 'tuesday'

switch(day){
    case 'monday':
        console.log('work day')
        break;
    case 'tuesday':
        console.log('social day')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('sport day')
        break;
    case 'friday':
        console.log('thank God is friday')
        break;
    case 'saturday':
    case 'sunday':
        console.log('this is weekend')
        break;
    default:
        console.log('not a valid day')   
}

if (day === 'monday'){
    console.log('work day')
} else if (day === 'tuesday'){
    console.log('social day')
} else if (day === 'thursday' || day === 'wednesday'){
    console.log('sport day')
} else if (day === 'friday'){
    console.log('thank God is friday')
} else if (day === 'saturday' || day === 'sunday'){
    console.log('weekend')
} else{
    console.log(' not a valid date')
}

//TERNARY OPERATORS
const age = 15
const drink = age >= 18? 'wine🍷' : 'water💧'
console.log(drink)


//CODING CHALLENGE #4
const bill = 275
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2* bill
const final = bill + tip

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${final}`)