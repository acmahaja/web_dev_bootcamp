function makeMysteryFunction() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("CONGRATS, I AM A GOOD FUNCTION");
            console.log("YOU WIN A MILLION DOLLARS");
        }
    } else {
        return function() {
            console.log("YOU HAVE BEEN INFECTED BY THE A COMPUTER VIRUS");
            console.log("STOP TRYING TO CLOSE THE WINDOW");
            console.log("STOP TRYING TO CLOSE THE WINDOW");
            console.log("STOP TRYING TO CLOSE THE WINDOW");
            console.log("STOP TRYING TO CLOSE THE WINDOW");
            console.log("STOP TRYING TO CLOSE THE WINDOW");
            console.log("STOP TRYING TO CLOSE THE WINDOW");
            console.log("STOP TRYING TO CLOSE THE WINDOW");
        }
    }
}

const mystery = makeMysteryFunction();
mystery();