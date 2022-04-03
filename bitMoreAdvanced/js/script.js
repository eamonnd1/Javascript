// const people = [
//     { name: 'Eamonn', age: 29, position: 'admin'},
//     { name: 'Aisling', age: 28, position: 'manager'},
//     { name: 'bob', age: 60, position: 'singer'}
// ]

// const names = people.map(function (person) {
//     return `<h1>${person.name}<h1>`
// })

// document.body.innerHTML = names.join('')

// console.log(names);
//////////////////////////////////////////////////////////
// const people = [
//     { name: 'Eamonn', age: 29, position: 'admin'},
//     { name: 'Aisling', age: 28, position: 'manager'},
//     { name: 'bob', age: 60, position: 'singer'}
// ]

// const youngPeople = people.filter(function (person) {
//     return person.age <= 30
// })
// const admin = people.filter(function (person) {
//     return person.position === 'admin'
// })

// console.log(youngPeople);
// console.log(admin);
//////////////////////////////////////////////////////////
// const people = [
//     { name: 'Eamonn', age: 29, position: 'admin', id: 1},
//     { name: 'Aisling', age: 28, position: 'manager', id: 2},    
//     { name: 'Arthur', age: 42, position: 'Unemployed', id: 3},
//     { name: 'bob', age: 60, position: 'singer', id: 3}
// ]

// const names = ['Eamonn', 'Aisling', 'John']

// const person = people.find(function (person) {
//     return person.id === 3
// })

// const person2 = people.filter(function (person) {
//     return person.id === 3
// })

// console.log(person.name);
// console.log(person2[1]);
// console.log(person2[1].name);
// console.log(names.find(function (name) {
//     return name === 'Eamonn'
// }))
//////////////////////////////////////////////////////////
// const people = [
//     { name: 'Eamonn', age: 29, position: 'admin', id: 1, salary: 1000000},
//     { name: 'Aisling', age: 28, position: 'manager', id: 2, salary: 20000},    
//     { name: 'Arthur', age: 42, position: 'Unemployed', id: 3, salary: 100},
//     { name: 'bob', age: 60, position: 'singer', id: 3, salary: 100000}
// ]

// const total = people.reduce(function (acc, currItem) {
//     totalsal = acc += currItem.salary
//     console.log(`Current money = ${currItem.salary}`);
//     console.log(`Total = ${totalsal}`)
//     return acc
// }, 0)
//////////////////////////////////////////////////////////
// document.body.style.backgroundColor = 'blue'
// document.body.style.color = 'yellow'
// const button = document.getElementById('btn')
// button.style.color = 'red'
//////////////////////////////////////////////////////////
// const headings = document.getElementsByTagName('h1')
// headings[0].style.color = 'red'

// const items = document.getElementsByTagName('li')
// const betterItems = [...items]
// items[0].style.color = 'green'

// betterItems.forEach(function (item) {
//     console.log(item);
// })

// console.log(items);
// console.log(betterItems);
//////////////////////////////////////////////////////////
// const result = document.querySelector('#result')
// result.style.color = 'blue'
// const lastItem = document.querySelector('li:last-child')
// lastItem.style.color = 'purple'
// const list = document.querySelectorAll('.special')

// list.forEach(function (item) {
//     console.log(item);
//     item.style.color = 'red'
// })
//////////////////////////////////////////////////////////