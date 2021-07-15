const req = new XMLHttpRequest();

req.onload = function () {
    console.log("All done with Request!!!");
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function () {
    console.log("ERROR!");
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send()

// console.log("test");