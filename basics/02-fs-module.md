# 파일 읽고 쓰기 모듈 사용하는 방법 (fs module)

* fs 모듈은 nodejs 내장 모듈이다. 따로 설치할 필요 없다.
```javascript
const fs = require('fs')

fs.writeFileSync('notes.txt', 'I live in Philadelphia')
```