const sing = async() => {
    throw "UH OH"
    return 'LA LA LA LA'
}

// console.log(sing());
sing()
.then((data) => {
    console.log("PROMISE RESOLVED WITH:", data);
})
.catch(err => {
    console.log("OH NO, PROMISE REJECTED!");
})

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgieetarecute') return 'Welcome!'
    throw 'Invalid Password >:('
}

login('asjflas', 'corgieetarecute')
    .then(msg => {
        console.log("Logged In!")
        console.log(msg)
    })
    .catch(err =>{
        console.log("ERROR!")
        console.log(err)
    })