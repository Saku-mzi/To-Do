const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const completion = document.querySelector(".completion");

function updateProgress() {
  const todos = list.querySelectorAll(".todo-item");
  const completedTodos = list.querySelectorAll(".todo-item.done");
  const percentage =
    todos.length === 0 ? 0 : (completedTodos.length / todos.length) * 100;

  completion.style.width = `${percentage}%`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = input.value.trim();
  if (value === "") return;

  const todoItem = document.createElement("form");
  todoItem.className = "todo-item";

  const label = document.createElement("label");
  label.className = "todo-label";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-check";

  const text = document.createElement("span");
  text.className = "todo-text";
  text.textContent = value;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "todo-delete";
  deleteButton.textContent = "×";
  deleteButton.setAttribute("aria-label", "Remove task");

  label.append(checkbox, text);
  todoItem.append(label, deleteButton);
  list.prepend(todoItem);

  updateProgress();
  input.value = "";
  input.focus();
});

list.addEventListener("change", function (e) {
  const checkbox = e.target.closest(".todo-check");
  if (!checkbox) return;

  const item = checkbox.closest(".todo-item");
  item.classList.toggle("done", checkbox.checked);
  updateProgress();
});

list.addEventListener("click", function (e) {
  const deleteButton = e.target.closest(".todo-delete");
  if (!deleteButton) return;

  const item = deleteButton.closest(".todo-item");
  item.remove();
  updateProgress();
});
