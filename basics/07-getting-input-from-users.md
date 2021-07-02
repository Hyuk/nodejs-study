# Getting input from users

* app.js
```javascript
console.log(process.argv)
```

* run app.js
```bash
$ node app.js hi
```

* result
```javascript
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\hugo\\playground\\nodejs-study\\playground\\07-getting-input-from-users\\app.js',
//   'hi'
// ]
```

## To display only the user input updated app.js as below
* app.js
```javascript
console.log(process.argv[2])
```

* run app.js
```bash
$ node app.js hi
```

* result
```javascript
// hi
```

## To get the second argument

## Install yargs module
```bash
$ npm install yargs
```

* app.js
```javascript
const yargs = require('yargs')
```

## Difference between `process.argv` and `yargs.argv`
* app.js
```javascript
const yargs = require('yargs')

console.log(process.argv)
console.log(yargs.argv)
```

* run app.js
```bash
$ node app.js
```

* result
```javascript
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\hugo\\playground\\nodejs-study\\playground\\07-getting-input-from-users\\app.js'
// ]
// { _: [], '$0': 'app.js' }
```

* run app.js with command and the second argument
```bash
$ node app.js add --title="Things to buy"
```

* result
```javascript
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\hugo\\playground\\nodejs-study\\playground\\07-getting-input-from-users\\app.js',
//   'add',
//   '--title=Things to buy'
// ]
// { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
```

## --help & --version
* run app.js --help
```bash
$ node app.js --help
```

* result
```javascript
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\hugo\\playground\\nodejs-study\\playground\\07-getting-input-from-users\\app.js',
//   'add',
//   '--help'
// ]
// 옵션:
//   --help     도움말을 보여줍니다                                          [여부]
//   --version  버전 넘버를 보여줍니다                                       [여부]
```

* run app.js --version
```bash
$ node app.js --version
```

* result
```javascript
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\hugo\\playground\\nodejs-study\\playground\\07-getting-input-from-users\\app.js',
//   '--version'
// ]
// 1.0.0
```