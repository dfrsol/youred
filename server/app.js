var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;

var routes = require('./routes/index');
var app = express();

app.use(express.static('client/'));

app.use('/', routes);

var server = app.listen(port, function (){
    console.log('\n Application started and listening on http://localhost:' + port);
});