const express = require('express');
const app = express();

app.get('/', (req, res) => res.send(H221S2_29/index.html))

app.listen(3000);
console.log('Server on port 3000')