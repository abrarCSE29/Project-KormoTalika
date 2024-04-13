let task_heading = document.querySelector("#task-heading");
let task_description = document.querySelector("#task-description");
let task_add = document.querySelector("#new-task");
let clear_task = document.querySelector("#clear-task");
let task_list = document.querySelector("#task-list")
function addTask() {
    console.log(task_list)
    if (task_heading.value === "") {
        alert("Add a task heading");
    }
    else {
        
        let col_sm_4 = document.createElement("div");
        let card = document.createElement("div");
        let card_body = document.createElement("div");
        let card_title = document.createElement("h5");
        let card_text = document.createElement("p");
        let btnDone = document.createElement("a");
        let btnDelete = document.createElement("a");
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

        btnDelete.textContent = "Delete";
        btnDelete.href = "#";
        btnDelete.className = "btn btn-danger cus-margin";


        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card_body.appendChild(btnDone);
        card_body.appendChild(btnDelete);

        card.appendChild(card_body);
        col_sm_4.appendChild(card);

        task_list.appendChild(col_sm_4);

    }
}
