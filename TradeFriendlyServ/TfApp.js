const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const request = require('request');



const port = process.env.PORT || 4001;
const steamUrl = "";
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server); // < Interesting!

io.on("connection", function(socket) {
    console.log("New client connected");

    socket.on('steamCo', function(data) {
        victime();
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
  });


  server.listen(port, () => console.log(`Listening on port ${port}`));

  function victime()
  {
    console.log("Victime");
        var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
            'v2/?key=3F95133360C48472452698ACF9529A0F&appid=8930';
        request.get(url, function(error, steamHttpResponse, steamHttpBody) {
            console.log('test:', steamHttpResponse);
        });
  }
