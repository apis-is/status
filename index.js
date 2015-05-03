var express = require('express');
var request = require('request');

var app = express();
var url = process.env.APIS_URL;

app.get('/*', function(req, res) {
  request.get(url + req.params[0], function(error, response, body) {
    return res.json({status: response.statusCode});
  });
});

var server = app.listen(3000, function() {
  var port = server.address().port;

  console.log('Status server running on port: %s', port);
});
