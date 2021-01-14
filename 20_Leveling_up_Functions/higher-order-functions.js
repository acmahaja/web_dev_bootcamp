function callTwice(func) {
    func();
    func();
}

function rollDie() {
    console.log(Math.floor(Math.random() * 6)) + 1;
}

callTwice(rollDie)