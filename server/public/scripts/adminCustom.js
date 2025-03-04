document.addEventListener("DOMContentLoaded", function () {
  console.log("AdminJS Custom Script Loaded!");

  document.title = "MERN Admin Panel";

  document.querySelectorAll(".adminjs_Button").forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Button Clicked: " + this.innerText);
    });
  });
});
