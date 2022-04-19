class Animals{

    constructor(age,title,weight,limbAmout)
    {
        this.age = age;
        this.title = title;
        this.weight = weight;
        this.limbAmout = limbAmout
    }

    move(){
        console.log(`I can`) ;
    }
    say(){
        console.log(`I say `);
    }
    eat(){
        console.log(`I can `);
    }
}

class Mamals extends Animals{
    eat(){
        console.log('I eat fruit');
    }
    say(){
        console.log('I can drink milk');
    }
    move(){
        console.log(`I can walk`) ;
    }
}

class Birds extends Animals{
    constructor(age,title,weight,limbAmout)
    {
        super(age,title,weight,limbAmout)
        this.age = age;
        this.title = title;
        this.weight = weight;
        this.limbAmout = limbAmout
    }

    move(){
        console.log(`I can fly`) ;
    }
    say(){
        console.log(`I say chik-chirik `);
    }

    static MaxAge = 23;
    static MaxWeight = 3;
}

class Fish extends Animals{
    constructor(age,title,weight,limbAmout)
    {
        super(age,title,weight,limbAmout)
        this.age = age;
        this.title = title;
        this.weight = weight;
        this.limbAmout = limbAmout
    }

    eat(food){
        console.log(` I eat ${food}`);
    }
}

class Predators extends Mamals{
    eat(){
        console.log(`I eat meat`);
    }
}

class Whales extends Mamals{
    
}

class Primates extends Mamals{
    move(){console.log(`I can run`);}
}

class Dog extends Predators{
    constructor(title,age,weight)
    {
        super(title,age,weight)
        this.title = title
        this.age = age
        this.weight = weight
    }
    eat(){
        console.log('I eat feed');
    }
}

class Dolphin extends Whales{
    constructor(title,age,weight,limbAmout)
    {
        super(title,age,weight,limbAmout)
        this.title = title
        this.age = age
        this.weight = weight
        this.limbAmout = limbAmout
    }

    move(){
        console.log(`I can swim`);
    }
}

class Human extends Primates{
    constructor(age,title,weight,limbAmout)
    {
        super(age,title,weight,limbAmout)
        this.age = age;
        this.title = title;
        this.weight = weight;
        this.limbAmout = limbAmout
    }

    say(text){
        console.log(` I say ${text}`);
    }
    eat(food){
        console.log(` I eat ${food}`);
    }
    
}


const jack = new Human(19,'Jack', 59,4);
const vasyok = new Human(23,'Vasya',62,4)
const dolphin = new Dolphin('Dolphin',5,125,0)
const parrot = new Birds(3,'Kesha',0.5,4)
const rex = new Dog('Rex',4,32)
const predator = new Predators()
const shark = new Fish(3,'shark',170,0)


console.log(jack);
jack.say(': "say palanitsya"')
jack.eat('rosiyske nemovlya')
jack.move()

console.log(vasyok);
vasyok.say('Glory to Ukraine')
vasyok.eat('palanitsya')

console.log(parrot);
parrot.move()
parrot.say()

console.log(dolphin);
dolphin.move()

predator.eat()

console.log(rex);
rex.eat()

console.log(shark);
shark.eat('small fish')











// const toyota = new Car('Toyota','camry', 46000,3,5);
// const bmw = new Car('bmw','x5', 80000,4);
// const audi = new Car('Audi','A6', 22000,3);

// const cars = [honda,toyota,bmw,audi]

// console.log(cars.sort((a,b)=> a.price < b.price ? 1 : -1));

// audi.move()


// 'use strict'

// class Transport{

//     constructor(brand,model)
//     {
//         this.brand = brand;
//         this.model = model;
//     }

//     move(){
//         console.log('Suka ya letayu');
//     }

// }
// class Plaine extends Transport{
// }
// class Ship extends Transport{
// }
// class Car extends Transport{
//     constructor(brand,model,price,engine){
//         super (brand,model)
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     this.engine = engine;
// }
//     setPrice(price){
//         if(price >0){
//             this.price=price
//         }
//     }
// }
// const honda = new Car('Honda','CR_V', 42000,2);
// const toyota = new Car('Toyota','camry', 46000,3,5);
// const bmw = new Car('bmw','x5', 80000,4);
// const audi = new Car('Audi','A6', 22000,3);
// const cars = [honda,toyota,bmw,audi]
// console.log(cars.sort((a,b)=> a.price < b.price ? 1 : -1));
// audi.move()