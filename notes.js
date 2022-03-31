const chalk = require("chalk");
const fs = require("fs");

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen("Note removed!!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed("Note not found!!"));
  }
};
const listNotes=()=>{
    const notes = loadNotes();
    console.log(chalk.bold.green.inverse("YOUR LIST"));
    notes.forEach(element => {
        console.log(element.title);
    });
}
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold("New Note Added! :)"));
  } else {
    console.log(chalk.red.bold("Note Title Taken Try Another :)"));
  }
};

saveNotes =(notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const readNote=(title)=>{
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.green.bold(`${note.title} `)+`=> ${note.body}` );
  } else {
    console.log(chalk.red.bold(`Note ${title} Not Found`));
  }
}
module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
