// * Main Project: https://github.com/sharmavins23/Glasses

const fs = require("fs");
const { check, validationResult } = require("express-validator");

const glassesDataPath = "data/glasses/glassesData.json";
var glassesData = reloadData();

function glasses(app) {
    // Get all pairs of glasses.
    app.get("/glasses", (req, res) => {
        reloadData(); // Hot reload in case of manual change
        res.send(glassesData);
    });

    // Add a pair of glasses.
    app.post(
        "/glasses/add",
        [
            check("name").exists(),
            check("default_scalar").exists(),
            check("URL").exists().isURL(),
        ],
        (req, res) => {
            // Schema validation
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return res.status(400).json({ errors: errors.array() });

            reloadData();

            // Append and write the new data
            glassesData["assets"].push(req.body);
            fs.writeFileSync(glassesDataPath, JSON.stringify(glassesData));

            res.status(201).send({
                message: "Data successfully appended.",
            });
        }
    );

    // Flush the data.
    app.delete("/glasses/flush", (req, res) => {
        // Write an empty JSON to the location
        fs.writeFileSync(
            glassesDataPath,
            JSON.stringify({
                assets: [],
            })
        );

        res.send({
            message: "Data successfully deleted.",
        });
    });
}

// Hot relaod the parsed data in a blocking format.
function reloadData() {
    glassesData = JSON.parse(fs.readFileSync(glassesDataPath));
}

module.exports = glasses;
