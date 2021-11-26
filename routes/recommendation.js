var express = require("express");
var router = express.Router();
var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "clientId",
  clientSecret: "clientSecret",
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

  spotifyApi.searchTracks(req.query.songs[0]).then(
    function (data1) {
      spotifyApi.searchTracks(req.query.songs[1]).then(
        function (data2) {
          spotifyApi
            .getRecommendations({
              seed_artists: [
                data1.body.tracks.items[0].artists[0].id,
                data2.body.tracks.items[0].artists[0].id,
              ],
              seed_tracks: [
                data1.body.tracks.items[0].id,
                data2.body.tracks.items[0].id,
              ],
            })
            .then(
              function (data) {
                let recommendations = data.body;
                // console.log(recommendations);
                res.send(recommendations);
              },
              function (err) {
                console.log("Something went wrong!", err);
              }
            );
        },
        function (err) {
          console.error(err);
        }
      );
    },
    function (err) {
      console.error(err);
    }
  );
});

module.exports = router;
