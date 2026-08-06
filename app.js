console.log('hello world')
console.log('Frontend Simplified is amazing')
console.log('100')
console.log('Hello, ' + 'David')
console.log('David'[0])
console.log('hello World'[10])
console.log(''.length)
console.log('12345'.length)
// let str = 'David'
// console.log(str[str.length - 1])
console.log('123')

let name = 'Michele'
let fullName = 'Michele Acosta'

let isRaining = true
let temperature = 30
let planet = 'Earth'

temperature = temperature + 2

console.log(temperature)


/*
*Converting Temperatures
*
*Celsius-to-Fahrenheit formula:
*
*   F = C x 1.8 + 32
*/

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;


let bool = !true

console.log(bool)



let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log ('show the video')
}
else if (loggedIn === true) {
    console.log('tell the user to upgrade their subscription')
}
else {
    console.log('tell user to log into account')
}



let cash = 30
let price = 40

if (cash > price) {
    console.log("you paid extra - here's your change")
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}
else {
    console.log("not enough money - you still owe x dollars")
}


let val ="";

if (val) {
    console.log("truthy value", !!val)
}
else {
    console.log("falsy value", !!val)
}



let hot = false
hot ? console.log('weather is hot outside') : console.log('weather is cold')


// DRY = Don't repeat yourself
let count = 1;


while (count <= 100) {
    console.log (count)
    count = count +1;
}


// DRY = Don't repeat youself
// let count = 1;

// while (count <= 100) {
//    console.log(count)
// }

for (let i = 0; i < 100; i++) {
    console.log(i + 1);
}


/** Write a for-loop that loops through 1 to 20
* If the number is divisible by 3, print “Frontend”
* If the number is divisible by 5, print “Simplified”
* If the number is divisible by 3 and 5, print “Frontend Simplified”
* If the number is *not* divisible by either 3 or 5, print the number
*
* @example
* 1 -> 1
* 2 -> 2
* 3 -> “Frontend”
* 4 -> 4
* 5 -> “Simplified”
* …
* 15 ->  “Frontend Simplified”
* …
* 20 -> “Simplified”
*/
for (let i = 1; i <=20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`)
 }
else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`)
}
else if (i % 5 === 0){
    console.log(`${i} -> Simplified`)
}
else {
    console.log(`${i} -> ${i}`)
}
}


/** Print out every character from the string:
 * "Frontend Simplified"
 * 
 * @example
 * 'F'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
 */
{
    const str = "Frontend Simplified"

// for (let i = 0; i < str.length; ++i) {
//     console.log(str[i])
// }
}

const str = "Andrew"

for (let i = 0; i < str.length; ++i) {
    console.log(str[i])
}



//DRY - Don't Repeat Yourself

//Function definition
// function welcomePersonToFES(firstName, lastName) {
//     console.log(`Welcome to FES, ${firstName} ${lastName}`)
// }

// // Call the function
// welcomePersonToFES('Michele', 'Acosta')
// welcomePersonToFES('Aaron');
// welcomePersonToFES('Omair');
// welcomePersonToFES('Andrew');
// welcomePersonToFES('Frank');
// welcomePersonToFES('Nathalie');
// welcomePersonToFES('Hristina');
// welcomePersonToFES('Khosro');
// welcomePersonToFES('Rose');


// function fn() {
//     return 5
//     console.log('my function')
// }

// console.log(5);



// function sumOfTwoNumbers() {
//     return 5 + 10
// }

// console.log(sumOfTwoNumbers());



// function sumOfTwoNumbers() {
//     return 5 + 10
// }

// console.log(sumOfTwoNumbers(10, 10));



// function sumOfTwoNumbers(num1, num2) {
//      return num1 + num2
// }

// console.log(sumOfTwoNumbers(10, 20));



// function sumOfTwoNumbers(num1, num2) {
//      return num1 / num2
// }

// console.log(sumOfTwoNumbers(10, 20));



// /**Create a function that converts Celsius to Fahrenheit
//  * 
//  * Celsius to Fahrenheit formula:
//  * F = C x 1.8 + 32
//  * 
//  * 
//  * @example
//  * convertCelsiusToFahrenheit(0) -> 32
//  * convertCelsiusToFahrenheit(0) -> 50
//  * convertCelsiusToFahrenheit(0) -> 86
//  */


// function convertCelsiusToFahrenheit(celsius) {
//     let fahrenheit = celcius * 1.8 + 32
//     return fahrenheit
// }

// console.log(convertCelsiusToFahrenheit(0))

// /** this one below is better version and 
//  * should use thn the one right above getting 
//  * same answer that is cleaner
//  */    

// function convertCelsiusToFahrenheit(celsius) {
//     return celsius * 1.8 + 32 
// }

// console.log(convertCelsiusToFahrenheit(0))
// console.log(convertCelsiusToFahrenheit(10))
// console.log(convertCelsiusToFahrenheit(30))


// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32

// 

// console.log(convertCelsiusToFahrenheit(0))

// Arrays below
// let arr = [20, 30, 40, 50, 100]

// {// First element of array:
// console.log(arr[0])

// // Last element of array:
// console.log(arr[arr.length - 1])

// //Add element onto end of array:
// arr.push(200)}

//TITLE THIS [20, 30, 40] SHORT VERSION BELOW
// let newArr = arr.filter (element => element >= 50)

// console.log(newArr)

/**
 * Filter out all the 'FAIL' ELEMENTS IN AN ARRAY
 * 
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

// let grades = ['A+', 'A', 'FAIL']

//LONG VERSION BELOW
// let goodGrades = grades.filter((element) => {
//     console.log(element)
//     if (element !== 'FAIL') {
//         return true;
//     }
// })

//SHORT VERSION BELOW
// let goodGrades = grades.filter(element => element !== 'FAIL')

// console.log(goodGrades)


// for (let i = 0; i < grades.length; ++i) {
//     console.log(grades[i]);
// }

/**
//  * Filter out all the 'FAIL' ELEMENTS IN AN ARRAY
//  * WITHOUT USING THE ARRAY.FILTER METHOD
//  * 
//  * @examples
//  * ['A+', 'A', 'FAIL'] => ['A+', 'A']
//  * ['FAIL', 'FAIL', 'B'] => ['B']
//  * ['FAIL'] => []
//  */

// let grades = ['A+', 'A', 'FAIL']

// // CREATE A NEW EMPLY ARRAY CALLED 'goodGrades'
// let goodGrades = []

//add the current element onto ‘goodGrades’ only if
    //the current element is not equal to ‘Fail’
        
// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i]);
//     }

//     //console log ‘goodGrades’
//     console.log(goodGrades);
// }


// let arr = [1, 4, 9, 16]

// let newArray = arr.map(element =>  'dog')

// console.log(newArray)

// /**
//  * Turn each element in an array of dollars into cents
//  * 
//  * @examples
//  * [1, 5, 10, 3] => [100, 500, 1000, 300]
//  * [0, 10, 20] => [0, 1000, 2000]
//  */

// let dollars = [1, 5, 10, 3];

// let cents = dollars.map(element => element * 100)

// console.log(cents)


// /**
//  * Turn each element in an array of dollars into cents
//  * without using the map method (use for loop)
//  * 
//  * @examples
//  * [1, 5, 10, 3] => [100, 500, 1000, 300]
//  * [0, 10, 20] => [0, 1000, 2000]
//  */

// let dollars = [1, 5, 10, 3];

// // create new 'cents' array
// let cents = [];


// // loop over every element in ‘dollars’
// for (let i = 0; i < dollars.length; ++i)  {
// cents.push(dollars[i] * 100);
// }

// // console log cents
// console.log(cents);



// let userFirstName = 'David'
// let userLastName = 'Bragg'
// let userDiscordId = 'David Bragg'
// let userSubscriptionStatus = 'VIP'


let users = [
{    
    username:  'David',
    email: 'david@frontendsimplified.com',
    password: 'test123',
    subcriptionStatus:  'VIP',
    discordId:  'David Bragg#0001',
    lessonsCompleted: [0, 1],
},
{
},
{   
},
];

// function login(email, password) { 
// for (let i = 0; i < users.length; ++i) {
//     console.log('this ran@@@')
//     if (users[i].email === email) {
//     console.log(users[i]);
//     if (users[i].password === password) {
//         console.log('log the user in - the details are correct')
//     }
//     else {
//         console.log('password is incorrect - try again')
//     }
//     return;
// }
// }
// console.log ('could not find an email that matches')
// }

// login('this does not exist@frontendsimplified.com', 'wrong password');


/**
 * Create a register function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 * 
 * Inside your register function:
 * 1. create a user object
 * 2. push this user object onto the 'users' array
 * /


  function register(
  username,
  email,
  password,
  subscriptionStatus,
  discordId,
  lessonsCompleted
) {
  console.log(email, password);
  }
  
  register(
  "zen",
  "zen@frontendsimplified.com",
   "zen123",
   "VIP",
   "Zen#0001",
   [0, 1]
);
