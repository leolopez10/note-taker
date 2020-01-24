// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var mysql = require("mysql");
var path = require("path");

// =============================================================
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Grabbing html files
app.use(express.static('public'));

// Notes (DATA)
// =============================================================
var notes = [{}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Displays all characters
app.get("/api/notes", function(req, res) {
    return res.json(notes);
});

// Displays a single character, or returns false
app.get("/api/notes/:notes", function(req, res) {
    var chosen = req.params.note;

    console.log(chosen);

    for (var i = 0; i < notes.length; i++) {
        if (chosen === notes[i].routeName) {
            return res.json(notes[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;

    console.log(newNote);

    // We then add the json the user sent to the character array
    characters.push(newNote);

    // We then display the JSON to the users
    res.json(newNote);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});