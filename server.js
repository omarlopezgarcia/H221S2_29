const express = require('express');
const app = express();

app.get('/', (req, res) => {res.sendFile('/home/ubuntu/projects/H221S2_29/index.html')});

app.use(express.static(__dirname + '/'));

app.listen(3000);
console.log('Server on port 3000')