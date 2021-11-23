var express = require('express');
var router = express.Router();

// handle /v1/recommendations
router.get('/', function (req, res, next) {
  // req.query => get all querystring
  // req.params => get all paths (In this router, there is no params)

  // response value <= all querystrings wrapping by javascript object
  // res.send(req.query);

  // Send Our songs to spotify server
  // song1_url
  // song2_url
  console.log(req.query.songs)
  console.log(req.query.songs[0])
  console.log(req.query.songs[1])

  // Algoritehms Part start
  // Algoritehms Part end

  res.send({
    name: 'Beatles - Yellow submarine'
  });
});

router.post('/', function (req, res) {
  res.send('Post Response');
});

module.exports = router;
