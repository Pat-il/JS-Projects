// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

let par = document.querySelector("p");
console.log(par.setAttribute("class", "newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";

// div.style.backgroundColor = "purple";

// div.style.fontSize = "20px";

// div.innerText = "Hello!!"

let newBtn = document.createElement("button");
newBtn.innerText = "click Me!!";
console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// div.prepend(newBtn);

// div.before(newBtn);

// div.after(newBtn);

let apr = document.querySelector("p");
apr.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerText = "<i>Hi I am new!!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();