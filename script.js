const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  btn.classList.toggle("btn-dunkel");
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "black" ? "white" : "black";
  document.body.style.transition = "1s";
});
