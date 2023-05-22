const notification = document.querySelector(".notification");
const play = document.querySelector("#button");

function createToast(type, icon, title, text) {
  const newToast = document.createElement("div");
  newToast.classList.add("toast", type);
  newToast.innerHTML = `
  <i class=" ${icon} fa-2xl"></i>
  <div class="content">
  <div class="title">${title}</div>
  <span>${text}</span>
  </div>
    <i class="fa-sharp fa-solid fa-xmark" onClick="(this.parentElement).remove()"></i>

  `;
  notification.appendChild(newToast);
  newToast.timeout = setTimeout(() => newToast.remove(), 5000);
}

function check() {
  const type = "correct";
  const icon = "fa-solid fa-circle-check";
  const title = "Correct";
  const userWord = "example";
  const text = `Congratulations! ${userWord.toUpperCase()} is the correct word!`;

  createToast(type, icon, title, text);
}
play.addEventListener("click", check);
