var connect = require('connect');
var app = connect();

app.use(function(req,res,next){
    console.log(req.url, req.method);
    next();
});

app.use('/hello',function(req,res,next) {
    res.setHeader('Content-Type','text/html');
    res.end('Hello World');
});

app.use('/upload',function(req,res,next) {
    res.setHeader('Content-Type','text/html');
    res.end('Hello Upload');
});


app.listen(3001);


console.log("Starting the server at port 3000");