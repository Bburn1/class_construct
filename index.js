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

    static isAnimals(obj){
        return obj instanceof this;
    }

    

    static MaxAge = 210;
    static MaxWeight = 150000
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


    static MaxAge = 210;
    static MaxWeight = 150000
    
    
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

    static isMamals(obj){
        return obj instanceof this;
    }
    
}

class Car{
}


const jack = new Human(19,'Jack', 59,4);
const vasyok = new Human(23,'Vasya',62,4)
const dolphin = new Dolphin('Dolphin',5,125,0)
const parrot = new Birds(3,'Kesha',0.5,4)
const rex = new Dog('Rex',20,32)
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


console.log(Human.isMamals(jack));
console.log(Animals.isAnimals(rex));

console.log(Human.isMamals(shark));
console.log(Fish.isAnimals(shark));



console.log(Animals.MaxWeight);
console.log(Predators.MaxAge);
