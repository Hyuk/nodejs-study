const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
  return 'Your notes...'
}

const addNote = function(title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note is now added!')
  } else {
    console.log('Note title taken!')
  }
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch(e) { // if there is no notes.json file
    return []
  }
}

const removeNote = function(title) {
  const notes = loadNotes()
  const notesToKeep = notes.filter(function(note){
    return note.title !== title
  })
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}