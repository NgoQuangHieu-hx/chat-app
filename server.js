const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
app.use(cors());

const io = require('socket.io')(server, {
    cor:
        { origin: "*" }
});

io.on('connection', (Socket) => {
    console.log('connection');

    Socket.on('disconnect', (Socket) => {
        console.log('disconnect');
    });
});

server.listen(3000, () => {
    console.log('Server is running');
})