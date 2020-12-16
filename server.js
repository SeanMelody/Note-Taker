// Require Express
const express = require("express");
const app = express();
// Use port 5003, cause I'm crazy
const PORT = 5003;
// require the Api and client routes
const apiRoutes = require("./routes/apiRoutes");
const clientRoutes = require("./routes/clientRoutes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

app.use("/api", apiRoutes);
app.use("/", clientRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));