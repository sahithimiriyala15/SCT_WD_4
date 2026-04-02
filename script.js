function addTask() {
  const text = document.getElementById("taskInput").value;
  const date = document.getElementById("dateInput").value;
  const time = document.getElementById("timeInput").value;

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const header = document.createElement("div");
  header.className = "task-header";

  const title = document.createElement("span");
  title.textContent = text;

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => taskDiv.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", title.textContent);
    if (newText) title.textContent = newText;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => taskDiv.remove();

  buttons.appendChild(completeBtn);
  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);

  header.appendChild(title);
  header.appendChild(buttons);

  const dateTime = document.createElement("div");
  dateTime.className = "date-time";
  dateTime.textContent = date + " " + time;

  taskDiv.appendChild(header);
  taskDiv.appendChild(dateTime);

  document.getElementById("taskList").appendChild(taskDiv);

  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("timeInput").value = "";
}