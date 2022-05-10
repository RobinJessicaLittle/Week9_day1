//npm init -y, too get your package.json
//too install express- npm i express

const express = require("express"); //this imports express to use in javascript

const app = express(); //anytime app is called run the express method, now has access to all the internal methods of express


app.use("/static", express.static("public"));

app.listen(5001, () =>{
    console.log("Listening on port 5001");
});

//npm install express - in terminal to get the listen method to work

//node src/server.js
// http://localhost:5001/static- in a new window in google too get the static too run, at the local host 5001

