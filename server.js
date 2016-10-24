// Create an Express app
// https://expressjs.com/en/starter/hello-world.html
var express = require("express");
const pug = require('pug');
var app = express();
var pageCtrl = require('./controllers/pageCtrl');
var apiCtrl = require("./controllers/apiCtrl");
app.use(express.static('public'));
app.use(express.static('node_modules'));


// Set template engine to Pug
// http://jade-lang.com/
// https://expressjs.com/en/guide/using-template-engines.html

app.set('view engine', 'pug');
app.set('views', './views');
// Use bodyParser to help POST data

// Define controllers to handle routes

// Define static routes to serve static assets like images, styles, etc.
// https://expressjs.com/en/starter/static-files.html

// Define page routes to specify which URLs will be handled by which controllers

// Define API routes to serve up application data
app.get('/', pageCtrl.home);
app.get('/about', pageCtrl.about);
app.get('/api/dinosaurs', apiCtrl.dinosaurs);
app.get('/dinosaurs', pageCtrl.dinosaurs);
// Define a catch-all 404 route
// https://expressjs.com/en/guide/routing.html

// Start your Express app up on port 3000
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000');
// });
app.get('*', pageCtrl.error);

app.listen(process.env.PORT || 8080);
