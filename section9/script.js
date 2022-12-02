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

console.log(...restaurant.starterMenu)
const name = 'abdullahi'
const nameArr = [...name]
console.log(nameArr)
console.log(...name)

console.log(restaurant.orderPasta(...restaurant.mainMenu))

const month = ['january','febuary','march','april','may']
console.log(...month)
const monthArray = [...month]
