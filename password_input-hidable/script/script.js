const input = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  const type = input.getAttribute("type");

  if (type === "text") {
    input.setAttribute("type", "password");
  } else {
    input.setAttribute("type", "text");
  }
});
