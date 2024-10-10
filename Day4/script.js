let marks = [82, 93, 63, 72];
console.log(marks);

console.log(marks.length);

for(let i of marks)
{
    console.log(i);
}
let cities = ["mumbai", "pune", "nashik", "dhule", "jalgoan"];

for(let city of cities)
{
    console.log(city);
}
// Que 1 - for given arrays of student marks = [98, 75, 79, 89, 83, 63];
// find an avg marks of students

let score = [98, 75, 79, 89, 83, 63];
let sum = 0;
for(let i = 0; i<score.length; i++)
{
    sum = sum + score[i];
}

let avg = sum/score.length;
console.log("Sum = ", sum, " Avg = ", avg);

// Que 2 - for an given array prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer 10% on them. Change the array to store final price on them.

let price = [250, 645, 300, 900, 50];
let finalpri = [];

for(let i = 0; i<price.length; i++)
{
    finalpri[i] = 0.9 * price[i];
}

for(let i = 0; i<finalpri.length; i++)
{
    console.log(finalpri[i]);
}

let fooditems = ["tomato", "maggie", "apple", "banana", "potato"];
console.log(fooditems);

// Create an array to store companies 
// 1. remove the first company from array
// 2. remove uber add ola in its place
// 3. add amazon at the end
let companies = ["Boomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies[1] = "Ola";
console.log(companies);

companies.push("amazon");
console.log(companies);