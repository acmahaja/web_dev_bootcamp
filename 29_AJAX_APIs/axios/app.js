// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res =>{
//         console.log(res.data.ticker.price);
//     })
//     .catch(err =>{
//         console.log("ERROR!", err);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log("ERROR!", e);
    }
}
const jokes = document.getElementById("jokes")
const button = document.querySelector('button')

const getDadJoke = async () => {
    try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
        
    } catch (error) {
        return " NO JOKES AVAILABLE! SORRY :("
    }

}

const addNewJoke = (jokeText) => {
    const newLi = document.createElement('li');
    newLi.append(jokeText)
    jokes.append(newLi)
}

button.addEventListener('click', ()=>{
    getDadJoke().then((res)=> addNewJoke(res))
    
})

console.log("asd");