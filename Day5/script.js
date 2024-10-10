function sum(x, y) {
    let s = x + y;
    return s;
}

let val = sum(4, 5);
console.log(val);

const arrsub = (a, b) => {
    console.log(a - b);
}

const arrmul = (a, b) => {
    console.log(a * b);
}

const prihello = () => console.log("Hello World!!!");

//  Que 1 - Take a input as a string and count the no of vowels in it.
let count = 0;
function countvowels(str) {
    for(let cha of str)
    {
        // console.log(cha);
        if(cha == "a" || cha == "e" || cha == "i" || cha == "o" || cha == "u" || cha == "A" || cha == "E" || cha == "I" || cha == "O" || cha == "U")
        {
            count++;
        }
    }
    console.log("The no of vowels in the ", str, " is ", count);
}

const countvow = (str) => {
    for(let cha of str)
    {
        // console.log(cha);
        if(cha == "a" || cha == "e" || cha == "i" || cha == "o" || cha == "u" || cha == "A" || cha == "E" || cha == "I" || cha == "O" || cha == "U")
        {
            count++;
        }
    }
    console.log("The no of vowels in the ", str, " is ", count);
}


let arr = ["Pune", "Mumbai", "Nashik"];

arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});

// Que - 1 : for taking input as a number and create their squares using forEach loop.
// let noArr = [1, 2, 3, 4, 5];
//  noArr.forEach((no) => {
//      console.log(no*no);
//  })

 let nums = [1, 2, 3, 4, 5];

 let newArr = nums.map((val) => {
    return val**2;
 })

 console.log(newArr);

 let array = [1, 2, 3, 4, 5, 6, 7];

 let newarr = array.filter((val) => {
    return val%2 === 0
 })

 console.log(newarr);

 let a1 = [1,2,3,4,5];

 const newa1 = a1.reduce((prev, curr) => {
    return prev + curr;
 })

 console.log(newa1);

 const max = a1.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
 })

 console.log(max);

 const min = a1.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
 })

 console.log(min);

//  Que 1 - We are given array of marks of student. Find out the marks of student that scored 90+.
let marks1 = [89, 94, 75, 81, 96, 99];

let marks2 = marks1.filter((val) => {
    return val>90;
})

console.log(marks2);

// Que 2 - Ask user to give the input no and create the array of input 1 to n.use reduce 
// method to calculate sum of all no.s of array and use reduce method to calculate
// product of all no.s
let n = prompt("Enter the no to having upto the array");
let arr1 = [];
for(let i = 0; i<n; i++)
{
    arr1[i] = i+1;
}

const sum1 = arr1.reduce((prev, curr) => {
    return prev + curr;
})

console.log("The sum of all no.s is ", sum1)

const prod1 = arr1.reduce((prev, curr) => {
    return prev*curr;
})

console.log("The Product of all no.s is ", prod1);