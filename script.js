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
