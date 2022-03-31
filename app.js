const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");
//Create Add Command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption:true,
      type:'string',
    },
    body:{
      describe: "Note Body",
      demandOption:true,
      type:'string',
    }
  },
  handler: function (argv) {
    console.log("Title :" + argv.title)
    console.log("Body :"+ argv.body)
  },
});

//Create Remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log(chalk.blue.inverse("Removing Note!"));
  },
});

//Create List Command
yargs.command({
  command: "list",
  describe: "List All Notes",
  handler: function () {
    console.log(chalk.blue.inverse("All List Displayed!"));
  },
});

//Create Read Command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log(chalk.blue.inverse("Reading Note!"));
  },
});
yargs.parse();
// const fs=require('fs');
// const name=require('./utils');
// //fs.writeFileSync('notes.txt','This File was created by Node js!');
// console.log(name);
//fs.appendFileSync('notes.txt','This is appended Content :)');

//const validator=require('validator')
//console.log(validator.isURL('https://google.com'));
