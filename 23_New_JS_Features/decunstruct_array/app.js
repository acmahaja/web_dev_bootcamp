const scores = [Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000]
const highScore = scores[0]
const secondHighScore = scores[1]

console.log(highScore);
console.log(secondHighScore);

// const [gold, silver] = scores
// console.log(gold);
// console.log(silver);

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];
const [gold, silver, bronze] = raceResults;
console.log(gold);
console.log(silver);
console.log(bronze);


const [fastest, ...everyoneElse] = raceResults;
console.log(fastest);
console.log(everyoneElse);