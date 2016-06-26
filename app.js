var express = require('express');
var app = express();

// setting the EJS engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

// Route to access game
app.get('/', (req, res) => {
  res.render('index');
});

var port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log('Server listening on port '+port+'...');
});

module.exports = app;