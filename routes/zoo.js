// * Main Project: https://github.com/sharmavins23/Zoo

const fs = require("fs");

const zooDataPath = "data/zoo/zooData.json";
let zooData = reloadData();

function zoo(app) {
    // Get all animals from zoo.
    app.get("/zoo", (req, res) => {
        reloadData(); // Hot reload in event of manual changes
        res.send(zooData);
    });

    // Add an animal to the zoo.
    app.post("/zoo/add", (req, res) => {
        // TODO: Schema Validation
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

        res.status(201).send({ Message: "Data successfully appended." });
    });

    // Flush the data.
    app.delete("/zoo/flush", (req, res) => {
        fs.writeFileSync(
            zooDataPath,
            JSON.stringify({
                assets: [],
            })
        );
    });
}

// Hot relaod the parsed data in a blocking format.
function reloadData() {
    return JSON.parse(fs.readFileSync(zooDataPath));
}

module.exports = zoo;
