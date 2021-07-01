# Using custom module

* app.js를 다음과 같이 만든다.
```javascript
const name = 'Hyuk'

console.log(name)
```

* utils.js 를 다음과 같이 만든다.
```javascript
console.log('utils.js')
```

* 이 상태에서 `$ node app.js` 실행하면, `Hyuk`만 출력된다.

* `utils.js`도 출력하려면 `app.js`를 다음과 같이 변경한다.

* app.js
```javascript
require('./utils.js')

const name = 'Hyuk'

console.log(name)
```

* utils.js
```javascript
console.log('utils.js')
```

* 이 상태에서 `$ node app.js` 실행하 다음과 같이 출력된다.
```javascript
// utils.js
// Hyuk
```

## 변수 공유하기
* 이번에는 app.js에서 name 변수를 지우고 utils.js에 name변수를 정의한 다음 실행시켜 보자

* app.js
```javascript
require('./utils.js')

console.log(name)
```

* utils.js
```javascript
console.log('index.js')

name = 'Hyuk'
```

* 이 상태에서 `$ node app.js` 실행하면 오류가 난다. 변수에는 스코프가 있어서 공유를 해주지 않는다면 변수명이 같다고 할지라도 전혀 다른 변수가 된다.

* 따라서 app.js와 utils.js 파일을 다음과 같이 업데이트 해준다.

* app.js
```javascript
const firstname = require('./utils.js')

console.log(firstname)
```

* utils.js
```javascript
console.log('utils.js')

name = 'Hyuk'

module.exports = name
```

* 이 상태에서 `$ node app.js`를 실행하면 다음과 같이 출력이된다.
```javascript
// utils.js
// Hyuk
```

## 함수 공유하기
* 함수를 공유하기 위해서 app.js와 utils.js를 다음과 같이 업데이트 한다.

* app.js
```javascript
const add = require('./index.js')

const sum = add(-4, 2)

console.log(sum)
```

* utils.js
```javascript
console.log('utils.js')

const add = function(a,b) {
  return a + b
}

module.exports = add
```

* 이 상태에서 `$ node app.js`를 실행하면 다음과 같이 출력이된다.
```javascript
// utils.js
// -2
```


## Challenge: Define and use a function in a new file
 
 1. Create a new file called notes.js
 2. Create getNotes function that returns "Your notes..."
 3. Export getNotes function
 4. From app.js, load in and call the function printing message to console

* app.js
```javascript
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)
```

* notes.js
```javascript
const getNotes = function() {
  return 'Your notes...'
}

module.exports = getNotes
```

* 이 상태에서 `$ node app.js`를 실행하면 다음과 같이 출력이된다.
```javascript
// Your notes...
```