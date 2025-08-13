function addTask(){
    const taskText = document.getElementById("taskInput").value.trim();
const taskList = document.getElementById("taskList");

if(taskText === ""){
    alert("Please enter a task.")
    return;
}
const li = document.createElement("li");
li.className="task-item";
li.innerHTML = `<div><input type="checkbox" onchange="toggleComplete(this)"><span>${taskText}</span></div><button class="delete-btn" onclick="deleteTask(this)">🗑️</button>`;

taskList.appendChild(li);
document.getElementById("taskInput").value = "";
}
function toggleComplete(checkbox) {
    const taskItem = checkbox.closest(".task-item");
    taskItem.classList.toggle("completed");
  }

  function deleteTask(button) {
    const taskItem = button.closest(".task-item");
    taskItem.remove();
  }