//  Simple Function
function greet() {
    console.log("Hello");
}

greet();


// Functions with parameters 
function greet(name, age) {
    console.log(`Hello ${name}! and my age is ${age}` );
}

greet("Alice", 23);




// Return Value
function add(a, b) {
    return a + b;
}
 console.log(add(2, 3)); 


// Arrow Function 
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); 


const minus = (g, h) => g - h;
console.log(minus(60, 20));


// Arrays: The Basics

const fruits = ["apple", "banana" , "orange"];
console.log(fruits);
console.log(fruits[1]);

// Adding/ Removing Elements from the End of the Array
fruits.push("grape");
console.log(fruits);

// Pop
fruits.pop()
fruits.pop()
console.log(fruits);

// Unshift add to front
fruits.unshift("kiwi");
console.log(fruits);

// shift remove from front
fruits.shift();
console.log(fruits);


// Looping through Arrays
fruits.forEach((fruit) => {
    console.log(fruit);
})



// Map
const numbers = [1,2,3];
const doubled = numbers.map(num => num * 2)
console.log(doubled);

// Intermediate
const fruitsX = ["apple", "banana", "orange" ];
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);


// Advanced
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
]

const userNames = users.map(user => ({
    name: user.name,
    age: user.age
}));
console.log(userNames);


// Find() Find first match
const numbersX = [5, 130, 8, 12, 44];
const found = numbersX.find(num => num >10)
console.log(found);


// Intermediate 
const fruitsY = ["apple", "banana", "grape"];
const result = fruitsY.find(fruitY => fruitY.startsWith("b"));
console.log(result);

const usersY = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  const user = usersY.find(u => u.id === 2);
  console.log(user); // { id: 2, name: "Bob" }

//   Filter Keep Matching Items
const numbersB = [1, 2, 3, 4, 5, 6];
const evens = numbersB.filter(num => num % 2 === 0)
console.log(evens);


// Intermediate
const fruitsM = ["apple", "banana", "grape", "kiwi"];
const longFruits = fruitsM.filter(fruitM => fruitM.length > 4);
console.log(longFruits);
