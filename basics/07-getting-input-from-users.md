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

* To display only the user input updated app.js as below
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


