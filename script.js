let btn = document.querySelector("button");
let bulb = document.querySelector("#bulb");
let para = document.querySelector("p");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    para.style.color = "green";
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    para.style.color = "blue";
    flag = 0;
  }
});
