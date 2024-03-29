'use strict';

function calcAge(birthyear) {
  return 2022 - birthyear;
}

const calcAge2 = function (birthyear) {
  return 2022 - birthyear;
};

const age = calcAge(1995);
const age2 = calcAge2(2000);
console.log(age);
console.log(age2);

//ARROW FUNCTION
const retirement = (birthyear, firstname) => {
  const age = 2022 - birthyear;
  const retireYear = 65 - age;
  return `${firstname} has ${retireYear} years to retire`;
};

console.log(retirement(1995, 'Abdullahi'));

function cutFruit(fruit) {
  return fruit * 4;
}

function juiceMachine(apple, banana) {
  const applePieces = cutFruit(apple);
  const bananaPieces = cutFruit(banana);

  return `it takes ${applePieces} pieces of apple and ${bananaPieces} pieces of banana to prepare the juice`;
}

console.log(juiceMachine(3, 4));

//FUNDAMENTAL 2: CODING CHALLENGE ONE
const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log(`Kaola win (${avgKoalas} vs ${avgDolphins})`);
  }
};

const dolphinData1 = calcAverage(44, 23, 71);
const koalasData1 = calcAverage(65, 54, 49);
const winnerData1 = checkWinner(dolphinData1, koalasData1);

const dolphinData2 = calcAverage(85, 54, 41);
const koalaData2 = calcAverage(23, 34, 27);
const winnerData2 = checkWinner(dolphinData2, koalaData2);

//ARRAYS
const friends = new Array('lekan', 'qudus', 'dabiri');
friends.push('olaitan');
friends.unshift('olaoniye');
friends.pop();
friends.shift();
console.log(friends[1]);
console.log(friends.length);

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

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total.includes(555));
console.log(total);

//OBJECTS
const abdullahi = {
  firstName: 'Abdullahi',
  lastName: 'Salawu',
  year: 1995,
  occupation: 'Software Engineer',
  location: 'Osun state',
  friends: ['lekan', 'qudus', 'olaitan'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2022 - this.year;
    return this.age;
  },

  summary: function () {
    if (this.hasDriversLicense) {
      return `${this.firstName} is a ${this.age}-yera old ${this.occupation}, and he has a driver's license`;
    } else {
      return `${this.firstName} is a ${this.age}-yera old ${this.occupation}, and he has no driver's license`;
    }
  },
};

console.log(
  `${abdullahi.firstName} has ${abdullahi.friends.length}, and his best friend is call ${abdullahi.friends[0]}`
);
console.log(abdullahi.summary());

//CHALLENGE #3
const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  bmi: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  bmi: function () {
    return this.mass / this.height ** 2;
  },
};

const markScore = mark.bmi();
const johnScore = john.bmi();

if (markScore > johnScore) {
  console.log(
    `${mark.firstName}'s BMI (${markScore}) is higher than ${john.firstName} (${johnScore})`
  );
} else if (johnScore > markScore) {
  console.log(
    `${john.firstName}'s BMI (${johnScore}) is higher than ${john.firstName} (${markScore})`
  );
} else {
  console.log('it was a draw!!!');
}

//looping array from the back
const friendsYear = [1999, 1995, 1993, 1990];

for (let i = friendsYear.length - 1; i >= 0; i--) {
  console.log(friendsYear[i]);
}

//nested loop
for (let i = 1; i < 4; i++) {
  console.log(`---starting exercise ${i}`);

  for (let j = 0; j < 5; j++) {
    console.log(`rep ${j}`);
  }
}

//CHALLENGE #4
/*
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array*/

const steveBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const steveTips = [];
const steveTotal = [];

for (let i = 0; i < steveBills.length; i++) {
  steveTips.push(calcTip(steveBills[i]));
  steveTotal.push(steveBills[i] + steveTips[i]);
}

const calcArrayAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
};

console.log(calcArrayAverage(steveTotal));

// console.log(steveTips)
// console.log(steveTotal)

//calculate temperature amplitude
function calcTempAmplitude(temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== 'number') continue;
    if (max > temp[i]) max = temp[i];
    if (min < temp[i]) min = temp[i];
  }
  return max - min;
}

const temp = [3, -1, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temp);
console.log(amplitude);

function calcTempAmplitude2(temp1, temp2) {
  let temp = temp1.concat(temp2);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== 'number') continue;
    if (max > temp[i]) max = temp[i];
    if (min < temp[i]) min = temp[i];
  }
  return max - min;
}

const temp1 = [3, -5, 7, 9, -2, 10, 33];
const temp2 = [4, 6, 9, -3];
const amplitude2 = calcTempAmplitude2(temp1, temp2);
console.log(amplitude2);

const arr = [3, 6, 7, 8];
const arrSquare = arr.map(i => i ** 2);
console.log([...arrSquare]);

const names = ['alice', 'bob', 'michel', 'daniella'];
const capNames = names.map(name => name[0].toUpperCase() + name.slice(1));
console.log([...capNames]);

const givenNames = ['Bulbasaur', 'Charmader', 'Squirt'];
const wrapNames = givenNames.map(name => `<p>${name}</p>`);
console.log([...wrapNames]);
