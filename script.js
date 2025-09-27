// script.js
console.log("JavaScript connected!!");

// decare variables
let city = "Delhi";
const country = "India";
let name = "Ritesh";
let age = 23;
let isStudent = false;
let value = null;
let x;
let a = 10, b = 3;

// print them
console.log("City:", city);
console.log("Country:", country); 
console.log("Name:", name); 
console.log("Age:", age); 
console.log("Are you a student?:", isStudent); 
console.log("Value:", value); 
console.log( x ); 
console.log( a + b ); 
console.log( a - b ); 
console.log( a * b ); 
console.log( a / b ); 
console.log( a % b );

// operation
let AGE = 23;

if(AGE > 18)
{
  console.log("Adult");
}
else
{
    console.log("Not Adult");
}

// operation 2
function greet (name)
{
    return "Hello " + name;
}
console.log(greet("Ritesh"));

const add = function(a, b)
{
    return a + b;
};
console.log(add(29, 42));

const square = (x) => x*x;
console.log(square(2942));

// assignment
const product = (a, b) => a*b;
console.log(product(29, 42));

const isEven = (n) => n%2;
{
   if(isEven(2942) == 0)
   {
    console.log("even");
   }
   else
   {
    console.log("odd");
   }
}





