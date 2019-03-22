const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const request = require('request');
const passport = require('passport');
const steamUserInventory = require('steam-user-inventory');
const steamfriends = require('web-api-steam');



const port = process.env.PORT || 4001;
//const index = require("./routes/index");
const app = express();
const server = http.createServer(app);

const io = socketIo(server); // < Interesting!
let divet;


  server.listen(port, () => console.log(`Listening on port ${port}`));

  function victime()
  {

    steamfriends.getFriendList("76561198072811191", "3F95133360C48472452698ACF9529A0F", (err, data) => {
        console.log(data);
        
    });

    /*steamUserInventory('hiepbinh', "730/2/").then(data => {
        data.forEach(function(entry) {
         console.log(entry.name);
        });
    });*/


    console.log("Victime");
  }


io.on("connection", function(socket) {
    console.log("New client connected");

    socket.on('steamCo', function(data) {
        victime();
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
  });

  