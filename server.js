process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var fs = require('fs');

// Web App
var app = express();
var router = express.Router();
var path = __dirname + '/';

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/',function(req, res){
    res.sendFile(path + 'index.html');
});

router.get('/test',function(req, res){
    res.sendFile(path + 'test.html');
});

app.use('/',router);
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts', express.static(__dirname + '/fonts'));

var port = process.env.PORT;
app.listen(port || 3000, function () {
    console.log('Live at Port 3000');
});
