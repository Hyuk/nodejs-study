const request = require('postman-request')
const {forecastKey} = require('../keys/keys')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=' + forecastKey + '&query='+ latitude + ',' + longitude
  // 화씨: &units=f 
  request({url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ". 현재 온도는 섭씨 " + body.current.temperature + "도 입니다. 강수 확률은 " + body.current.precip + "% 입니다.")
    }
  })
}

module.exports = forecast