// * This is an administrative file that lists other projects.

const fs = require("fs");
const express = require("express");
const dataDir = "./data/";

function server(app) {
    // Return a list of all projects.
    app.get("/", (req, res) => {
        res.send(JSON.stringify(getDirectories(dataDir)));
    });

    // Tries to get the server to brew coffee.
    app.get("/brew", (req, res) => {
        res.status(418).send({
            message: "I'm a teapot.",
            why: "Because.",
        });
    });
}

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + "/" + file).isDirectory();
    });
}

module.exports = server;
