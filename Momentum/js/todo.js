const todoForm = document.querySelector("#todo-form");
const todoFormInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function todoSubmit(event){
    event.preventDefault();
    const inputValue= todoFormInput.value;
    todoFormInput.value="";
    //console.log(inputValue, todoFormInput.value);

    const newTodoObj = {
        text : inputValue,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
    //localStorage.setItem("todoKey",inputValue);
}

function paintTodo(newTodo){
    const newLi = document.createElement("li");
    newLi.id = newTodo.id;
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");
    
    newLi.appendChild(newSpan);
    newSpan.innerText = `${newTodo.text}`;
    newLi.appendChild(newBtn);
    newBtn.innerText = "삭제";
    todoList.appendChild(newLi);
    //const delButton = document.querySelector("#todo-list button");
    newBtn.addEventListener("click", delBtn);
}

function saveToDos(){
    //localStorage.setItem("todo",toDos);
    localStorage.setItem("todo",JSON.stringify(toDos));

}
todoForm.addEventListener("submit", todoSubmit);

let clickLiId = "";
function delBtn(event){
    //console.log(event.target.parentElement);
    const li = event.target.parentElement;
    //console.log(li.id);
    clickLiId=li.id;
    li.remove();
    toDos = toDos.filter(sexyFilter);;
    saveToDos();
}

function sexyFilter(item){
    console.dir(item);
    if(item.id == clickLiId){
        return false;
    }else{
        return true;
    }
    
}

if(localStorage.getItem("todo") != null){
    const todosArray = JSON.parse(localStorage.getItem("todo"));
    toDos = todosArray;
    //console.log(todosArray);
    todosArray.forEach(getArray);
    //console.log("toDos="+toDos);
}

function getArray(res){
    //console.log(res);
    paintTodo(res);
    //console.log(res.id);
}

/*
const test = [
    {
        key : "1",
        text : "기린",
    },
    {
        key : "2",
        text : "코끼리",
    },
    {
        key : "3",
        text : "사자",
    }
];
console.log(test, test.length);
test.forEach(forEachResult);

function forEachResult(item){
    console.log("key="+item.key);
    console.log("text="+item.text);
}
*/