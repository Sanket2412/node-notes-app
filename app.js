const chalk= require('chalk');
const getNotes= require('./notes');

console.log(getNotes());
console.log(chalk.green('Success!!!!'));




// const fs=require('fs');
// const name=require('./utils');
// //fs.writeFileSync('notes.txt','This File was created by Node js!');
// console.log(name);
//fs.appendFileSync('notes.txt','This is appended Content :)');

//const validator=require('validator')
//console.log(validator.isURL('https://google.com'));