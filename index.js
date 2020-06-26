var express = require("express");
var app = express();
var fs = require("fs");

// Dynamically load all routes from all project folders
require("./routes")(app);

// Server configuration
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is now listening at http://%s:%s", host, port);
});
