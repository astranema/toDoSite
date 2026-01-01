"use strict"

const express = require("express");
const fs = require('node:fs/promises');
const path = require('path');

const app = express();
// localhost port
const PORT = 3000;
// path of src folder
const srcDir = path.join(__dirname, "..");

let mainSiteDir = path.join(srcDir, 'site');
let htmlDir = path.join(mainSiteDir, 'site.html');

// making css and js work
app.use(express.static(mainSiteDir));

// responses to different requests
app.get('/', (req, res) => {
    res.send('Just go to lunaoneil.com/todo for the todo list');
});
app.get('/todo', (req, res) => {
    res.sendFile(htmlDir);
});

// starts server
app.listen(PORT, () => {
    console.log("server running.");
});