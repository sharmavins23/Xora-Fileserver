// * Main Project: https://github.com/sharmavins23/Zoo

var zooData = require("../data/zoo/zooData.json");

function zoo(app) {
    // Get all animals from zoo.
    app.get("/zoo", (req, res) => {
        res.send(zooData);
    });

    // Add an animal to the zoo.
    app.post("/zoo/add", (req, res) => {
        /* Request format:
            {
                "name": "",
                "default_scalar": "",
                "asset_url": ""
            }
        */
        // TODO: Implementation here.
    });

    // Remove an animal from the zoo.
    app.delete("/zoo", (req, res) => {
        // TODO: Implementation here.
    });
}

module.exports = zoo;
