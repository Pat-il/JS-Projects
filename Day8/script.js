let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("The button btn1 is clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// btn1.onclick = () => {
//     console.log("Handler1");
// };

// btn1.onclick = () => {
//     console.log("Handler2");
// };

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You are Inside Div");
// }

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked - handler1")
});

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked - handler2")
});

const handler3 = () =>  {
    console.log("Button1 was clicked - handler3")
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked - handler4")
});

// btn1.removeEventListener("click", handler3);