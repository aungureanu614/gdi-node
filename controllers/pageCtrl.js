// Exposing a method: https://nodejs.org/api/modules.html#modules_modules
// Rendering a template: http://expressjs.com/en/api.html#res.render
var home = function (req, res) {
  res.render('home');
}

var about = function(req, res){
    res.render('about');
}

var error = function(req, res){
    res.render('noRoute');
}
var request = require('request');

var dinosaurs = function(req, res){
    
    request('https://my-cloud-aungureanu.c9users.io/api/dinosaurs', function(err, response, body){
        if (!err && response.statusCode == 200) {
        res.render('dinosaurs', {name: JSON.parse(body)});
  }
})

}

module.exports = {
    home: home,
    about: about,
    dinosaurs: dinosaurs,
    error: error,
    
}

// request module: https://www.npmjs.com/package/request
// Passing arguments to a template: http://expressjs.com/en/api.html#res.render