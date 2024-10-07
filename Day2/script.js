// Arithmatic Operators
let a = 5;
let b = 2;

// Arithmatic Operators

console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ^ b", a**b);

// Unary Operators

console.log("a++", a++);
console.log("++a", ++a);

console.log("a != b", a!=b);
console.log("a , b", a, b);

let c = 35;
let d = "35"; 
console.log("c == d", c == d);
console.log("c === d", c === d);

// Practice Questions 
// Que1 - Get a user to input a number using prompt(), Check it is divisible by 5 or not.
let n = prompt("Enter a number to check it is divisible by 5 or not");

if(n%5 == 0)
{
    console.log(n, " is a Divisible by 5");
}
else
{
    console.log(n," is not divisible by 5");
}

// Write a code which can give to grade to students according to their scores
// 80 - 100 A
// 70 - 79  B
// 60 - 69  C
// 50 - 59  D
// 0 - 49  F

let marks = prompt("Enter Student Marks to Give them Grade");

if(marks>= 80 && marks<=100)
{
    console.log("Your grade ia A");
}
else if(marks>= 70 && marks<=79)
{
    console.log("Your grade ia B");
}
else if(marks>= 60 && marks<=69)
{
    console.log("Your grade ia C");
}
else if(marks>= 50 && marks<=59)
{
    console.log("Your grade ia D");
}
else if(marks>= 0 && marks<=49)
{
    console.log("Your are Fail");
}
