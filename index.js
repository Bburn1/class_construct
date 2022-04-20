class Animals{

    constructor(age,title,weight,limbAmout)
    {
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
    move(mv){
        console.log(`I can ${mv}`) ;
    }
    static isAnimals(obj){
        return obj instanceof this;
    }
    static MaxAge = 210
    static MaxWeight = 150000
}


class Mamals extends Animals{ static MaxAge = 200;}

class Birds extends Animals{  }

class Fish extends Animals{ }

class Predators extends Mamals{ 
    eat(food){
    console.log(` I eat ${food}`);
}}

class Whales extends Mamals{  }

class Primates extends Mamals{
    move(){console.log(`I can run`);}
}

class Dog extends Predators{ }

class Dolphin extends Whales{   }

class Human extends Primates{   }

const jack = new Human(19,'Jack', 59,4);
const vasyok = new Human(23,'Vasya',62,4)
const dolphin = new Dolphin('Dolphin',5,125,0)
const parrot = new Birds(3,'Kesha',0.5,4)
const rex = new Dog('Rex',20,32)
const predator = new Predators()
const shark = new Fish(3,'shark',170,0)


console.log(jack);
jack.say(': "say palanitsya"')
jack.eat('salo')
jack.move()

console.log(vasyok);
vasyok.say('Glory to Ukraine')
vasyok.eat('palanitsya')

console.log(parrot);
parrot.move("fly")
parrot.say("chik-chirik")

console.log(dolphin);
dolphin.move("swim")

predator.eat("meat")

console.log(rex);
rex.eat("feed")

console.log(shark);
shark.eat('small fish')


console.log(Animals.isAnimals(rex));

console.log(Animals.MaxWeight);
console.log(Predators.MaxAge);
console.log(Animals.MaxAge);
