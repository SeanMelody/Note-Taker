// Consts express and fs
const router = require("express").Router();
const fs = require("fs");

// Route Get Request to get the notes
router.get("/notes", (req, res) => {
    // Read the db.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        // Get those errors
        if (err) throw err;
        // pase that data!
        res.send(JSON.parse(data))
    })
})


// Router Post Request to post the new note written
router.post("/notes", (req, res) => {
    // fs read the db.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        // no errors allowed
        if (err) throw err;
        // set the new note to data to a variable
        const newNote = JSON.parse(data);
        // console.log(newNote)
        // push the new note to db.json file
        newNote.push({
            title: req.body.title,
            text: req.body.text,
        })

        // Write a new db.json file with the new note
        fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
            // thrownin at them errors
            if (err) throw err;
            // read the new db.json file
            fs.readFile("./db/db.json", "utf8", (err, data) => {
                // Thowing all them errors
                if (err) throw err;
                // send that Json Parsed Data
                res.send(JSON.parse(data))
            })
            // return the write Function
            return
        })
    })
});

// Router Delete Request to delete the selected note and return new list of notes
router.delete("/notes", (req, res) => {
    // fs read the db.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        // no errors allowed
        if (err) throw err;
        // Set the note that has been selected to be deleted to a vatiable
        const deleteThis = (req.body)
        // set all notes to a variable, and json parse
        const allNotes = JSON.parse(data);
        // For loop to loop through the notes!
        for (let i = 0; i < allNotes.length; i++) {
            // Select the note that is to be deleted
            if (allNotes[i].title === deleteThis.title) {
                // Splice that seleteced note out of the array of all notes
                allNotes.splice(i, 1)
                // Write the new file to the db.json file
                fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
                    // thrownin at them errors
                    if (err) throw err;
                    // read the new db.json file
                    fs.readFile("./db/db.json", "utf8", (err, data) => {
                        // Thowing all them errors
                        if (err) throw err;
                        // send that Json Parsed Data
                        res.send(JSON.parse(data))
                    })
                    // return the write Function
                    return
                })

            }
        } return
    })
})
// export so we can use all this data
module.exports = router;