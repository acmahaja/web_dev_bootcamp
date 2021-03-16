// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// // setTimeout(() => {
// //     document.body.style.backgroundColor = 'orange';
// // }, 2000);

// // setTimeout(() => {
// //     document.body.style.backgroundColor = 'yellow';
// // }, 3000);

// const delayedColorChange = (newColor, delay) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     }, delay)
// }
// delayedColorChange('olive', 1000)
// delayedColorChange('teal', 2000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                })
            })
        })
    })
});

serchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works run this
    }, () => {
        // if it doesnt work, run this:
    })
}, () => {
    // if API is down, or request failed
})