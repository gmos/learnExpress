const express = require('express');
const router = express.Router();
var debug = require('debug')('learnexpress:users');

/* GET users listing. */

router.all('/:user', function(req, res, next) {
  debug('here we go JSON for user: ' + req.params.user);
  res.type('application/json').send(JSON.stringify({ from: 'Gijs', user: req.params.user}));
});

module.exports = router;
