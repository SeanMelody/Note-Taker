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


router.delete("/notes", (req, res) => {
    // fs read the db.json file
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        // no errors allowed
        if (err) throw err;
        // console.log(req.body)
        // console.log("line 57")

        const deleteThis = (req.body)
        // console.log(deleteThis)
        const allNotes = JSON.parse(data);
        // console.log(allNotes)

        for (let i = 0; i < allNotes.length; i++) {
            if (allNotes[i].title === deleteThis.title) {
                // console.log(deleteThis)
                //return res.json(allNotes[i]);
                allNotes.splice(i, 1)
                // console.log(allNotes)
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


        // var filtered = allNotes.filter(function (el) { return el.title != deleteThis; });
        // console.log(filtered)
        // title: req.body.title,
        //     text: req.body.text
        // const deleteTest = JSON.parse(data);
        // console.log(deleteTest)


        // Write a new db.json file with the new note
        // fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
        //     // thrownin at them errors
        //     if (err) throw err;
        //     // read the new db.json file
        //     fs.readFile("./db/db.json", "utf8", (err, data) => {
        //         // Thowing all them errors
        //         if (err) throw err;
        //         // send that Json Parsed Data
        //         res.send(JSON.parse(data))
        //     })
        //     // return the write Function
        //     return
    })
})
// });

// router.delete("/notes", (req, res) => {
//     console.log("delete Me")

// fs.unlink("./db/db.json", (err, data) => {

// })
// fs.readFile("./db/db.json", "utf8", (err, data) => {
//     if (err) throw err;
//     const allNotes = JSON.parse(data);
//     const search = req.params.routename;
//     console.log(search)
//     for (let i = 0; i < allNotes.length; i++) {
//         if (allNotes[i].routename === search) {
//             return res.json(allNotes[i]);
//         }
//     } return

// })

// fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
//     if (err) throw err;
//     fs.readFile("./db/db.json", "utf8", (err, data) => {
//         if (err) throw err;
//         res.send(JSON.parse(data))
//     })
//     return
// })
// })


module.exports = router;