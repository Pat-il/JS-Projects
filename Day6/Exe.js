let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College Students";

let divs = document.querySelectorAll(".box");
let idx = 1;

for(div of divs)
{
    div.innerText = `new Unique Value ${idx}`;
    idx++;
}

