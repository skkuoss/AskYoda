var express = require('express');
var router = express.Router();

// handle /v1/recommendations
router.get('/', function (req, res, next) {
  // req.query => get all querystring
  // req.params => get all paths (In this router, there is no params)

  // response value <= all querystrings wrapping by javascript object
  res.send(req.query);
});

module.exports = router;
