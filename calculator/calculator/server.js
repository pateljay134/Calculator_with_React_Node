var express = require('express');
var bodyParser = require('body-parser');
var Parser = require('expr-eval').Parser;

var app = express();

var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
	//and remove cacheing so we get the most recent comments
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

app.post('/calculate', function(req, res){
	debugger
	var a = eval(req.body.text);
	console.log(a);
	//console.log(req);
	res.json(a);

});

app.listen(port, function(){
    console.log("Server is listening on port" + port);
});
