var fill = document.querySelector(".black-fill");
var form = document.querySelector(".feedback-form");
var closeBtn = form.querySelector(".feedback-close");
var openBtn = document.querySelector(".contacts > button");

openBtn.addEventListener("click", function(event){
  event.preventDefault();
  fill.classList.add("open-fill");
  form.classList.add("open");
});

closeBtn.addEventListener("click", function(event){
  event.preventDefault();
  fill.classList.remove("open-fill");
  form.classList.remove("open");
});
