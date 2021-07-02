const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('bitcoin@gmail.com'))
console.log(validator.isEmail('gmail.com'))

console.log(validator.isURL('http/google'))
console.log(validator.isURL('https://google.com'))
