const fs = require('fs');
fs.readFile('test.txt',(err,data) => {if(err) throw err 
    console.log(data.toString());
})
data = "hi my age is 18";
fs.writeFile('test.txt',data,(err) => {
    if(err) throw err
})