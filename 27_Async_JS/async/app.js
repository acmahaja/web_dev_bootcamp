// async function hello() {
// }

// const sing = async() => {
//     throw "OH NO, PROBLEM!"
//     return 'LA LA LA LA'
// }

// sing().then((data) => {
//     console.log("PROMISED RESOLVED WITH:", data);
// }).catch(err => {
//     console.log("OH NO, PROMISE WAS REJECTED:", err);
// })

const login = async(username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'pass') return 'WELCOME!'
    throw 'Invalid Password'
}

login('acmahaja', 'pass').then(
    msg => {
        console.log("LOGGED IN!");
        console.log(msg);
    }).catch(err => {
    console.log("ERROR!");
    console.log(err);

})