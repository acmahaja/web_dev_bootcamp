// fetch("https://api.cryptonator.com/api/full/btc-usd")
//     .then(res => {
//         console.log("RESPONSE, waiting to parse:", res);
//         return res.json();
//     }).then(data => {
//         console.log("DATA PARSED....");
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log("ERROR:", e);
//     })

const fetchBitcoinPrice = async() => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price);

    } catch (error) {
        console.log("SOMETHING WENT WRONG", error);
    }
}