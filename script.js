let task_heading = document.querySelector("#task-heading");
let task_description = document.querySelector("#task-description");
let task_add = document.querySelector("#new-task");
let clear_task = document.querySelector("#clear-task");
let task_list = document.querySelector("#task-list");
let search_exst_task = document.querySelector("#filter-existing-task");
let search_cmpltd_task = document.querySelector("#filter-completed-task");

// task_list.addEventListener('click', removeTask);
// task_list.addEventListener('click', clearExistingTaskList);

search_exst_task.addEventListener("keyup", filterExstTask);
search_cmpltd_task.addEventListener("keyup", filterCmpltdTask);

document.addEventListener("DOMContentLoaded", getTasks);

function addTask() {
  //console.log(task_list)
  if (task_heading.value === "") {
    alert("Add a task heading");
  } else {
    let col_sm_4 = document.createElement("div");
    let card = document.createElement("div");
    let card_body = document.createElement("div");
    let card_title = document.createElement("h5");
    let card_text = document.createElement("p");
    let btnDone = document.createElement("button");
    let btnDelete = document.createElement("button");
    // comment
    col_sm_4.className = "col-sm-4";
    card.className = "card";
    card_body.className = "card-body";
    card_title.className = "card-title";
    card_text.className = "card-text";

    card_title.textContent = task_heading.value;
    card_text.textContent = task_description.value;

    btnDone.textContent = "Done";
    btnDone.href = "#";
    btnDone.className = "btn btn-success";
    btnDone.addEventListener("click", doneTask);
    btnDone.id = "btn-done";

    btnDelete.textContent = "Delete";
    btnDelete.href = "#";
    btnDelete.className = "btn btn-danger cus-margin";
    btnDelete.addEventListener("click", removeTask);
    btnDelete.id = "delete-task";

    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    card_body.appendChild(btnDone);
    card_body.appendChild(btnDelete);

    card.appendChild(card_body);
    col_sm_4.appendChild(card);

    task_list.appendChild(col_sm_4);

    storeTaskinLocalStorage(card_title.textContent, card_text.textContent);

    task_heading.value = "";
    task_description.value = "";
  }
}

function removeTask(e) {
  if (e.target.id == "delete-task") {
    let ele = e.target.parentElement.parentElement.parentElement;
    ele.remove();
    search_exst_task.value = "";
    filterExstTask({ target: search_exst_task });
    search_cmpltd_task.value = "";
    filterCmpltdTask({ target: search_cmpltd_task });
  }
}

function clearExistingTaskList() {
  while (task_list.firstChild) {
    task_list.removeChild(task_list.firstChild);
  }
}

function doneTask(e) {
  //console.log("I am done task");
  search_exst_task.value = "";
  filterExstTask({ target: search_exst_task });
  console.log(search_exst_task.value);

  let ele = e.target.parentElement.parentElement.parentElement;
  let x = ele.querySelector("#btn-done");
  //console.log(x);
  ele.firstChild.firstChild.removeChild(x);
  //console.log(ele);
  let com_task = document.querySelector("#completed-task-list");
  //console.log(com_task.firstElementChild.textContent);
  if (com_task.firstElementChild.textContent === "Nothing Here") {
    com_task.removeChild(com_task.firstElementChild);
  }
  com_task.append(ele);
}

function filterExstTask(e) {
  let text = e.target.value.toLowerCase();
  let x = document.querySelectorAll("#task-list .col-sm-4");
  //console.log(x[0].querySelector(".card-title").textContent);

  x.forEach((task) => {
    let item = task.querySelector(".card-title").textContent.toLowerCase();
    if (item.indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function filterCmpltdTask(e) {
  let text = e.target.value.toLowerCase();
  let x = document.querySelectorAll("#completed-task-list .col-sm-4");
  try {
    //console.log(x[0].querySelector(".card-title").textContent);

    x.forEach((task) => {
      let item = task.querySelector(".card-title").textContent.toLowerCase();
      if (item.indexOf(text) != -1) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  } catch {
    console.log("No elements on the completed task list");
  }
}

function storeTaskinLocalStorage(taskTitle, taskDescription) {
  let tasks;
  let task = {
    title: taskTitle,
    description: taskDescription,
  };
  console.log(task);

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(task=>{
    let col_sm_4 = document.createElement("div");
    let card = document.createElement("div");
    let card_body = document.createElement("div");
    let card_title = document.createElement("h5");
    let card_text = document.createElement("p");
    let btnDone = document.createElement("button");
    let btnDelete = document.createElement("button");
    // comment
    col_sm_4.className = "col-sm-4";
    card.className = "card";
    card_body.className = "card-body";
    card_title.className = "card-title";
    card_text.className = "card-text";

    card_title.textContent = task.title;
    card_text.textContent = task.description;

    btnDone.textContent = "Done";
    btnDone.href = "#";
    btnDone.className = "btn btn-success";
    btnDone.addEventListener("click", doneTask);
    btnDone.id = "btn-done";

    btnDelete.textContent = "Delete";
    btnDelete.href = "#";
    btnDelete.className = "btn btn-danger cus-margin";
    btnDelete.addEventListener("click", removeTask);
    btnDelete.id = "delete-task";

    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    card_body.appendChild(btnDone);
    card_body.appendChild(btnDelete);

    card.appendChild(card_body);
    col_sm_4.appendChild(card);

    task_list.appendChild(col_sm_4);

  })
}
