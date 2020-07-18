// * Main Project: https://github.com/sharmavins23/Thinking-with-Portals

const fs = require("fs");

const portalsDataPath = "data/portals/portalsData.json";
let portalsData = reloadData();

function portals(app) {
    // Send the latest drawing that is not the client's to the client
    app.get("/portals/receive", (req, res) => {
        // TODO: Schema Validation
        console.log("Data sent!");
        reloadData();

        // Testing - send the first value
        res.send(portalsData["drawings"][0]);

        // // Loop through all drawing objects
        // portalsData["drawings"].foreach((drawing) => {
        //     // Send the first drawing that is not the client's
        //     if (drawing.sender != req.body.sender) res.send(drawing);
        // });
    });

    // Save the latest drawing from the client
    app.post("/portals/send", (req, res) => {
        // TODO: Schema Validation
        console.log("Data got!");
        reloadData();
        /* Request format:
            {
                sender: <sender ID>,
                lines: [
                    {
                        points: [
                            {
                                x: <x value of vector>,
                                y: <y value of vector>,
                                z: <z value of vector>,
                            },
                            {...}
                        ]
                    },
                    {...}
                ]
            }
        */
        drawing = req.body;
        drawing.timeStamp = Math.floor(new Date()); // Add unix epoch time (ms)
        portalsData["drawings"].unshift(drawing); // Add value to start
        fs.writeFileSync(portalsDataPath, JSON.stringify(portalsData));

        res.status(201).send({ Message: "Data successfully sent." });
    });

    // Flush the data.
    app.delete("/portals/flush", (req, res) => {
        fs.writeFileSync(
            portalsDataPath,
            JSON.stringify({
                drawings: [],
            })
        );
    });
}

// Hot reload the parsed data in a blocking format.
function reloadData() {
    return JSON.parse(fs.readFileSync(portalsDataPath));
}

module.exports = portals;
