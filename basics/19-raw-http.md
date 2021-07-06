# http request - 내장 모듈

* url이 http이면 http를 사용하고
* url이 https이면 https를 사용한다.

```javascript
const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=a5c25ccf3907d0de2808603911ca5cbc&query=40,-75&units=f'

const request = http.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    dataJSON = JSON.parse(data)
    console.log(dataJSON.location)
  })

})

request.on('error', (error) =>  {
  console.log('An error', error)
})

request.end()
```