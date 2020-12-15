const router = require("express").Router();
const fs = require("fs");


// router.get("/notes", (req, res) => {

// })

// router.get("/api/notes", (req, res) => {
//     fs.readFile("../db/db.json", "utf8", (err, data) => {
//         if (err) throw err;
//         // res.json(JSON.parse(data));
//         console.log(data)
//     });
// });

router.get("/notes", (req, res) => {

    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data))
    })
})




router.post("/notes", (req, res) => {
    // console.log(req.body)
    // res.send("notestest working")
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        // res.json(JSON.parse(data));
        const newNote = JSON.parse(data);

        newNote.push({
            title: req.body.title,
            text: req.body.text,
        })

        // console.log(noteTest)
        fs.writeFile("./db/db.json", JSON.stringify(noteTest), (err) => {
            if (err) throw err;
            return
            // res.json({ msg: "successfully added" })
        })
    })
});

module.exports = router;