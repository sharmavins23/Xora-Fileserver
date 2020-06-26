// * This is an administrative file that lists other projects.

const fs = require("fs");
const dataDir = "./data/";

function server(app) {
    // Return a list of all projects.
    app.get("/", function (req, res) {
        res.status(200).send(JSON.stringify(getDirectories(dataDir)));
    });
}

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + "/" + file).isDirectory();
    });
}

module.exports = server;
