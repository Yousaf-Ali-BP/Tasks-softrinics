const title = document.getElementById("title");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  title.textContent = "Ordered Black tea successfully.";
  title.classList.add("title");
  this.textContent = "Order Placed";
});
