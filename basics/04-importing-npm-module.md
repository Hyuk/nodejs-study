# Importing npm module

* 노드 버전 확인하기
```bash
$ node -v
```

* npm 버전 확인하기
```bash
$ npm -v
```

* npm 초기화
```bash
$ npm init
```

* npm 초기화 with Default value
```bash
$ npm init -y
```

* package.json file 이 자동 생성된다.
```json
{
  "name": "04-importing-npm-module",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

* validator 를 설치한다.
```bash
$ npm install validator
```

* package-lock.json 파일이 생성된다.
```javascript
{
  "name": "04-importing-npm-module",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "validator": "^13.6.0"
      }
    },
    "node_modules/validator": {
      "version": "13.6.0",
      "resolved": "https://registry.npmjs.org/validator/-/validator-13.6.0.tgz",
      "integrity": "sha512-gVgKbdbHgtxpRyR8K0O6oFZPhhB5tT1jeEHZR0Znr9Svg03U0+r9DXWMrnRAB+HtCStDQKlaIZm42tVsVjqtjg==",
      "engines": {
        "node": ">= 0.10"
      }
    }
  },
  "dependencies": {
    "validator": {
      "version": "13.6.0",
      "resolved": "https://registry.npmjs.org/validator/-/validator-13.6.0.tgz",
      "integrity": "sha512-gVgKbdbHgtxpRyR8K0O6oFZPhhB5tT1jeEHZR0Znr9Svg03U0+r9DXWMrnRAB+HtCStDQKlaIZm42tVsVjqtjg=="
    }
  }
}
```

* package.json 파일이 업데이트 된다.
```javascript
{
  "name": "04-importing-npm-module",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "validator": "^13.6.0"
  }
}

```

* app.js를 다음과 같이 업데이트 한다.
```javascript
const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('bitcoin@gmail.com'))
console.log(validator.isEmail('gmail.com'))

console.log(validator.isURL('http/google'))
console.log(validator.isURL('https://google.com'))
```

* result
```javascript
// Your notes...
// true
// false
// true
```