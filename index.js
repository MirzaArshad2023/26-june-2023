const express = require('express');
const app = express();

const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    //io.emit('connection', 'new user connected');\
    //console.log('a user is connected');
    socket.on('chat message', (msg) => {
        //console.log(msg);\
        socket.emit('chat message', (msg + "11"));
    })

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});