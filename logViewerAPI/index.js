const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');

const logger = require('./logger');

logger();


io.on('connection', (socket) => {

    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('my message', (msg) => {
        console.log('message: ' + msg);

        setInterval( ()=>{
            fs.readFile('server.log', 'utf8', function (err,data) {
                if (err) {
                  return console.log(err);
                }
                io.emit('my broadcast', `${data}`);
              });
        },1000)
    });
  });



http.listen(3000,()=>{
    console.log('listening on 3000');
})