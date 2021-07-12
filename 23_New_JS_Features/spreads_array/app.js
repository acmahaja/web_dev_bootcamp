const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

var allPets = [...cats, ...dogs]
console.log(allPets);
var allPets = [...cats, ...dogs, 'Speedy']
console.log(allPets);

console.log([..."hello"]);
