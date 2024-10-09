"use strict"; // to enforce rules, checks for errors 

// function to add task
function addTask(task, taskList) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}

// function to clear input field
function clearInput(inputField) {
    inputField.value = "";
}

// alt method to export
export function sayHi() {
    alert ("Hello world");
}

// exporting functions
export { addTask, clearInput };