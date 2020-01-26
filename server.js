// =============================================================
// Dependencies
// =============================================================
var express = require("express");
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
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "./public/index.html"));
});

//Display notes pages afte clicking get started button
app.get("/notes", function(request, response) {
    response.sendFile(path.join(__dirname, "./public/notes.html"))
})

// Displays all notes
app.get("/api/notes", function(request, response) {
    return response.json(notes);
});

// Displays a single character, or returns false
app.get("/api/notes/:notes", function(request, response) {
    var chosen = request.params.note;

    console.log(chosen);

    for (var i = 0; i < notes.length; i++) {
        if (chosen === notes[i].routeName) {
            return response.json(notes[i]);
        }
    }

    return response.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(request, response) {
    // request.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = request.body;

    console.log(newNote);

    // We then add the json the user sent to the character array
    characters.push(newNote);

    // We then display the JSON to the users
    response.json(newNote);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening @ http://localhost:" + PORT);
});