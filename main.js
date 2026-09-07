const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const completion = document.querySelector(".completion");

form.onsubmit = function (e) {
  e.preventDefault();
  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.innerHTML = "<span></span><button>×</button>";
  li.firstChild.textContent = input.value;
  list.prepend(li);

  input.value = "";
};

list.onclick = function (e) {
  let li = e.target.closest("li");
  if (e.target.tagName === "BUTTON") {
    li.classList.add("fade");
    setTimeout(function () {
      li.remove();
    }, 1500);
  } else {
    li.classList.toggle("done");
  }
};
