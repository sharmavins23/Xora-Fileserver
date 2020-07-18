const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 80;

// TODO: Add project-related sub-readmes for API documentation

// Enable JSON POST requests
app.use(express.json());
// Enable console logging of HTTP requests
app.use(morgan("dev"));

// Dynamically load all routes from all project folders
require("./routes")(app);

// Server configuration
app.listen(port, () => {
    console.log(`Server is now listening at http://localhost:${port}`);
});
