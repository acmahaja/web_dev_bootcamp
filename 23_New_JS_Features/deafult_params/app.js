function rollDie(numSlides = 6) {
    return Math.floor(Math.random() * numSlides + 1);
}

function greet(person, msg="Hey there", punc="!") {
    console.log(`${msg}, ${person}${punc}`);
}