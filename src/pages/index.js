const input = document.querySelector('.data__input');
const buttonSubmit = document.querySelector('.data__button-save');
const taskList = document.querySelector('.tasks-list');
const form = document.querySelector('.form');

function createElement (){
    const taskItem =document.createElement('li');
    taskItem.innerText = input.value;
    taskItem.classList.add('tasks-list__item');
    taskList.prepend(taskItem);
    input.value = '';
    
    function addCompleted(){
        taskItem.classList.add.toggle('tasks-list__item_complete');
    };
   
    taskItem.addEventListener('click',()=>{
        taskItem.classList.toggle('tasks-list__item_complete');
    });

    taskItem.addEventListener('dblclick',()=>{
        taskList.removeChild(taskItem);
    });
};

input.addEventListener("keyup",(evt)=>{
    evt.preventDefault()
    if (evt.key === "Enter") {
        createElement();
        }
    });
    
buttonSubmit.addEventListener('click',createElement);




