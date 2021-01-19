document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})

const input = document.querySelector('input');
input.addEventListener('keydown', function() {
    console.log("keydown");
})
input.addEventListener('keyup', function() {
    console.log("keyup");
})


window.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.code);
})

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowDown':
            console.log("Move Down");
            break;
        case 'ArrowLeft':
            console.log("Move Left");

            break;
        case 'ArrowUp':
            console.log("Move Up");

            break;
        case 'ArrowRight':
            console.log("Move Right");

            break;
        default:
            console.log('ignored!');
            break;
    }
})