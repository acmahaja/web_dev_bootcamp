const add = (x, y) => {
    return x * y;
}

const square = x => {
    return x * x;
}

const rollDie = () => {
    return Math.floor(Math.random * 5) + 1;
}

console.log(square(9));

const greet = name => {
    return `Hey ${name}!`
}

console.log(
    greet("Hagrid"));
console.log(
    greet("Luna"));

const rollDie2 = () => (
    Math.floor(Math.random * 5) + 1
)

const movies = [{
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(
//     function(movie) {
//         return `${movie.title} - ${movie.score/10}/10`;
//     }
// )
// console.log(newMovies);

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score/10}/10`)
console.log(newMovies);