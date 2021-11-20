//selectors
var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector('button');
var todoList = document.querySelector('.todo-list');

//Event Handler
btn.onclick= create;
todoList.onclick = deletecheck;

function create(e)
{
    e.preventDefault();

    var newDiv=document.createElement('div');
    newDiv.classList.add('todo');

    var newLi = document.createElement('li');
    newLi.classList.add('todo-item');
    newLi.innerHTML = tofoInput.value;
    newDiv.appendChild(newLi);

    var Checkbtn = document.createElement('button');
        Checkbtn.classList.add('complete');
        Checkbtn.innerHTML="<i class ='fa fa-check'></i>"
    
]   var Checkbtn = document.createElement('button');
        Checkbtn.classList.add('complete');
        Checkbtn.innerHTML="<i class ='fa fa-trash'></i>"

    todoList.appendChild(newDiv);
    todoInput.value = "";
}

function deletecheck(e)
{
    var event = e.target;
    console.log(event);

    if(event.classList[0]=='delete'){
        console.log('You pressed delete button.')
    }
}