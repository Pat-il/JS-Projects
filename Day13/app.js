const url = "http://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// let promise = fetch(url);
// console.log(promise);

// AJAX :- in the network or in server we pass request and we get responce i.e 
// AJAX(in JSON Formate)

const getFacts = async() => {
    console.log("getting data.......")
    let responce = await fetch(url);
    console.log(responce); // JSON Formate
    let data = await responce.json();
    // console.log(data);
    // console.log(data[0].text);
    factPara.innerText = data[1].text;
    
}

btn.addEventListener("click", getFacts);