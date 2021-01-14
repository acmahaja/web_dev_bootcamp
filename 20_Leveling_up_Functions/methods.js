const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

console.log(myMath.square(2));
console.log(myMath.cube(3));
console.log(myMath["cube"](4));