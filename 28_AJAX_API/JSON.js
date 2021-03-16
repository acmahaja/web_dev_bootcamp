const usdBTC = JSON.parse(`{"ticker":{"base":"BTC","target":"USD","price":"32958.44421161","volume":"70087.61249946","change":"221.72328231","markets":[{"market":"BitFinex","price":"32944.00000000","volume":13882.46149074},{"market":"Bitstamp","price":"32983.44000000","volume":14655.47164002},{"market":"Bittrex","price":"32952.04300000","volume":879.95574478},{"market":"Cex.io","price":"33000.00000000","volume":226.85636684},{"market":"Coinbase Pro","price":"32934.40000000","volume":26717.13754568},{"market":"Exmo","price":"32950.20000000","volume":493.26315984},{"market":"Hitbtc","price":"32842.68642000","volume":1511.37043},{"market":"Kraken","price":"33012.50000000","volume":11700.56584856},{"market":"YoBit","price":"33900.00000000","volume":20.530273}]},"timestamp":1611226202,"success":true,"error":""}`)
console.log(usdBTC);
console.log(usdBTC.ticker);
console.log(usdBTC.ticker.base);
console.log(usdBTC.ticker.target);
console.log(usdBTC.ticker.price);