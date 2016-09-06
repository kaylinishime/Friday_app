// Main starting point of the app
var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')
var morgan =  require('morgan');
var Sequelize = require('sequelize');
var app = express();
var router = require('./router');


var db = require('./models/index')
var pg = require('pg');
var Sequelize = require('sequelize')
  , sequelize = new Sequelize('database_name', 'username', 'password', {
      dialect: "postgres",
      port:    5432,
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });


// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
// mount all reoutes with appropriate base paths
app.use('/', router);





// Server Setup
var port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
