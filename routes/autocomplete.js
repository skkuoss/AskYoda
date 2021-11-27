var express = require("express");
var router = express.Router();
var SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config("../.env");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
spotifyApi.clientCredentialsGrant().then(
  function (data) {
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function (err) {
    console.log("Something went wrong when retrieving an access token", err);
  }
);
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
