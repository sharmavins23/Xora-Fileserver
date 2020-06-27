// * Main Project: https://github.com/sharmavins23/Zoo

const zooDataPath = "../data/zoo/zooData.json";
var zooData;
const fs = require("fs");

function zoo(app) {
    // Get all animals from zoo.
    app.get("/zoo", (req, res) => {
        reloadData();
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
        zooData.push(req.body);
        fs.writeFileSync(zooDataPath, zooData);

        reloadData();
    });

    // Remove an animal from the zoo.
    app.delete("/zoo", (req, res) => {
        // TODO: Implementation here.
    });

    // Relaod the parsed data in a blocking format.
    function reloadData() {
        zooData = fs.readFileSync(zooDataPath);
    }
}

module.exports = zoo;
