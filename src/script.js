document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("actionButton");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    message.textContent = "Vous avez cliqué sur le bouton!";
  });
});
