// const number = '12';
// let number1 = 20;
// if(number<10){
// console.log('Number is less than 10')
// } else {
// console.log('Number is greater than 10')
// }
// number1= 10;
// console.log('Number is 12')
// console.log("Number's is 12")
// console.log('Number is ' + number + ' compared to fixed number 10')
// console.log(2+3)
// console.log('$'+2+3)
// console.log(2+3+'$')
// console.log(2+(3+'$'))
// console.log(`Number is ${number} ${number1} compared to fixed number 10`)
// if(number === 12){
// console.log('Number is equal to 12')
// } else {
// console.log('Number is not 12')
// }
// const hello = 'Hello';
// const space = ' ';
// const space_two = ' ';
// const world = 'World';
// console.log(hello+spaceTwo+world)
// spaceTwo - Camelcase
// SpaceTwo - pascal case
// space-two - Kebab case
// space_two - snake case
// Global variables
//__dirname, __filename
//require, modules, process
// console.log(__dirname)
// console.log(__filename)
// Functions
// function printLine(num) {
// // console.log(`Executing in function ${num}`)
// const formatText = `Executing in fucntion ${num}`
// console.log(formatText)
// // return formatText
// }
// printLine(2);
// printLine(4);
// console.log(printLine(3));




// function printLine() {
// console.log('Executing in function')
// }
// printLine();


// const printLine = (num)=> {
// const formatText = 'Executing the function '+ num
// console.log(formatText)
// return formatText
// }
// console.log(printLine(1));
// const formatText = printLine(2);
// console.log(formatText);


// const sum = (a,b)=>{
// return a+b
// }
// console.log(sum(3,4));


// Objects
// const newItems = {
// name: 'tie',
// price: 1090
// }


// // console.log(newItems.name, newItems.price)
// console.log(newItems)
// newItems.name = 'Cotton tie'
// // console.log(newItems.name, newItems.price)
// console.log(newItems)
// newItems.qty = 10
// console.log(newItems)
// delete newItems.price
// console.log(newItems)


// const newItems = {
// name: 'tie',
// price: 1090,
// rating:{
// star:4.5,
// count:90
// },
// qty:10
// }
// console.log(newItems.rating.star)
// newItems.rating.star = 4.8
// console.log(newItems)


// const newItems = {
// name: 'tie',
// price: 1090,
// rating:{
// star:4.5,
// count:90
// },
// qty:10,
// fun: function function1(){
// console.log('Inside newItems Object')
// },
// fun1: ()=>{
// console.log('Inside newItems fun1')
// },
// fun2: ()=>console.log('Inside newItems fun2'),
// sum: (a,b)=> {
// c = a+b
// return {num1:a,num2:b,sum:c}
// }
// }


// newItems.fun();
// newItems.fun1();
// newItems.fun2();
// console.log(newItems.sum(1,2));


// objects are references


// const myNewItems = newItems;
// console.log(newItems, myNewItems)
// myNewItems.name = 'cotton tie'
// console.log(newItems, myNewItems)


// built in objects
// console.log
// Math.random
// console.log(typeof console)
// console.log(typeof console.log)
// JSON Objects
// {
// "name": "tie",
// "price": 1090,
// "rating":{
// "score": 4.5,
// "count":90
// }
// }


// JS object
// const newItems = {
// name: 'tie',
// price: 1090,
// rating : {
// stars : 4.5,
// count : 90
// },
// sum: (a,b)=> a+b
// }
// const itemJSON = JSON.stringify(newItems)
// console.log(newItems)
// console.log(itemJSON)
// const mynewItems = JSON.parse(itemJSON);
// console.log(mynewItems)


// Arrays
// const myArray = [10,20,30];
// console.log(myArray[0],myArray[1],myArray[2])
// console.log(myArray)
// const myArray1 = [10,'Jinu',{a:1,b:2},true]
// console.log(myArray1)
// myArray1[0]=99
// console.log(myArray1)
// console.log(typeof myArray)
// const myArray2 = myArray
// console.log(myArray2, myArray)
// myArray2[0]=50
// console.log(myArray2, myArray)


// console.log(myArray.length)
// console.log(myArray)
// myArray.push(40)
// myArray.push(50)
// console.log(myArray)
// myArray.pop()
// console.log(myArray)
// myArray.splice(0,1)
// console.log(myArray)
// myArray.reverse()
// console.log(myArray)


// const name = 'jinu'
// console.log(typeof name)
// console.log(name.length)


// Loops
// While loop
// let i = 1;
// while (i<5){
// console.log(i)
// i++
// }
//for loop
// for (let i=1;i<5;i++){
// console.log(i)
// }


// const myArray = [10,20,30,40]
// let sum=0;
// for (let i=0;i<myArray.length;i++){
// // sum = sum + myArray[i]
// sum += myArray[i]
// }
// console.log(sum)
// const doubleArray = [];
// for (let i=0;i<myArray.length;i++){
// doubleArray[i] = myArray[i]*2
// }
// console.log(doubleArray)
// let sum=0;
// myArray.forEach((shake)=>{
// sum += shake
// })
// myArray.forEach((item)=>sum += item)
// console.log(sum)


// const reverseDoubleArray = [];
// myArray.forEach((value,pos)=>{
// reverseDoubleArray[(myArray.length-1)-pos] = value * 2
// })
// console.log(reverseDoubleArray)


// MAP Array
//Output will be an array, will have the same number of occurances as input array
// const items = [
// {
// name : 'Jinu',
// age: 42,
// company: 'TCS',
// salary: 100
// },
// {name : 'Niranjan', age: 7, company: 'Naipunya',salary:20},
// {name : 'Neeraj',age: 7,company: 'Naipunya',salary:30}
// ]




// items.forEach((person)=>{
// console.log(person.age)
// })
// console.log(items[0].age,items[1].age,items[2].age)






// const ages = [];
// items.forEach((person,ind)=>{
// ages[ind]=person.age
// })
// console.log(ages)






// const ages = items.map((person1)=>{
// return person1.age
// })
// const ages = items.map((person1)=>{
// return person1.age>10
// })


// const ages = items.map((person1)=>{
// if (person1.age > 10){
// return person1
// }
// else {
// return false
// }
// })


// console.log(ages)


// const newItems = items.map((person)=>{
// // return person.age
// return {
// name1: person.name.toUpperCase(),
// age1: person.age+20
// }
// })


// Filter - Returns a new array, can manipulate size of array unlike map


// const newItems = items.map((person)=>{
// if(person.name === 'Jinu'){
// return person
// }
// })


// const newItems = items.filter((person)=>{
// if (person.age === 7 ){
// return person
// }
// })


// find - will provide first match only unlike filter


// const newItems = items.find((person)=>{
// if (person.age===7){
// return person
// }
// })


// Reduce - Iterates call back function and return single value: number, array, object
// Always have a return
// const totalAge = items.reduce((total,person)=>{
// total+=person.age
// return total
// },20)
// console.log(totalAge)


// const total = items.reduce((total1,person)=>{
// total1.ageTotal += person.age
// total1.salaryTotal += person.salary
// return total1
// },{
// ageTotal: 0,
// salaryTotal:0
// })


// console.log(total)


// Destructing


// const age = [42,7,7]
// const age1 = age[0]
// const age2 = age[1]
// const age3 = age[2]
// console.log(age1,age2,age3)


// const [ age1, age2, age3 ] = age
// console.log(age1,age2,age3)
// const [ age1, , age3 ] = age
// console.log(age1,age3)
// let newAge = []
// const age1E = age1 +20
// const age2E = age2 +20
// const age3E = age3 +20


// newAge = [age1E, age2E, age3E]
// console.log(newAge)


// let firstName = 'Jinu'
// let lastName = 'Babu'


// console.log(firstName, lastName);


// const name = [firstName,lastName]
// console.log(name)


// [lastName,firstName] = [firstName,lastName]
// console.log(firstName, lastName)


// Destructing objects - Uses property name unlike arrays


// const myDetails = {
// firstName : 'Jinu',
// lastName : ' Babu',
// age: 42,
// company: 'TCS',
// salary: 100,
// address: {
// state: 'kerala',
// district: 'kochi'
// }
// }




// const {firstName, lastName} = myDetails
// const {firstName:f1, lastName, address} = myDetails
// console.log(f1,lastName, address)


// let {firstName, address:{state}} = myDetails
// firstName = 'Ajith'
// myDetails.firstName = 'Ajith'
// console.log(firstName,state)
// console.log(myDetails)


// const age = [42,7,8,35]


// rest operator
// const [dad,...rest] = age
// console.log(rest)
// const [dad,...rest1]= rest
// console.log(rest1)
// const [dad,,...rest]= age
// console.log(rest)


// const getAverage = (name,...scores)=>{
// // console.log(name,scores)
// const average = scores.reduce((total,score1)=>{
// total += score1
// return total
// },0)/scores.length
// console.log(average)
// return average
// }
// console.log(getAverage('Jinu',10,20,30,40))
// getAverage('Jinu',10,20,30,40,50,60)




// Spread operator - splits into sinlge items and copy them
// const hello = 'hello'
// console.log([...hello])
// const gents = ['jinu','Neeraj','Niranjan']
// const ladies = ['prasee','asa']
// const father = 'babu'
// const family = [gents, ladies]
// console.log(family,family[0])


// const family = [...gents, ...ladies,father]
// console.log(family)


// const gent1 = gents
// console.log(gent1)
// console.log(gents)
// gent1.push('Hello')
// console.log(gent1)
// console.log(gents)


// const gent1 = [...gents]
// console.log(gent1)
// console.log(gents)
// gent1.push('Hello')
// console.log(gent1)
// console.log(gents)




// const myDetails = {
// firstName : 'Jinu',
// lastName : ' Babu',
// age: 42,
// company: 'TCS',
// salary: 100,
// address: {
// state: 'kerala',
// district: 'kochi'
// }
// }


// const {age, ...remaining} = myDetails
// console.log(age,remaining)












































// Callback functions
// console.log(new Date().getTime())
// setTimeout(()=>console.log('First statement',new Date().getTime()),1000) // x sec
// setTimeout(()=>console.log('Second statement',new Date().getTime()),3000) // x+3 sec
// setTimeout(()=>console.log('Third Statement',new Date().getTime()),5000) // y+2 sec
// Callback Hell
// const initialTime = 3000;
// setTimeout(()=>{
// console.log('First Statement')
// setTimeout(()=>{
// console.log('Second Statement inside first timeout')
// setTimeout(()=>{
// console.log('Third Stmt')
// },2000)
// console.log('Third timeout triggered')
// },3000)
// console.log('Second timeout triggered')
// },initialTime);


// setTimeout(()=>{
// console.log('Second Statement')
// },3000);


// setTimeout(()=>{
// console.log('Third Statement')
// },2000)


// Solve Call back hell - Promises introduced
// Promises have two way 1. then-catch 2. aysnc await

