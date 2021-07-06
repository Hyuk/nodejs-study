const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(process.argv)
address = process.argv[2]

if (!address) {
  console.log('Please provide an address')
} else {
  geocode(address, (error, {longitude, latitude, location} = {}) => {
    if (error) {
      return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log('지역:', location, '위도:', latitude, '경도:', longitude)
      console.log(forecastData)
    })
  })
}



