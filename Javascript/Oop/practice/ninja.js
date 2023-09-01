class Ninja{
    constructor(name,health,speed=3,strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }  
    showStats() {
        console.log(`My name is ${this.name} my strength is ${this.strength} my speed is ${this.speed} and my health ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.health} gained 10 health`)
    }
}
const ninja=new Ninja("Hyabusa",100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();