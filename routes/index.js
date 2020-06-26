// * Dynamically loads routes included in this folder.
// TODO: Possible rewrite with filehound?

var fs = require("fs");

function dynamicallyLoadRoutes(app) {
    fs.readdirSync(__dirname).forEach(function (file) {
        if (
            // Skip this file, and skip any files that aren't .js code
            file === "index.js" ||
            file.substr(file.lastIndexOf(".") + 1) !== "js"
        )
            return;

        var name = file.substr(0, file.indexOf("."));
        require("./" + name)(app); // Add routes file to CommonJS exports
    });
}

module.exports = dynamicallyLoadRoutes;
