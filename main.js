// imports
var morgan = require('morgan');
var path = require('path');
var express = require('express');
var createErrors = require('http-errors');

// import routers
var router = require('./routes/hub');

var app = express();

// port setup
var port = process.env.PORT || '3000';

// view setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// middleware setup
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// router setup
app.use('/', router);

// db setup
var mongoose = require('mongoose');
var dbURL = 'mongodb+srv://baatarso:123456Aa@cluster0.bhyzi.mongodb.net/form-db?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dbURL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error'));  // what is this?

// start app
app.listen(port, console.log('Listening...'))

// error handling
app.use(function(err, req, res, next){
  
  // add more stuff here

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



/*

Deploying Your App

At the bare minimum, you will want to 
- remove the stack traces that are included on error pages during development -> /Set NODE_ENV to 'production'/
- tidy up your logging -> /you should attempt to minimize the amount of logging added for debugging purposes/ 
- Use gzip/deflate compression for responses (npm install compression) PS: Note: For a high-traffic website in production you wouldn't use this middleware. Instead, you would use a reverse proxy like Nginx.
- and set the appropriate headers to avoid many common security threats. -> Use Helmet to protect against well known vulnerabilities

*/