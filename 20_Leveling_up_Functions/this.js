const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says meoww`)
    }
}

const meow2 = cat.meow;
console.log(meow2());


const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}