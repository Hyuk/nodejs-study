# Printing in color

## Challenge: Use the chalk library in your project

  1. Install chalk module
  2. Load chalk into app.js
  3. Use it to print the string "Success!" to the console in green
  4. Test your work
  5. Use docs to mess around with other styles. Make text bold and inversed.

### Install chalk module
```bash
$ npm install chalk
```

### Load chalk into app.js
```javascript
const chalk = require('chalk')
```

### Use it to print the string "Success!" to the console in green
```javascript
const chalk = require('chalk')

console.log(chalk.green('Success!'))
```

### Test your work
```bash
$ node app.js
```

### Use docs to mess around with other styles. Make thext bold and inversed.
```bash
const chalk = require('chalk')

console.log(chalk.green.bold.inverse('Success!'))
```