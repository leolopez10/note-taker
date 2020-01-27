// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var notes = require("./db/db.json");

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

//=============================================================
// Routes for HTML
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "./public/index.html"));
});

//Display notes pages afte clicking get started button
app.get("/notes", function(request, response) {
    response.sendFile(path.join(__dirname, "./public/notes.html"))
})

//=============================================================
// Routes for API
// =============================================================


// Displays all notes
app.get("/api/notes", function(request, response) {
    return response.json(notes);
});


// Create New Notes - takes in JSON input
app.post("/api/notes", function(request, response) {
    // request.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var note = request.body;
    note.id = note.title.replace(/\s+/g, "").toLowerCase();

    // We then add the json the user sent to the character array
    notes.push(note);

    // We then display the JSON to the users
    response.json(note);
});

// Deletes selected note
app.delete("/api/notes/:id", function(request, response) {
    var chosen = request.params.note;

    console.log(chosen);

    for (var i = 0; i < notes.length; i++) {
        if (chosen === notes[i].id) {
            return response.json(notes[i]);
        }
    }

    return response.json(false);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening @ http://localhost:" + PORT);
});