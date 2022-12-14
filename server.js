const express = require('express');
const app = express();

app.get('/', (req, res) => {res.sendFile('/home/ubuntu/project/H221S2_29/index.html')});

app.listen(3000);
console.log('Server on port 3000')