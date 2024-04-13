let task_heading = document.querySelector("#task-heading");
let task_description = document.querySelector("#task-description");
let task_add = document.querySelector("#new-task");
let clear_task = document.querySelector("#clear-task");
let task_list = document.querySelector("#task-list")
function addTask() {
    console.log(task_heading.value)
    if (task_heading.value === "") {
        alert("Add a task heading");
    }
    else {
         let card = document.createElement(div);
         div.appendChild(card);
    }
}
