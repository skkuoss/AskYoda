var express = require("express");
var router = express.Router();
const spotifyApi = require('../utils/spotify');

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.query);
  if (!req.query) res.send({ msg: "No query" });

  spotifyApi.searchTracks(req.query.trackName).then(
    function (data) {
      res.send(data);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

module.exports = router;
