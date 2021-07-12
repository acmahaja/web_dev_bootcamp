const user = {
    email: 'harvey@gmail.com',
    password: 'scott1948sMith',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio:'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors.',
    city: 'San Francisco',
    state: 'California'
}

console.log(user);

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}
console.log(user2);


// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.email);

// const {email, firstName, lastName, city, bio} = user;
// console.log(email);
// console.log(firstName);
// console.log(lastName);
// console.log(city);
// console.log(bio);

// const {born: birthYear, died: deathYear} = user;
// console.log(birthYear);
// console.log(deathYear);

// const {city, state, died = 'N/A'} = user2;
const { born: birthYear, died: deathYear = 'N/A'} = user2;
console.log(died);

const movies = [
    { title: 'Amadeus', score: 99, year: 1984 },
    { title: 'Stand By Me', score: 85, year: 2013 },
    { title: 'Parasite', score: 95, year: 2004 },
    { title: 'Alien', score: 90, year: 1979 },
];