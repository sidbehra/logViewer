const fs = require('fs');


const log = () => {
        fs.appendFile('server.log',(Math.random()*(1000000000000000000)) + "\n", function (err) {
            if (err) throw err;
          })
}

module.exports = log;