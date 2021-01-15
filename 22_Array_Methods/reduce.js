const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
let total = 0
for (let price of prices) {
    total += price;
}
console.log(total);

console.log(prices.reduce((total, price) => (total + price)));

console.log(prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
}));