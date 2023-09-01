class Unitcards{
    constructor(name,cost,power,resilience){
        this.name=name;
        this.cost=cost;
        this.power=power;
        this.resilience=resilience;
}
    attack(target){
    if( target instanceof Unitcards){
        target.resilience-=this.power;
        console.log(`${this.name} attack ${target.name}`);
        } else {
        throw new Error( "Target must be a unit!" );
        }
        }
}

class Effect_cards{
    constructor(name,cost,text,stat,magnitude){
        this.name=name;
        this.cost=cost;
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
        }
        play( target ) {
            if( target instanceof Unitcards){
            target[this.stat]+=this.magnitude;
            console.log(`this effect applied new ${this.stat} became ${target[this.stat]}`);
            } else {
            throw new Error( "Target must be a unit!" );
            }
            }
}
const Red_Belt_Ninja= new Unitcards("Red Belt Ninja",3,3,4);
const Black_Belt_Ninja=new Unitcards("Black Belt Ninja",4,5,4);
const Hard_Algorthim=new Effect_cards("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
const Unhandled_Promise_Rejection=new Effect_cards("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
const Pair_Programming=new Effect_cards("Pair Programming",3,"	increase target's power by 2","power",2);

Hard_Algorthim.play(Red_Belt_Ninja);
Unhandled_Promise_Rejection.play(Red_Belt_Ninja);
Pair_Programming.play(Red_Belt_Ninja);
Red_Belt_Ninja.attack(Black_Belt_Ninja);