const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cuban-open-source'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+
        '/dist/cuban-open-source/index.html'));});
//server listening
app.listen(process.env.PORT || 5000)
