// * Main Project: https://github.com/sharmavins23/Zoo

var zooData = require("../data/zoo/zooData.json");

function zoo(app) {
    // Get all animals from zoo.
    app.get("/zoo", function (req, res) {
        // Implementation here.
    });

    // Add an animal to the zoo.
    app.post("/zoo/add", function (req, res) {
        // Implementation here.
    });

    // Remove an animal from the zoo.
    app.delete("/zoo", function (req, res) {
        // Implementation here.
    });
}

module.exports = zoo;
