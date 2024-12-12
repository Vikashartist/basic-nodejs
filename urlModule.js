var url = require('url');
var adr = 'https://www.example.com/products?id=12345&category=electronics&sort=price';
var q = url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);

