const express = require('express');
const path = require('path');

const app = express();

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/vue', express.static(path.join(__dirname, 'vue')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index-vue.html')));

app.listen(3000, () => console.info('Magic happens on port 3000'));