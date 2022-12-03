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