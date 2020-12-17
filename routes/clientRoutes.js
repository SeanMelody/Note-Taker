// Const for the express router.router
const router = require("express").Router();
// Gotta require the path
const path = require("path");

// Set the client side route to / the Index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Set the client side route to the /notes notes.html!
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// export so we can use all this data
module.exports = router;