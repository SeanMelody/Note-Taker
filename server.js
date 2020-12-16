// Require Express
const express = require("express");
const app = express();
// Use port 5003, cause I'm crazy
const PORT = 5003;
// require the Api and client routes
const apiRoutes = require("./routes/apiRoutes");
const clientRoutes = require("./routes/clientRoutes");

// Required to make sure the html can be read
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//NEED THIS TO BE ABLE TO USE THE JS AND CSS!!!!
app.use(express.static("public"))

// Middleware for where the routes go and giving them variables
app.use("/api", apiRoutes);
app.use("/", clientRoutes);

// let the user know that the local host is working and at what port!
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));