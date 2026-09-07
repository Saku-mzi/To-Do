const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const completion = document.querySelector(".completion");

function updateProgress() {
  const todos = list.querySelectorAll("li");
  const completedTodos = list.querySelectorAll("li.done");
  const percentage =
    todos.length === 0 ? 0 : (completedTodos.length / todos.length) * 100;

  completion.style.width = `${percentage}%`;
}

form.onsubmit = function (e) {
  e.preventDefault();
  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.innerHTML = "<span></span><button>×</button>";
  li.firstChild.textContent = input.value;
  list.appendChild(li);
  updateProgress();

  input.value = "";
};

list.onclick = function (e) {
  let li = e.target.closest("li");
  if (e.target.tagName === "BUTTON") {
    li.remove();
  } else {
    li.classList.toggle("done");
  }

  updateProgress();
};
