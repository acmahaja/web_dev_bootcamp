const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

const total = prices.reduce((total, price) => {
    return total + price
})

console.log(`total = ${total}`);

const minPrice = prices.reduce((min, price)=>{
    if(price < min){
        return price
    }
    return min;
});

console.log(`min = ${minPrice}`);

const movies = [
    { title: 'Amadeus', score: 99, year: 1984 },
    { title: 'Stand By Me', score: 85, year: 2013 },
    { title: 'Parasite', score: 95, year: 2004 },
    { title: 'Alien', score: 90, year: 1979 },
];

const highestRatedMovie = movies.reduce((highestRated, currMovie)=>{
    if (currMovie.score > highestRated.score)
        return currMovie
    return highestRated
});
console.log(highestRatedMovie);