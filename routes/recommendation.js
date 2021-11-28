var express = require("express");
var router = express.Router();
const spotifyApi = require('../utils/spotify');

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send('test');
  return;
  spotifyApi.searchTracks(req.query.songs[0]).then(
    function (data1) {
      spotifyApi.searchTracks(req.query.songs[1]).then(
        function (data2) {
          console.log(data1.body.tracks.items[0].artists[0].id);
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
