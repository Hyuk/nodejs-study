// Challenge: Work with JSON and the file system

// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringfy the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const fs = require('fs')

const dataBuffer = fs.readFileSync('2-json.json')
// console.log(dataBuffer)
const dataJSON = dataBuffer.toString()
// console.log(dataJSON)
const data = JSON.parse(dataJSON)
// console.log(data)

data.name = 'Hyuk'

data.age = 38

const userJSON = JSON.stringify(data)
fs.writeFileSync('2-json.json', userJSON)