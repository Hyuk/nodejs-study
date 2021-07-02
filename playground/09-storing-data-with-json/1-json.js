const fs = require('fs')

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
// {"title":"Ego is the Enemy","author":"Ryan Holiday"} // JSON String
console.log(bookJSON.title)
// undefined // it is JSON String not an object, so we can't access the title key

// In order to access title key
const parsedData = JSON.parse(bookJSON) // Convert JSON String to an JavaScript Object
console.log(parsedData.title)
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json') // read binary data of json file
const dataJSON = dataBuffer.toString() // convert the data into a standard string
const data = JSON.parse(dataJSON) // parse the json data into an object
console.log(data.title) // so that we can access the key