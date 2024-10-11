"use strict";

// function to save task to local storage
function saveTasks(tasks) {
    // saves to browser, persistent after closing
    // key to retrieve = tasks
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// funciton to load tasks from local storage
function loadTasks() {
    // retrieve saved with key
    const tasks = localStorage.getItem("tasks");
    // if not null, parse and return resulting array
    return tasks ? JSON.parse(tasks) : [];
}


// exports
export { saveTasks, loadTasks };