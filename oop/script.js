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

