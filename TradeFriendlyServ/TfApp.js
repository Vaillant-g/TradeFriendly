const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const request = require('request');
const passport = require('passport');
const steamUserInventory = require('get-steam-inventory');
const steamfriends = require('web-api-steam');



const port = process.env.PORT || 4001;
//const index = require("./routes/index");
const app = express();
const server = http.createServer(app);
const mysql = require('mysql');

const io = socketIo(server); // < Interesting!

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'twyf'
});


connection.connect();


connection.query('SELECT * from skin where id = 1', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].WeaponName);
});

  server.listen(port, () => console.log(`Listening on port ${port}`));


  //Fonction de connexion
  function victime(msg, socket){
    
    //steamfriends.getFriendList("76561198072811191", "3F95133360C48472452698ACF9529A0F", (err, data) => {
      //  console.log(data);
        
    //});



    console.log(msg);
    socket.emit('Return data', "C'est toi la victime");
  }

  //Fonction de recherche d'arme
  function ReceivedWeapon(msg, socket) {
    console.log("received : " + msg);
    //if (msg.startsWith("he"))
    var arr = [];
    
      
    steamUserInventory.getinventory(730, "76561198072811191", function(err, data) {
      data.marketnames.forEach(function(entry) {
      if (entry.startsWith(msg)) {
    //    console.log(entry);
        arr.push(entry);
      }
      });
      console.log(arr);
      socket.emit('FriendsWithWeapon', arr);
    }, 2);


  }


  //Connection et reception des msg via socket
io.on("connection", function(socket) {
    console.log("New client connected");

    socket.on('steamCo', function(data) {
        victime(data, socket);
    });

    socket.on('WeaponSearched', function(data) {
      ReceivedWeapon(data, socket);
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
  });

  