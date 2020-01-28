# note-taker
https://notes-and-reminders.herokuapp.com/

## Description

A note taking application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* Application HTML routes:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `/` - Should return the `index.html` file

* The application has a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* Application API routes:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:note` - Should recieve a query paramter containing the id of a note to delete.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

![Note Taking Example](./Note-taker.gif)