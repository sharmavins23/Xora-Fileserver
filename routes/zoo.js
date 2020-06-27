// * Main Project: https://github.com/sharmavins23/Zoo

const fs = require("fs");

const zooDataPath = "data/zoo/zooData.json";
var zooData = reloadData();

function zoo(app) {
    // Get all animals from zoo.
    app.get("/zoo", (req, res) => {
        reloadData(); // Hot reload in event case of manual changes
        res.send(zooData);
    });

    // Add an animal to the zoo.
    app.post("/zoo/add", (req, res) => {
        reloadData();
        /* Request format:
            {
                "name": "",
                "default_scalar": "",
                "asset_url": ""
            }
        */
        zooData["assets"].push(req.body);
        fs.writeFileSync(zooDataPath, JSON.stringify(zooData));

        res.send({
            Status: 200,
            Message: "Data successfully appended.",
        });
    });

    // Remove an animal from the zoo.
    app.delete("/zoo", (req, res) => {
        // TODO: Implementation here.
    });
}

// Hot relaod the parsed data in a blocking format.
function reloadData() {
    zooData = JSON.parse(fs.readFileSync(zooDataPath));
}

module.exports = zoo;
