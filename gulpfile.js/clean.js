const fs = require('fs');


function clean(cb) {
    if(fs.existsSync('./docs')) {
        fs.rmSync("./docs", { recursive: true, force: true });        
    }
    cb();
}


module.exports = clean;