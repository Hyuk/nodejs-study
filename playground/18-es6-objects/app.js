// Object property shorthand

const name = "Hyuk"

const userAge = 38

const user = {
  name,
  age: userAge,
  location: 'Philadelphia'
}

console.log(user)

// Object destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201, 
  salePrice: undefined
}

const {label, stock} = product

console.log(label)
console.log(stock)

// Object destructuring with Renaming
// const car = {
//   clabel: 'Carnival',
//   cprice: '5000',
//   cstock: '5',
//   csalePrice: '4500'
// }

// const {clabel:carlabel, cprice} = car

// console.log(carlabel)
// console.log(cprice)

// Object destructuring with assigning a new value
// const camera = {
//   calabel: 'canon',
//   caprice: '200',
//   castock: '3',
//   casalePrice: '150'
// }

// const {calabel, caprice, capixel = 5000} = camera

// console.log(calabel)
// console.log(caprice)
// console.log(capixel)

const transaction = (type, {label, stock}) => {
  console.log(type, label, stock)
}

transaction('order', product)