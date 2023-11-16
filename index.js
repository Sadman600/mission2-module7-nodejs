
const express = require('./client');
const app = express();
app.myApp('hello', (data) => {
    console.log(data);
})

