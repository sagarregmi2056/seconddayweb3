// this is our server for connecting frontend and metamask
const express = require("express");

const path = require("path");
// the path automatically come with express 
const app = express();




app.get("/",(req,res) => { 
    res.sendFile(path.join(__dirname+"/index.html"));
 })

//  here we are going to display the server port address
 const server =app.listen(5500);
 const portnumber = server.address().port;
 console.log(`port is open on ${portnumber}`);


//*note */ after this we are going to run command node server.js
// this is going to initiate the server