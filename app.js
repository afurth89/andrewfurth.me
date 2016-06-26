var express = require('express');
var app = express();

// setting the EJS engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

// Route to access game
app.get('/', (req, res) => {
  res.render('index');
});

// Start Server
app.listen(3000, function() {
  console.log("Starting a server on localhost:3000");
});