var request = require('request');
var path = require('path');
var fs = require('fs');

var req = request.post({
  url: 'http://localhost:8000/hello'
}, function(err, r, body){
  if (err) { return console.error(err); }
  console.log('r', r);
  console.log('body', body);
});

var filePath = path.join(__dirname, 'large.json');

var form = req.form();
form.append('users', fs.createReadStream(filePath));
form.append('connection_name', 'test');