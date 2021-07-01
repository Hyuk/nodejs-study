# 파일 읽고 쓰기 모듈 사용하는 방법 (fs module)

* fs 모듈은 nodejs 내장 모듈이다. 따로 설치할 필요 없다.

## writeFileSync: 파일 쓰기
```javascript
const fs = require('fs')

fs.writeFileSync('notes.txt', 'I live in Philadelphia')

// notes.txt
// I live in Philadelphia
```

## appendFileSync: 파일 끝에 텍스트 추가하기
```javascript
const fs = require('fs')

fs.writeFileSync('notes.txt', 'I live in Philadelphia')
fs.appendFileSync('notes.txt','\nI have been to Seoul last year.')

// notes.txt
// I live in Philadelphia
// I have been to Seoul last year.
```