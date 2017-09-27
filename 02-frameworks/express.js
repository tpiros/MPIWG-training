const express = require('express');
const app = express();
const router = express.Router();

router.route('/products')
  .get((req, res, next) => res.send('Get Products'))
  .post((req, res, next) => res.send('Post Product'));

router.route('/products/:id')
  .get((req, res, next) => res.send(`Get Product with ID ${req.params.id}`))
  .put((req, res, next) => res.send(`Put Product with ID: ${req.params.id}`))
  .delete((req, res, next) => res.send(`Deleted Product with ID ${req.params.id}`));

// define API endpoints
app.use('/api', router);

// display 'index'
app.get('/', function(req, res) {
  res.send('Hello Express!');
});
  
app.listen(3000, () => console.log('Magic happens on port 3000'));
