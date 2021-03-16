const req = new XMLHttpRequest();

req.onload = function() {
    console.log("ALL DONE WITH REQUEST!!!");
    console.log(this.responseText);
    const data = JSON.parse(this.responseText)
    console.log(data.ticker.price);
}

req.onerror = function() {
    console.log("ERROR!!!");
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/full/btc-usd');
req.send();