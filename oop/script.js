class Person {
    constructor(firstname, lastname, yob){
        this.firstname = firstname,
        this.lastname = lastname,
        this.yob = yob
    }

    detail(){
        console.log(`my name is ${this.firstname} ${this.lastname}, I was born in ${this.firstname} and my age is ${2023-this.yob}`)
    }

    upperCame(){
        let name = this.firstname.toUpperCase()
        let lname = this.lastname.toUpperCase()
        console.log(`${name[0]} ${lname[0]}`)
    }
}

const Abdullahi = new Person('Abdullahi', 'Salawu', 1995)

Abdullahi.detail()
Abdullahi.upperCame()
console.log(Abdullahi.__proto__)

//challenge
class Car {
    constructor(make, speed){
        this.make = make,
        this.speed = speed
    }

    accelerate(){
        this.speed += 10
        console.log(`this new speed of the car ${this.make} is ${this.speed} km/hr`)
    }

    brake(){
        this.speed -= 5
        console.log(`this new speed of the car is ${this.speed} km/hr`)
    }
}

const car1 = new Car('BMW', 50)
const car2 = new Car('Mercedes', 20)

car1.accelerate()
car1.brake()

car2.accelerate()
car2.brake()

//coding challenge two
class CarCl {
    constructor(make, speed){
        this.make = make
        this.speed = speed
    }

    accelerate(){
        this.speed += 10
        console.log(`this new speed of the car ${this.make} is ${this.speed} km/hr`)
    }

    brake(){
        this.speed -= 5
        console.log(`this new speed of the car is ${this.speed} km/hr`)
    }

    get speedUS(){
        let speedMl = this.speed/1.6
        return speedMl
    }

    set speedUS(speed){
        this.speed = speed * 1.6
    }
}

const bmw = new CarCl('bwm', 120)
bmw.accelerate()
bmw.accelerate()
console.log(bmw.speedUS)
bmw.speedUS = 50
console.log(bmw)
console.log(bmw.speedUS)

const Persons = function(firstname, birthYear){
    this.firstname = firstname
    this.birthYear = birthYear
}

Persons.prototype.Calcage = function(){
    console.log(2023 - this.birthYear)
}

const Student = function(firstname, birthYear, course) {
    Persons.call(this, firstname, birthYear)
    this.course = course
}

Student.prototype = Object.create(Persons.prototype)

Student.prototype.introduce = function(){
    console.log(`my name is ${this.firstname}, I am studing ${this.course}`)
}

const mike = new Student('Mike', 2000, 'Mechanical Engineering')

mike.introduce()
mike.Calcage()

//coding challenge 3
const CarOC = function (make, speed){
    this.make = make,
    this.speed = speed
}

CarOC.prototype.accelerate = function(){
    this.speed += 10
    console.log(`this new speed of the car ${this.make} is ${this.speed}`)
}

CarOC.prototype.brake = function(){
    this.speed -= 5
    console.log(`this new speed of the car is ${this.speed}`)
}

const EV = function (make, speed, charge){
    CarOC.call(this, make, speed)
    this.charge = charge
}

EV.prototype = Object.create(CarOC.prototype)

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo
}

EV.prototype.accelerate = function(){
    this.speed += 20
    this.charge -= 1
    console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge} %`)
}

const tesla = new EV('Tesla', 120, 23)
tesla.accelerate()
tesla.brake()

class Students extends Person{
    constructor(firstname, lastname, birthYear, course){
        super(firstname, lastname,birthYear)
        this.course = course
    }
}

const olalekan = new Students('salawu', 'olalekan', 1995)
olalekan.detail()

//coding challenge 4
class EVCL extends CarCl{
    constructor(make, speed, charge){
        super(make, speed)
        this._charge = charge
    }

    chargeBattery(chargeTo){
        this._charge = chargeTo
        return this
    }

    accelerate(){
        this.speed += 20
        this._charge--
        console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this._charge} %`)
        return this
    }
}

const rivian = new EVCL('rivian',120, 23)
rivian.accelerate().chargeBattery(30).brake()