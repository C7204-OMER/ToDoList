let text = document.getElementById("inpt");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let result = document.getElementById("result");
let trush = document.getElementById("cop");
btn1.addEventListener("click", add);
btn2.addEventListener("click", ok);
function add() {
  let x = text.value;
  let y = trush.value;
    if(x != ""){
    result.textContent = x;
    }
// function.reload();
}
function ok(){
    result.style.textDecoration = "line-through";
}
