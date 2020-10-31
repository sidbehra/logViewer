const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');

const logger = require('./logger');

setInterval(()=>logger(),1000)

io.on('connection', (socket) => {

    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('my message', (msg) => {
        console.log('message: ' + msg);
    });

    fs.watchFile('server.log',{
      persistent: true,
      interval: 1000,
    }, ()=>{
      fs.readFile('server.log', 'utf8', (err,data) => {
        io.emit('my broadcast', `${data}`);
      });
    })
  });

http.listen(3000,()=>{
    console.log('listening on 3000');
})