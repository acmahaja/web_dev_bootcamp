let maximum = parseInt(prompt(`Enter a maximum number!`));


if (!maximum) {
    while (!maximum) {
        maximum = parseInt(prompt(`You entered an invalid number\nEnter a maximum number!`));
    }
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let i = 0;
for (i = 0; i < 5; i++) {
    let value = prompt(`Guess: ${i+1}: Enter a guess!`);

    if (!value) {
        while (!value) {
            value = parseInt(prompt(`Guess: ${i+1}: You entered an invalid number\nEnter a guess!`));
        }
    }
    if (value === targetNum) {
        prompt("YOU GOT IT RIGHT!");
        break;
    }
}