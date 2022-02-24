// const names = require("./names")
// const sayHi = require("./methods")
// // const data = require("./alternative")
// // console.log(data.items)
// // sayHi(names.mark)
// // sayHi(names.john)

// require('./grenade')

const os =  require ('os');

const user = os.userInfo();
console.log(`The system time is ${os.uptime()} seconds`)

const currOs = {
    name: os.type(),
    releas: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currOs)