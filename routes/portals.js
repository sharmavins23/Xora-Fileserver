// * Main Project: https://github.com/sharmavins23/Thinking-with-Portals

const fs = require("fs");

const portalsDataPath = "data/portals/portalsData.json";
let portalsData = reloadData();

function portals(app) {
    // Get the latest drawing.
    app.get("/portals/receive", (req, res) => {
        reloadData();

        // Send the first (latest) value
        res.send(portalsData["drawings"][0]);
    });

    // Send the drawing to the server.
    app.post("/portals/send", (req, res) => {
        // TODO: Schema Validation
        reloadData();

        // Save drawing, add timestamp
        drawing = req.body;
        drawing.timeStamp = Math.floor(new Date()); // Add unix epoch time (ms)

        // Add drawing to portal data
        portalsData["drawings"].unshift(drawing); // Add value to start
        fs.writeFileSync(portalsDataPath, JSON.stringify(portalsData));

        res.status(201).send({ message: "Data successfully sent." });
    });

    // Flush the data.
    app.delete("/portals/flush", (req, res) => {
        // Write an empty JSON to the location
        fs.writeFileSync(
            portalsDataPath,
            JSON.stringify({
                drawings: [],
            })
        );

        res.send({
            message: "Data successfully deleted.",
        });
    });
}

// Hot reload the parsed data in a blocking format.
function reloadData() {
    return JSON.parse(fs.readFileSync(portalsDataPath));
}

module.exports = portals;
