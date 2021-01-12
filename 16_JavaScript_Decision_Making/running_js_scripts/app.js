console.log("Hello from my JS file");
let total = 4 + 1;

function getColor(phrase) {
    if (phrase === 'stop') {
        console.log('red');
    } else if (phrase === 'slow') {
        console.log('yellow');
    } else if (phrase === 'go') {
        console.log('green');
    } else {
        console.log('purple')
    }
}

getColor('stop')
getColor('slow')
getColor('go')

const mystery = ''; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}