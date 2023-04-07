// Iterate through money from highest to lowest, getting the greatest whole numbers for each type of coin for change
const calculateChange = function(total, cash) {
  let coinTypes = [
    [ "twentyDollar", 2000 ],
    [ "tenDollar", 1000 ],
    [ "fiveDollar", 500 ],
    [ "twoDollar", 200 ],
    [ "oneDollar", 100 ],
    [ "quarter", 25 ],
    [ "dime", 10 ],
    [ "nickel", 5 ],
    [ "penny", 1 ]];
  let coins = {};
  let change = cash - total;
  for (let coinType of coinTypes) {
    // Get greatest whole number of the current type of coin for change of total and subtract it from total
    let changeAfterCoinSubtraction = change % (Number(coinType[1]));
    let numOfCoin = change / Number(coinType[1]) - changeAfterCoinSubtraction / Number(coinType[1]); // truncate stuff after the decimal
    if (numOfCoin >= 1) {
      coins[coinType[0]] = numOfCoin;
    }
    change = changeAfterCoinSubtraction;
  }
  return coins;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));