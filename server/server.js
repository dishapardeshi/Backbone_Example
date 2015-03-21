var express = require('express'),
logger = require('morgan'),
path = require('path'),
stitch  = require('stitch');

var package = stitch.createPackage({
      paths: [__dirname + '/../server'],
      dependencies: [
        __dirname + '/../public/lib/jquery/dist/jquery.js',
        __dirname + '/../public/lib/underscore/underscore.js',
        __dirname + '/../public/lib/backbone/backbone.js',
] });

var server = express();

server.use(express.static(__dirname + '/public'));

server.use(logger('dev', { immediate: true, format: 'dev' }));

//GET METHOD
server.get('/static/bundle.js', package.createServer());

//GET METHOD
server.get('/', function(req, res) {
        var html = path.resolve(__dirname + '/../index.html');
        res.sendFile(html);
    });

server.listen(5000);
console.log("Server is running.");