const yargs = require('yargs')
const notes = require('./notes.js')

// add, remove, read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // When it is true, this arguments is mandatory
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true, // Default value is false
      type: 'string'
    }
  },
  handler(argv) {
    // console.log('Title: ', argv.title)
    // console.log('Body: ', argv.body)
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler() {
    notes.listNotes()
  }
})

yargs.parse()
// console.log(yargs.argv)