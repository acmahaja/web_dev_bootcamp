const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 2312];

console.log(Math.max(nums));
console.log(Math.max(...nums));

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats];
console.log(allPets);