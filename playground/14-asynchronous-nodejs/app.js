console.log('Starting')

setTimeout(() => {
  console.log('2 Second Timer')
}, 2000)

console.log('Stopping')

// Starting
// Stopping
// 2 Second Timer

console.log('Starting')

setTimeout(() => {
  console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
  console.log('0 Second Timer')
}, 0)

console.log('Stopping')

// Starting
// Stopping
// 0 Second Timer
// 2 Second Timer