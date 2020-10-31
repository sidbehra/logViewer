const fs = require('fs');


const log = () => {
    setInterval( ()=>{
        fs.appendFile('server.log',(Math.random()*(1000000000000000000)) + "\n", function (err) {
            if (err) throw err;
          })
    },1000)
}

module.exports = log;