var http = require ('http');
var accountBalance = require ('./Module3');
var module2 = require ('./toUSD');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(accountBalance.balance);
  res.end();
}).listen(3000);

console.log('listening on port 3000');
