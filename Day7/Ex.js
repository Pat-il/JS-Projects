// Que - 1
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";

console.log(newBtn);

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.querySelector("body").prepend(newBtn);

// Que - 2
let para = document.querySelector("p");
// para.setAttribute("class", "newClass"); from this method prev gone and new overrite 
// so using these we want prev and next both so we use here classlist property
para.classList.add("newClass");