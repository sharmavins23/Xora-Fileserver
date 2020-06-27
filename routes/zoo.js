// * Main Project: https://github.com/sharmavins23/Zoo

const zooDataPath = "data/zoo/zooData.json";
var Reloader = require("reload-json");
var reload = new Reloader();

function zoo(app) {
    // Get all animals from zoo.
    app.get("/zoo", (req, res) => {
        // Hot reloading support for module - reloads on source file change
        reload.load(zooDataPath, (err, data) => {
            res.send(data);
        });
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
