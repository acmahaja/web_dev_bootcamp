const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const feline = {legs: 4, family: 'Felidae'}
const canine = { isFurry: 4, family: 'Caninae' }

const catDog = {...feline, ...canine}
console.log(catDog);

const dogCat = { ...canine, ...feline }
console.log(dogCat);

console.log({...[2,4,6,8]});
const text = "text"
console.log({...text});


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tokias123',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id:2345, isAdmin: false}
console.log(newUser)