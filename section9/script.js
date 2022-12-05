'use strict';
const arr = ['yam', 'rice', 'egg', 'beans']

let [first, ,second] = arr

console.log(first, second)
// [first, second] = [second, first]

const arr2 = [2, 3, [4,5]]
const [x, y, [a,b]] = arr2
console.log(a,b)

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    recipe: function (start,main){
        return [this.starterMenu[start], this.mainMenu[main]]
    },
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    orderPasta : function (ing1, ing2, ing3){
        console.log(`here is your delicious paste with ${ing1}, ${ing2} and ${ing3}`)
    }
  };

  //destructuring
const [meal1, ,meal2] = restaurant.mainMenu
const [cat1, , , cat2] = restaurant.categories
console.log(restaurant.recipe(2,1))
const [rec1, rec2] = restaurant.recipe(2,1)
console.log(rec1, rec2)
console.log(meal1, meal2)
console.log(cat1)

const {thu = {open, close}, fri, sat} = restaurant.openingHours
const {open, close} = restaurant.openingHours.thu
console.log(thu, fri, sat)
console.log(open,close)

//spread operator
console.log(...restaurant.starterMenu)
const name = 'abdullahi'
const nameArr = [...name]
console.log(nameArr)
console.log(...name)

console.log(restaurant.orderPasta(...restaurant.mainMenu))

//rest patter 
const month = ['january','febuary','march','april','may']
console.log(...month)
const [m1, m2, ...others] = month
console.log(others)
console.log(m1)

//logical operators
const rest1= {
    name: 'forks and fingers',
    numGuest: 30
}

const rest2= {
    name: 'Indulge',
    owner: 'Abdullahi Olalekan'
}

rest1.numGuest ||= 10
rest2.numGuest ||= 20
rest2.owner &&= 'Olalekan'
console.log(rest1) 
console.log(rest2)

//coding challenge
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
        'Pavard',
        'Neuer',
        'Alaba',
        'Martinez',
        'Kimmich',
        'Davies',
        'Coman',
        'Goretzka',
        'Gnarby',
        'Muller',
        'Lewandowski',
    ],
    [
        'Schulz',
        'Burki',
        'Akanji',
        'Hummels',
        'Weigl',
        'Hakimi',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    };

//1
const [player1, player2] =game.players

//2
const [gk, ...fieldPlayers] = player1

//3
const allPlayers = [...player1, ...player2]

//4
const Player1Final = [...player1, 'Thiago','Countinho','Perisic']

//5
const {team1, x:draw, team2} = game.odds

//6
const printGoals = function(...players){
    console.log(players, players.length)
    console.log(`${players.length} goals were scored`)
}

//7
team1 < team2 && console.log('team 1 is more likely to win')
team1 > team2 && console.log('team 2 more likey to win')

console.log(player1)
console.log(gk)
console.log(fieldPlayers)
console.log(player2)
console.log(allPlayers, allPlayers.length)
console.log(Player1Final)
console.log(draw)
console.log(game.scored)
const pg = printGoals(...game.scored)
console.log(pg)


//for-of loop
for (const [i,player] of player1.entries()){
    console.log(`${i+1}: ${player}`)
}

//optional chaining
const days = ['mon','tue', 'wed','thu','fri','sat','sun']

for (const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`we are open on ${day} at ${open}`)
}

const user = [{name: 'abdullahi', age: 27}]
console.log(user[1]?.name ?? 'user does not exist')

//coding challenge #2
//task 1
for (const [key, value] of game.scored.entries()){
    console.log(`goal ${key + 1}: ${value}`)
}

//task 2
let oddValue = 0
const odds = Object.values(game.odds)
for (const odd of odds){
    oddValue += odd
}
const oddAverage = oddValue/ odds.length
console.log(oddAverage)
//task 3
for (const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${odd}`)
}

//bonus challenge
const scorers = {}
const scorerArray = Object.entries(game.scored)
for (const [i,scorer] of scorerArray){
    scorers[scorer] ? scorers[scorer] += 1 : scorers[scorer]=1
    // scorers[scorer] = scorerArray.count(scorer)
}
console.log(scorers)

//SET
const roles = new Set(['associate','mid level','senior', 'associate', 'junior', 'senior'])
console.log(roles.has('senior'))
console.log(roles)

//MAP
const questions = new Map([
    ['question', 'what is the best  programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'try again!']]
)
console.log(questions.get('question'))
for (const [key, value] of questions){
    if (typeof key === 'number'){
        console.log(`answer ${key}: ${value}`)
    }
}
// // const answer = Number(prompt('enter your answer'))
// const quizAnswer = answer === questions.get('correct') ? questions.get(true) : questions.get(false)
// console.log(`THE ANSWER IS ${quizAnswer}`)
// console.log(questions.get(answer === questions.get('correct')))
// console.log(answer)
// console.log(questions)

//STRINGS
const myName = 'Salawu Abdullahi Olalekan'
function middleSeat(seat){
    const ms = seat.slice(-1)
    if (ms==='B' || ms==='E'){
        console.log('you got the middle seat')
    } else{
        console.log('you are lucky')
    }
}

middleSeat('12')



//coding challenge #3
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
    ]);
//#1
// const eventsSet = new Set(gameEvents)
// const eventArray = [...eventsSet]
// console.log(eventsSet)
// console.log(eventArray)
// gameEvents.delete(64)
console.log(gameEvents)
const timeDiff = (90/gameEvents.size)
console.log(`An event happened, on average, every ${timeDiff} minutes`)
console.log(gameEvents.size)

for (const [event, value] of gameEvents){
    event < 45 ? console.log(`[FIRST HALF] ${event} : ${value}`) : console.log(`[SECOND HALF] ${event} :${value} `)
}

//STRINGS
const email = 'salawu@gmail.com'
const comEmail = ' Salawu@gmaiL.com '
const correctEmail = comEmail.toLowerCase().trim()
console.log(comEmail)
console.log(email===correctEmail)

const message = 'we are going to home'
console.log(message.replace('home', 'market'))

const cardMasking = function (card){
    const cardNumber = String(card)
    const last = cardNumber.slice(-4)
    console.log(last.padStart(cardNumber.length, '*'))
}

cardMasking(999900938)

const names = ['salawu','abdullahi','olalekan']
const correctName = []
for (const name of names){
    correctName.push(name.replace(name[0],name[0].toUpperCase()))
}
console.log(correctName.join(' '))