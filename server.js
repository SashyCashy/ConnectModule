var connect = require('connect');
var app = connect();

app.use(function(req,res,next) {
    res.setHeader('Content-Type','text/html');
    res.end('Hello World');
});

app.listen(3000);

console.log("Starting the server at port 3000");