let textField = document.getElementById("userInput");
let buttonAddTask = document.getElementById("buttonAddTask");
let taskList = document.getElementById("taskList");


// Funktion für Erstellung neues Elementes
function newTask() {
    //der Hauptkontainer der "Task" definieren
    const li = document.createElement("li");
    // die Inhalte der Text Feld definieren
    const textFieldValue = textField.value;
    // von der String von Text feld eine Node generieren
    const newTaskText = document.createTextNode(textFieldValue);
    //append der Node zu Hauptkontainer der Task    
    if (textFieldValue === "") {
        alert("Leck mich, gib Text");
        return;
    }
    li.appendChild(newTaskText)
    // append der neue LI (mit Task Text) zu UL
    const closeButton = document.createElement("span");
    closeButton.className = "closeBtn";
    closeButton.textContent = "✖";
    li.appendChild(closeButton);

    closeButton.onclick = function() {
        this.parentElement.remove();
    };
    taskList.append(li);
    textField.value = "";
}
// add on click Funktionalität
buttonAddTask.addEventListener("click", newTask);


const todo = fetch("http://127.0.0.1:4001/todo")
  .then((response) => response.json())
  .then((json) => showTasksFromApi(json));


function showTasksFromApi(tasksJSON){
    console.log(tasksJSON[1]);

    for (let i = 0; i < tasksJSON.length; i++) {

        const newLi = document.createElement("li");
        const closeBtn = document.createElement("span");
        closeBtn.className = "closeBtn";
        closeBtn.textContent = "✖";
        closeBtn.onclick = function() {
            this.parentElement.remove();
        };
        newLi.innerText = tasksJSON[i].title;
        newLi.appendChild(closeBtn);
        taskList.appendChild(newLi);
    }
}