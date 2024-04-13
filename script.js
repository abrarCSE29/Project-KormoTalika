let task_heading = document.querySelector("#task-heading");
let task_description = document.querySelector("#task-description");
let task_add = document.querySelector("#new-task");
let clear_task = document.querySelector("#clear-task");

function addTask() {
    console.log(task_heading.value)
  if (task_heading.value=== "") {
    alert("Add a task heading");
  }
}
