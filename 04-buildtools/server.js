const express = require('express');
const path = require('path');

const app = express();

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/systemjs', express.static(path.join(__dirname, 'systemjs')));
app.use('/bundle.js', express.static(path.join(__dirname, 'bundle.js')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index-webpack.html')));

app.listen(3000, () => console.info('Magic happens on port 3000'));
