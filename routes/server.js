// * This is an administrative file that lists other projects.

const Filehound = require("filehound");
const dataDir = "../data/";

function server(app) {
    // Return a list of all projects.
    app.get("/", function (req, res) {
        Filehound.create()
            .path(dataDir)
            .directory()
            .find()
            .then((subdirectories) => {
                console.log(subdirectories);
            });
    });
}

module.exports = server;
