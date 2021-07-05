# Arrow function

* Arrow function은 일반 함수 형태에서 다음과 같이 빌드업한다.
```javascript
const square = function (x) {
  return x * x
}

const square = (x) => {
  return x * x
}

const square = (x) => x * x

console.log(square(3))
```

## Arrow function을 사용해도 되는 경우와 사용하면 안되는 경우
```javascript
const event = {
  name: 'Birthday Party',
  printGuestList: function() {
    console.log('Guest list for ' + this.name)
  }
}

event.printGuestList()
// 일반 함수 형태를 사용하면 다음과 같이 결과를 잘 출력한다.
// Guest list for Birthday Party
```

* printGuestList의 함수를 Arrow function으로 변경하면,
```javascript
const event = {
  name: 'Birthday Party',
  printGuestList: () => {
    console.log('Guest list for ' + this.name)
  }
}

event.printGuestList()
// Guest list for undefined
// Arrow function으로 변경하면 위와 같이 this.name에 접근이 불가해서 undefined로 출력이 된다.
```

* 위와 같은 경우는 다음과 같이 변경하면 this.name에 접근이 가능하게된다.
```javascript
const event = {
  name: 'Birthday Party',
  printGuestList() {
    console.log('Guest list for ' + this.name)
  }
}

event.printGuestList()

// Guest list for Birthday Party
```

* 이번에는 게스트 이름 리스트를 만들고 printGuestList 함수내에서 forEach를 사용해서 각각의 게스트가 참석하는지 여부를 출력해본다.
```javascript
const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for ' + this.name)
    this.guestList.forEach(function(guest) {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.printGuestList()

// Guest list for Birthday Party
// Andrew is attending undefined
// Jen is attending undefined
// Mike is attending undefined

// 메소드 내에서 forEach를 사용할 때 일반함수 형태로 사용하면 this.name에 접근하지 못해서 undefined를 출력하는 것을 확인할 수 있습니다.
```

* 위와 같은 경우 Arrow Function을 사용해서 접근이 가능하도록 변경할 수 있습니다.
```javascript
const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for ' + this.name)
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.printGuestList()

// Guest list for Birthday Party
// Andrew is attending Birthday Party
// Jen is attending Birthday Party
// Mike is attending Birthday Party

// 정상적으로 this.name에 접근하여 제대로 출력하는 것을 확인할 수 있습니다.
```


* Goal: Create method to get incomplete tasks

1. Define getTasksTodo method
2. Use filter to return just the incompleted tasks (arrow function)
3. Test your work by running the script

```javascript
const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, {
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],
  getTasksTodo() {
    const tasksToDo = this.tasks.filter((task) => {
      return task.completed === false
    })
    return tasksToDo
  }
}

console.log(tasks.getTasksTodo())
```
* Arrow function을 사용해서 나타내면,
```javascript
const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, {
    text: 'Clean yard',
    completed: false
  }, {
    text: 'Film course',
    completed: false
  }],
  getTasksTodo() {
    return this.tasks.filter((task) => task.completed === false)
  }
}

console.log(tasks.getTasksTodo())
```
