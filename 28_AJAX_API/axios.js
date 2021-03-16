// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log('ERROR', err);
//     })

// const fetchBitcoinPrice = async() => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd')
//         console.log(res.data.ticker.price);

//     } catch (error) {
//         console.log('ERROR', error);
//     }
// }

const getDadJoke = async() => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('http://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
}