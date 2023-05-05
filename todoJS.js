let taskList = document.getElementById("taskList");
let counter = document.getElementById("counter");

function addTask() {
  let taskInput = document.getElementById("taskInput");
  if (taskInput.value === "") {
    return;
  }
  let li = document.createElement("li");
  li.innerHTML = taskInput.value + "<button2 onclick='removeTask(this)'>Remove</button2>";
  taskList.appendChild(li);
  taskInput.value = "";
  updateCounter();
}

function removeTask(button2) {
  button2.parentNode.remove();
  updateCounter();
}

function updateCounter() {
  let count = taskList.children.length;
  counter.innerHTML = count + " items";
}

updateCounter();

