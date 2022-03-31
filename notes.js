const chalk = require("chalk");
const fs = require("fs");
const getNotes = function () {
  return "Your Notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold("New Note Added! :)"));
  } 
  else 
  {
    console.log(chalk.red.bold("Note Title Taken Try Another :)"));
  }
};

function saveNotes(notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNote,
  getNotes,
};
