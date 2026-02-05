const express = require('express');

const app = express();

app.use( '/page1', (req, res, next) => {
    console.log("page1 reached");
    res.send("<h1> page1 reached </h1>");
});

app.use( '/', (req, res, next) => {
    console.log("/ reached");
    res.send("<h1> /reached </h1>");
});





app.listen(3000);