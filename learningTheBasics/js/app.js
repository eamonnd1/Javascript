// names = ['Eamonn', 'Bob', 'Marley', 'Jack', 'Jill', 1, 2, 3]

// const sayHi = aName => console.log(`Hi ${aName}`)

// for (let step=0; step < names.length; step++) {
//     sayHi(names[step])
// }
/////////////////////////////////////////////////////////////////
// const person = {
//     firstName:'john',
//     lastName:'peters',
//     age:40,
//     education:false,
//     married:true,
//     siblings:['anna', 'susan', 'peter'],
//     greetings:function () {
//         console.log('hello my name is ' + this.firstName + ' ' + this.lastName)
//     }
// }

// person.greetings()
/////////////////////////////////////////////////////////////////
// const jax = 21
// const jim = 20

// if (jax > jim) {
//     console.log('Jax is older')
// } else if (jim > jax) {
//     console.log('jim is older')
// } else {
//     console.log('They are the same age')
// }
/////////////////////////////////////////////////////////////////
// let amount = 10;

// while (amount > 0) {
//     console.log(`I have ${amount} dollars`)
//     amount--
// }
/////////////////////////////////////////////////////////////////
// let money = 0

// do {
//     console.log(`you have ${money} dollars`)
//     money++
// }
// while(money < 10)
/////////////////////////////////////////////////////////////////
// const people = ['Eamonn', 'Aisling', 'Marley', 'Max', 'Milo']
// const surname = 'Delaney'
// let delaneys = []

// for (let i = 0; i < people.length; i++) {
//     const fullName = `${people[i]} ${surname}`
//     delaneys.push(fullName)
//     console.log(`${i + 1}: ${delaneys[i]}`)
// }
/////////////////////////////////////////////////////////////////
// const bills = [20, 30, 100, 30]

// const calcTotal = arr => {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     console.log(total)
// }

// calcTotal(bills)
/////////////////////////////////////////////////////////////////
// const morning = name1 => `Good Morning ${name1.toUpperCase()}`
// const afternoon = name1 => `Good Afternoon ${name1}`
// const greet = (name1, cb) => {
//     const myName = 'John'
//     console.log(`${cb(name1)}, my name is ${myName}`);
// }

// greet('Eamonn', morning)
// greet('Aisling', afternoon)
/////////////////////////////////////////////////////////////////
// const people = [
//     { name: 'Eamonn', age: 29, position: 'admin'},
//     { name: 'Aisling', age: 28, position: 'manager'},
//     { name: 'bob', age: 60, position: 'singer'}
// ]

// const showPerson = person => console.log(person);

// people.forEach(showPerson)
// people.forEach(function showPersonAge(person) { console.log(person.age)})
/////////////////////////////////////////////////////////////////
// const people = [
//     { name: 'Eamonn', age: 29, position: 'admin'},
//     { name: 'Aisling', age: 28, position: 'manager'},
//     { name: 'bob', age: 60, position: 'singer'}
// ]

// const ages = people.map(function (item) {return item.age})
// const newPeople = people.map(function (person) {
//     return {
//         firstName: person.name,
//         age: person.age,
//         position: person.position
//     }
// })
// console.log(ages); 
// console.log(newPeople);