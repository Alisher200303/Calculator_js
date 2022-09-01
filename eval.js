"use strict";

const display = document.querySelector(".display"),
      btns = document.querySelectorAll("li"),
      changeColor = document.querySelector("#changeColor"),
      body = document.querySelector("body"),
      trick = document.querySelector("#trick"),
      dfColor = document.querySelector("#defoult");

btns.forEach((item => {

    item.addEventListener("click", () => {

        if(item.id == "clear") {

            display.innerHTML = "";

        } else if (item.id == "backspace") {

            let str = display.innerHTML.toString();
            display.innerHTML = str.substr(0, str.length - 1);

        } else if (item.id != "" && item.id == "equal") {
            display.innerHTML = eval(display.innerHTML);

        } else if (display.innerText == '' && item.id == "equal") {
            display.innerText = "Empty :(";
            setTimeout(() => (display.innerText = ""), 200);
        } 
        else {
            display.innerHTML += item.innerText;
        };
    });
}));





trick.addEventListener("click", () => {
    body.style.background = changeColor.value;
    dfColor.addEventListener("click", () => {
        body.style.background = "";
    });
});

