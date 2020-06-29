// * Main Project: https://github.com/sharmavins23/Glasses

const fs = require("fs");

const glassesDataPath = "data/glasses/glassesData.json";
var glassesData = reloadData();

function glasses(app) {
    // Get all pairs of glasses.
    app.get("/glasses", (req, res) => {
        reloadData(); // Hot reload in case of manual change
        res.send(glassesData);
    });

    // Add a pair of glasses.
    app.post("/glasses/add", (req, res) => {
        reloadData();
        /* Request format:
            {
                "name": "",
                "default_scalar": "",
                "asset_url": ""
            }
        */
        glassesData["assets"].push(req.body);
        fs.writeFileSync(glassesDataPath, JSON.stringify(glassesData));

        res.send({
            Message: "Data successfully appended.",
        });
    });
}

function reloadData() {
    glassesData = JSON.parse(fs.readFileSync(glassesDataPath));
}

module.exports = glasses;
