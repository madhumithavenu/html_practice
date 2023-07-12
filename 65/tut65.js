const fs = require("fs");
fs.readFile("64/dele.txt", "utf-8", (err, data)=>{
    console.log(data);
});

console.log("This is a message");