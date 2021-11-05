var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('index')
});

// var mosca = require('mosca');

// var ascoltatore = {
//     //using ascoltatore
//     //type: 'mongo',
//     //url: 'mongodb://localhost:27017/mqtt',
//     //pubsubCollection: 'ascoltatori',
//     //mongo: {}
// };

// var settings = {
//     port: 1883,
//     backend: ascoltatore
// };

// var server = new mosca.Server(settings);

// server.on('clientConnected', function (client) {
//     console.log('client connected', client.id);
// });
// server.on('ready', setup);


// function setup() {
//     console.log('Mosca server is up and running');
// }

module.exports = router;
