var os = require('os');
var config = require('./config');

var app = require('http').createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(os.hostname() + ' is serving request');
});

app.listen(config.port, function(){
  console.log([new Date(), 'Demo server started on ', config.port].join(""));
});
