const express = require("express");
const app = express();
const port = 80;

// TODO: Add project-related sub-readmes for API documentation
// TODO: Add universal logging for various routes and transfer

// Enable JSON POST requests
app.use(express.json());

// Dynamically load all routes from all project folders
require("./routes")(app);

// Server configuration
app.listen(port, () => {
    console.log(`Server is now listening at http://localhost:${port}`);
});
