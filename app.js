// var http =require('http');
// http.createServer(function(req,res){
//     // res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end("not working");
// }).listen(8080);


// var http = require('http');
// http.createServer(function (req, res){
//     res.write("writtting");
//    res.end("working");
// }).listen(8080);

// file module
// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req,res){
//     fs.readFile('demo.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'txt/html'});
//         res.write(data);
//         return res.end();
//     });
   
// }).listen(8080);



var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
});

var fs = require('fs');
fs.unlink('mynewfile1.txt',,function(err){
console.log("working");
});