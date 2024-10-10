for(let i = 1; i<= 5; i++)
{
    console.log("Apna College");
}

let str = "javaScript";
let s = 0;
for(let i of str)
{
    console.log("i ", i);
    i++;
}
console.log(s);

let student = {
    name : "Rahul Kumar",
    age : 30,
    cgpa : 7.5,
    isPass : true
}

for(let i in student)
{
    console.log(i , " = ", student[i]);
}

// Print all even no from 1 to 100
for(let i = 1; i<=100; i++)
{
    if(i%2 == 0)
    {
        console.log(i);
    }
}

// Lets play the game to know the no upto correctly

let gameNo = 25;
let userNo = prompt("Gues the gameNo");

while(gameNo != userNo)
{
    prompt("You enterd Wrong no, Try Again!");
}

console.log("Congratulations, You Enterd Wright no");

let obj = {
    item : "Pen",
    price : 10
}

// Template Literal

let output = "The Cost of ${obj.item} is ${obj.price}";
console.log(output);

console.log("The Cost of", obj.item, " is ", obj.price);

// Que 1. Prompt the user name to enter their full name, Generate the username for them based on the input.
let uname = prompt("Enter your Full Name");

console.log("@", uname, uname.length)

