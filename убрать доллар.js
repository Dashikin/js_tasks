var str = '$120';

function  extractCurrencyValue(str) {
  return +str.slice(-1);
}

console.log( extractCurrencyValue(str) );
