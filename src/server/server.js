'use strict';

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

const history = [];

io.on('connection', (socket) =>{
  console.log('Client Connected', socket.id)

  socket.on('text', (payload)=>{
    console.log('broadcasting', payload);
    history.push(payload);
    io.sockets.emit('incoming', payload);
  });

  socket.on('history', ()=>{
    io.sockets.emit('history', history);
  });

})