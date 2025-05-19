// basic syntax
// let name = "harmony";
// const lastName = "kunu";
// var job = "web developer"

// Data Types 
// String
let Name = 'harmony';
let Email = "harmony2uj@.com"

const greeting = "Hello World";
console.log(greeting);
console.log(typeof greeting);



// Number
let age = 44;
let price = 300;
console.log(age);
console.log(price);
console.log(typeof age);
console.log(typeof price);



// Boolean
const isStudent = true;
const notStudent = false;

console.log(isStudent);
console.log(notStudent);


// Array
const fruits = ['orange', 'banana', 'apple']
const fruitsAndNumber = ['orange', 56,  'banana', 999, true, 'apple', ' my name is harmony']
console.log(fruits);
console.log(fruitsAndNumber);
console.log(typeof fruitsAndNumber);
console.log(typeof fruits);

// Object

const HarmonyDetails = {
    name: "harmony",
    age: 33,
    job: "web developer",
    study: "engineering"
}
console.log(HarmonyDetails);
console.log(HarmonyDetails.study);
console.log(typeof  HarmonyDetails);


// Undefined 
let noNumber 
console.log(noNumber);

console.log(typeof noNumber);

// Null
const empty = null;
console.log(empty);
console.log(typeof empty);

// function 
function sayHello () {
    console.log("hello my name is harmony");
   
}

sayHello();


// ---- TypeOf Exmaples 

console.log("Hello is a", typeof "Hello");
console.log("123 is a", typeof 123);
console.log("True is a", typeof true);
console.log("True is a", typeof true, "false is a", typeof false);


// Operators 

// Types of Operators


console.log(5 + 7); 
console.log(5 - 2 );
console.log(99 * 72);
console.log(144 / 12);
console.log(1005 % 2);
console.log(8 ** 3);


//2. Assignment 
let x = 15;
x += 10  // = 15 + 10 // +=   ---> a + b
console.log(x);

// let y = 25 
// y  -= 12
// console.log(y);

// method 2

let a = 15;
let b = 10;

console.log(a + b);


// 3.

// console.log(5 == "5");  // --> 5 == 5 true
// console.log(5 === "5"); // --> 5 =/= "5" false
// console.log(5 != "5");  // false 
// console.log(5 !== "5");


// console.log(5 > 10);
// console.log(5 < 10);

// console.log(10 >= 10);
// console.log(5 <= 10);


//  4. Logical 
console.log( true && false);

console.log(true || false);

console.log(!true);


const OldAge = 78;


const markAge = 21;
const JohnAge = 17;


console.log("Old age to drive is 21 so make is old to drive  at 21",
"but if is lesser  than  21", markAge <  OldAge,   "then he can not drive" && "global age to drive is 21 so John is old to drive  at 21", 
"but if is lesser  than 21 ", JohnAge <  OldAge,   "then he can not drive" ) ;


// 5 Trinary 

const personOneAge = 20;

const statusCheck = personOneAge  <= 18 ?  "adult" : "minor";
console.log(statusCheck);


// Type of 
// -- done that 


// 7. String 
let firstNames = 'harmony';
let lastName = 'Timenyin';
let myAge = 55
console.log("my first name is ",  firstNames, " ", "and my last name is ", lastName, "and  my age is ", myAge);


// 8. increment / decrement 
let count = 5 
count++   // = count + 1 = 6

console.log(count);


// decrement 
let num = 10;
 --num
 console.log(num);


//  9. precedence



// conditionals Statement 

const SchoolAge = 18;

// if ( SchoolAge  < 23) {
//     console.log( "can't go to law school");
// }

if ( SchoolAge  <  40) {

    console.log( "can go to law school"); 

} else {

    console.log( "can't go to law school"); 

}


// const  JohnNumberOfCar = 2;
// const richPeople = 1

// if(JohnNumberOfCar <=  richPeople) {
//     console.log( 'am not rich');
// }else {
//     console.log(' John is  rich');
// }


const JohnAmount = 20000;
const EmmaAmount = 20000;

const SchoolFees = 45000;


if (JohnAmount >= SchoolFees) {
    console.log("he can come to class" );
}else if (EmmaAmount >= SchoolFees) {
    console.log("she can com to class");
}else {
    console.log("Nobody should come to class");
}


// Ternary Operator
// const temperature = 25;
// const weather = temperature > 30 ? "Hot" : "Pleasant";
// console.log(weather); // "Pleasant"


const  JohnNumberOfCar = 7;

// const richPeople = 5;

// if ( JohnNumberOfCar > richPeople) {
//      console.log("am rich");
// }else {
//     console.log(" am poor ");
// }

const richPeople = JohnNumberOfCar > 5 ? "John is Rich" : "John is not rich";

console.log(richPeople);


;

// 5. switch Statement

//  const day = "Monday" 


// switch (day) {
//   case "Monday":
//     console.log("Start of the week!"); // This runs
//     break;
//   case "Friday":
//     console.log("Weekend is near!");
//     break;
//   default:
//     console.log("Regular day");
// }

const day = "Friday"

switch (day) {
    case "Sunday" :
    console.log('Present Day is Sunday');
    break;
    case "Monday" :
    console.log('Present Day is Monday');
    break;
    case "Tuesday" :
    console.log('Present Day is Tuesday');
    break;
    case "Wednesday" :
    console.log('Present Day is Wednesday');
    break;
    case "Thursday" :
    console.log('Present Day is Thursday');
    break;
    case "Friday" :
    console.log('Present Day is Friday');
    break;
    case "Saturday" :
    console.log('Present Day is Saturday');
    break;
    default:
        console.log("can't find the day");
}

// LOOPS
// Types of loops
// for loop , while loop

// Example 
 for (i = 30;  i > 28; i-- ) {
    console.log(i);
 }

//  while Loop

let number  = 0;

while(number <= 3) {
    console.log(number);

    number++;
}

// example 2 

// let userInput;

// while (userInput !== "quite") {

//     userInput = prompt("Type 'quite' to text");

// }


// Do While Loop

// example 
let numberX = 5;
do {
    console.log(numberX);
    numberX++;
    
}while (5 <  3)


// example 2 

// let numberX = 1 
// do {
//     console.log(numberX);
//     numberX++;
// }while (numberX <= 5)


// For ... of  Loop

for (const char of "Harmony") {
    console.log(char);
}

// Array example 

const fruitsX = ["apple", "banana", "orange"];

for (const fruitX of  fruits) {
    console.log(fruitX);
}



// For In 
const person = {name: "Alice", age: 25,  Job_Despription: "Web developer" }
for (const  Details in person) {
    console.log(`${Details} : ${person[Details]}`);

}

const UserNewName = "Harmony";
const UserNewAge = 23;

console.log(`this is my name ${UserNewName} and my age is ${UserNewAge}` );
console.log(`this is my name, ${UserNewName} "and my age is , ${UserNewAge}`);


// Loop Control

// for (let io = 0; io < 10; io++)
// if(io === 5) { 
//     break;

// }
// console.log(io); 

// for (let io = 0; io < 10; io++) {
//     if (io === 5) {
//         break; // Exits the loop when io is 5
//     }
//     console.log(io); // Prints 0, 1, 2, 3, 4
// }

// break: Exit the loop immediately.
for (let io = 0; io <100; io++){
    if (io === 25) {
        break
    }
    console.log(io);
}

// continue: Skip to the next iteration.
for (let  iy = 0;  iy < 10; iy++) {
    if(iy === 5) continue;
    console.log(iy);
}
