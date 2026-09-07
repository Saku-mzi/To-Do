const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

form.onsubmit = function (e) {
  e.preventDefault();
  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.innerHTML = "<span></span><button>×</button>";
  li.firstChild.textContent = input.value;
  list.appendChild(li);

  input.value = "";
};

list.onclick = function (e) {
  let li = e.target.closest("li");
  if (!li) return;

  if (e.target.tagName === "BUTTON") {
    li.remove();
  } else {
    li.classList.toggle("done");
  }
};
