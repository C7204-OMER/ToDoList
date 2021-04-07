let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let warn = document.getElementById('h3');
var input = document.getElementById('inputField');
addToDoButton.addEventListener('click', function(){
let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph);
    paragraph.style.background = "white";
    inputField.value = "";
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    inputField.addEventListener("keyup", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addToDo").click();
        }
    })
})
// paragraph.addEventListener('dblclick', function(){
    //     toDoContainer.appendChild(paragraph);
    // })




// let inpt = document.getElementById("inpt");
// let toDoList = document.getElementById("toDoList");
// let btn1 = document.getElementById("btn1");
// let notes = document.getElementById("notes");
// let trush = document.getElementById("cop");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// btn1.addEventListener("click", add);
// function add() {
    // let EnteredNote = inpt.value;
    // toDoList.textContent = EnteredNote;
    // let paragraph = document.createElement('p')
    // paragraph.innerText = inpt.value;
    // toDoList.appendChild(paragraph);
    // inpt.value= "";        
    // function.reload();
// }
// btn2.addEventListener("click", ok);
// btn3.addEventListener("click", del);
// function del(){
//     let z = "";
//     toDoList.textContent = "";
// }


    // toDoList.appendChild(NewLine);
    // btn2.appendChild(tik);