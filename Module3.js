var toUSD = require('./toUSD');
var randomNumber = require('./RandomNumber');
var theNumber = randomNumber(100, 1000000);
console.log(theNumber);
var toUSD = toUSD(theNumber);
console.log(theNumber);
var accountBalance = "Account balance: $" + theNumber;
module.exports.crap = theNumber;
module.exports.balance = accountBalance;
