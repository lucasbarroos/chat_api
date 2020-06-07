const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = '3333';

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(PORT);
