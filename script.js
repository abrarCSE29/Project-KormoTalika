let task_heading = document.querySelector("#task-heading");
let task_description = document.querySelector("#task-description");
let task_add = document.querySelector("#new-task");
let clear_task = document.querySelector("#clear-task");
let task_list = document.querySelector("#task-list");
let search_exst_task = document.querySelector("#filter-existing-task");
// task_list.addEventListener('click', removeTask);
// task_list.addEventListener('click', clearExistingTaskList);

search_exst_task.addEventListener('keyup',filterExstTask);
function addTask() {
    //console.log(task_list)
    if (task_heading.value === "") {
        alert("Add a task heading");
    }
    else {
        
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
        card_body.className="card-body";
        card_title.className = "card-title";
        card_text.className = "card-text";

        card_title.textContent=task_heading.value;
        card_text.textContent = task_description.value;
        
        btnDone.textContent = "Done";
        btnDone.href = "#";
        btnDone.className = "btn btn-success";
        btnDone.addEventListener("click",doneTask);
        btnDone.id="btn-done";
    

        btnDelete.textContent = "Delete";
        btnDelete.href = "#";
        btnDelete.className = "btn btn-danger cus-margin";
        btnDelete.addEventListener("click",removeTask);
        btnDelete.id="delete-task";



        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card_body.appendChild(btnDone);
        card_body.appendChild(btnDelete);

        card.appendChild(card_body);
        col_sm_4.appendChild(card);

        task_list.appendChild(col_sm_4);
        task_heading.value="";
        task_description.value="";
    }

}

function removeTask(e){
    if(e.target.id=="delete-task"){
        let ele = (e.target.parentElement.parentElement.parentElement);
        ele.remove();
    }

}

function clearExistingTaskList(){
    while(task_list.firstChild){
        task_list.removeChild(task_list.firstChild);
    }
}

function doneTask(e){
    console.log("I am done task");
    let ele = (e.target.parentElement.parentElement.parentElement);
    let x = ele.querySelector("#btn-done");
    //console.log(x);
    (ele.firstChild.firstChild).removeChild(x);
    //console.log(ele);
    let com_task = document.querySelector("#completed-task-list");
    console.log(com_task.firstElementChild.textContent);
    if(com_task.firstElementChild.textContent==="Nothing Here"){
        com_task.removeChild(com_task.firstElementChild);
    }
    
    com_task.append(ele);
}

function filterExstTask(e){
    console.log(task_list);
}