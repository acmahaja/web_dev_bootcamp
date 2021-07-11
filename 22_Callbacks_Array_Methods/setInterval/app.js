const id = setInterval(() => {
    console.log(Math.random())
}, 200)

setTimeout(() => {
    clearInterval(id);
    console.log("stop numbers 😲");
}, 2000)