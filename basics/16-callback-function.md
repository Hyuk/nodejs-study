# Callback Function

```javascript
setTimeout(() => {
  console.log('Two seconds are up.')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
  return name.length <= 4
})

const geocode = (address, callback) => {
  const data = {
    latitude: 0,
    longitude: 0
  }
  return data
}

const data = geocode('Philadelphia')

console.log(data)

// { latitude: 0, longitude: 0 }
// Two seconds are up.
```

* 먼저 선행되어 있는 setTimeout 함수보다 geocode가 먼저 실행된다.
* getocode를 나중에 실행하기 위해서 geocode에 setTimeout함수를 넣어준다.

```javascript
setTimeout(() => {
  console.log('Two seconds are up.')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
  return name.length <= 4
})

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    return data
  }, 2000)
}

const data = geocode('Philadelphia')

console.log(data)

// undefined
// Two seconds are up.
```

* 이번에도 먼저 실행이된다.
* return data가 undefined되는 이유는 setTimeout 함수안에 있기 때문이다.
* 따라서 callback 패턴을 사용해서 data를 가져오도록 한다.

```javascript
setTimeout(() => {
  console.log('Two seconds are up.')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
  return name.length <= 4
})

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    callback(data)
  }, 2000)
}

geocode('Philadelphia', (data) => {
  console.log(data)
})


// Two seconds are up.
// { latitude: 0, longitude: 0 }
```

* Goal: Mess around with the callback pattern

1. Define an add function that accepts the correct arguments
2. Use setTimeout to simulate a 2 second delay
3. After 2 seconds are up, call the callback function with the sum
4. Test your work!

```javascript
const add = (a, b, callback) => {
  setTimeout(() => {
    sum = a + b
    callback(sum)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum)
})
```