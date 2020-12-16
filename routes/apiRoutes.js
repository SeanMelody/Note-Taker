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
    // getNotes()
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
        fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
            if (err) throw err;
            fs.readFile("./db/db.json", "utf8", (err, data) => {
                if (err) throw err;
                res.send(JSON.parse(data))
            })
            return

            // res.json({ msg: "successfully added" })
        })
    })
});

// Post a past written note to the screen

// router.get("/notes:routename", (req, res) => {
//     fs.readFile("./db/db.json", "utf8", (err, data) => {
//         if (err) throw err;
//         const allNotes = JSON.parse(data);
//         const search = req.params.routename;
//         console.log(search)
//         for (let i = 0; i < allNotes.length; i++) {
//             if (allNotes[i] === search) {
//                 console.log(allNotes[i])
//                 // return res.json(allNotes[i]);
//                 // console.log(res.json(allNotes[i]));
//             }
//         }
//         // return res.json({
//         //     msg: "the character you are searching for does not exist",
//         //     error: `attempted route: ${req.params.routename}`,
//         // });
//     });
// });


router.delete("/notes", (req, res) => {
    console.log("delete Me")
    fs.unlink("./db/db.json", (err, data) => {

    })
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

    fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            res.send(JSON.parse(data))
        })
        return
    })
})

//Unlink

module.exports = router;