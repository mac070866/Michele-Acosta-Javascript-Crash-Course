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
function welcomePersonToFES(name) {
    //console.log("Welcome to FES, David")
console.log(name)
}

// Call the function
welcomePersonToFES('Omair');
