// append file in node js. - appendFile
// var fs = require('fs');
// fs.appendFile("num.txt","content",function(err){
// }); 


// unlink or delete the file. - unlink
// fs.unlink("num.txt",function(err){
// console.log("Delected.");
// });

//open a file system. - open()
// var fs = require('fs');
// fs.open('num.txt','w',function(err,file){
//     if(err) throw err;
//     console.log('saved!');
// });

// //writefile in a file sytem - WriteFile()
// var fs = require('fs');
// fs.writeFile('num.txt','Writting content . ',function(err){
// console.log("writtinga file ");
// });

// Rename a file ;- fs.rename()
var fs = require('fs');
fs.rename('re.txt','renamed.txt',function(){
 console.log("file renamed");
});







 


 
 
 
 
