// const fs = require('fs');
// let rs = fs.createReadStream('./demofile.txt');

// rs.on('open', () => {
//     console.log('the file is open');
// });
// rs.on('close', () => {
//     console.log('the file is close');
// });

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('hello', () => {
    console.log("Hello hello hello.......");
})
eventEmitter.on('hello', (...data) => {
    console.log(`Hello hello hello.......${data}`);
})

eventEmitter.emit('hello', 1, 2, 3, 4)
