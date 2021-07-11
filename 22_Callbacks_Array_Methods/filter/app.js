const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10
})


const movies = [
    { title: 'Amadeus', score: 99, year: 1984 },
    { title: 'Stand By Me', score: 85, year: 2013 },
    { title: 'Parasite', score: 95, year: 2004 },
    { title: 'Alien', score: 90, year: 1979 },
];

const amazingMovies = movies.filter(movie => {
    return movie.score > 93
})

const notAmazingMovies = movies.filter((m) => m.score <= 93)

function validUserNames(paramArray) {
    return paramArray.filter(el => el.length < 10);
}

console.log(validUserNames(['mark', 'staceysmom1978', 'q2982128238983', 'carrie98', 'MonanaFan']));